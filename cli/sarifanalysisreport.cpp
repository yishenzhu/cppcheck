/*
 * Cppcheck - A tool for static C/C++ code analysis
 * Copyright (C) 2007-2022 Cppcheck team.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "sarifanalysisreport.h"

#include <picojson.h>

SARIFAnalysisReport::SARIFAnalysisReport( std::string versionNumber)
    : mVersionNumber(std::move(versionNumber)) {}

void SARIFAnalysisReport::addFinding(const ErrorMessage &msg) {
    std::map<std::string, std::vector<ErrorMessage>>::iterator it = mFindings.insert(mFindings.begin(), {msg.id, std::vector<ErrorMessage>()});
    it->second.push_back(msg);
}

static std::map<std::string, picojson::value> text(const std::string& s) {
    std::map<std::string, picojson::value> m = {{ "text", picojson::value(s) }};
    return m;
}

static std::map<std::string, picojson::value> level(const std::string& s) {
    std::map<std::string, picojson::value> m = {{ "level", picojson::value(s) }};
    return m;
}

// SARIFAnalysisReport::emit() constructs a SARIF log object, according to the SARIF 2.1.0 specification.
// The complete specification is at <https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html>
// but GitHub provides an easier document to read (albeit with different requirements):
// <https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning>.
std::string SARIFAnalysisReport::emit() {
    picojson::object sarifLog;
    picojson::object run;
    picojson::object tool;
    picojson::object toolComponent;
    picojson::array results;
    picojson::array rules;

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317480
    sarifLog["version"] = picojson::value("2.1.0");

    // While not required, the SARIF standard recommends adding the "$schema" property.
    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317481
    sarifLog["$schema"] = picojson::value("https://json.schemastore.org/sarif-2.1.0.json");

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317541
    toolComponent["name"] = picojson::value("CppCheck");

    // While the "version" property isn't required, it's useful information to supply.
    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317546
    toolComponent["version"] = picojson::value(mVersionNumber);

    for (std::map<std::string, std::vector<ErrorMessage>>::iterator it = mFindings.begin(); it != mFindings.end(); ++it) {
        const ErrorMessage rule = it->second[0];

        // https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning#reportingdescriptor-object
        picojson::object properties = {
            { "precision", picojson::value(sarifPrecision(rule.certainty)) },
        };

        // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317836
        picojson::object reportingDescriptor = {
            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317839
            { "id", picojson::value(rule.id) },
            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317843
            { "name", picojson::value(rule.shortMessage()) },
            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317845
            { "shortDescription", picojson::value(text(rule.shortMessage())) },
            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317846
            { "fullDescription", picojson::value(text(rule.verboseMessage())) },
            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317849
            { "help", picojson::value(text(rule.verboseMessage())) },
            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317850
            { "defaultConfiguration", picojson::value(level(sarifSeverity(rule.severity))) },
            { "properties", picojson::value(properties) },
        };

        rules.emplace_back(reportingDescriptor);

        for (const ErrorMessage& err : it->second) {
            picojson::array locations;

            for (std::list<ErrorMessage::FileLocation>::const_iterator loc = err.callStack.begin(); loc != err.callStack.end(); ++loc) {
                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317427
                picojson::object artifactLocation = {
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317430
                    {"uri", picojson::value(loc->getfile())}
                };

                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317685
                picojson::object region = {
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317690
                    {"startLine",   picojson::value(double(loc->line))},
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317691
                    {"startColumn", picojson::value(double(loc->column))},
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317692
                    {"endLine",     picojson::value(double(loc->line))},
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317693
                    {"endColumn",   picojson::value(double(loc->column))},
                };

                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317678
                picojson::object physicalLocation = {
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317681
                    {"artifactLocation", picojson::value(artifactLocation)},
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317682
                    {"region",           picojson::value(region)},
                };

                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317670
                picojson::object location = {
                    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317678
                    {"physicalLocation", picojson::value(physicalLocation)},
                };

                locations.emplace_back(location);
            }

            // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317638
            picojson::object result = {
                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317643
                {"ruleId", picojson::value(err.id)},
                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317649
                {"message", picojson::value(text(err.shortMessage()))},
                // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317650
                {"locations", picojson::value(locations)},
            };

            results.emplace_back(result);
        }
    }

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317556
    toolComponent["rules"] = picojson::value(rules);

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317531
    tool["driver"] = picojson::value(toolComponent);

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317490
    run["tool"] = picojson::value(tool);

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317507
    run["results"] = picojson::value(results);

    // https://docs.oasis-open.org/sarif/sarif/v2.1.0/os/sarif-v2.1.0-os.html#_Toc34317482
    sarifLog["runs"] = picojson::value({run});

    return static_cast<picojson::value>(sarifLog).serialize(true);
}

std::string SARIFAnalysisReport::sarifSeverity(Severity::SeverityType severity) {
    switch (severity) {
        case Severity::SeverityType::error:
            return "error";
        case Severity::SeverityType::warning:
            return "warning";
        // SARIF only recognizes three severities: error, warning, and note. CppCheck
        // has a few others (style, performance, portability, information), which
        // means they will get lumped into "note" when converted to SARIF.
        default:
            return "note";
    }
}

std::string SARIFAnalysisReport::sarifPrecision(Certainty::CertaintyLevel certainty) {
    switch (certainty) {
        case Certainty::CertaintyLevel::safe:
            return "very-high";
        case Certainty::CertaintyLevel::normal:
            return "high";
        case Certainty::CertaintyLevel::experimental:
            return "medium";
        case Certainty::CertaintyLevel::inconclusive:
        default:
            return "low";
    }
}