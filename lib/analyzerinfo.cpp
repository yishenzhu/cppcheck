/*
* Cppcheck - A tool for static C/C++ code analysis
* Copyright (C) 2007-2016 Cppcheck team.
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

#include "analyzerinfo.h"

#include "path.h"
#include "utils.h"

#include <tinyxml2.h>
#include <cstring>
#include <map>
#include <sstream>

AnalyzerInformation::~AnalyzerInformation()
{
    close();
}

static std::string getFilename(const std::string &fullpath)
{
    std::string::size_type pos1 = fullpath.find_last_of("/\\");
    pos1 = (pos1 == std::string::npos) ? 0U : (pos1 + 1U);
    std::string::size_type pos2 = fullpath.rfind('.');
    if (pos2 < pos1)
        pos2 = std::string::npos;
    if (pos2 != std::string::npos)
        pos2 = pos2 - pos1;
    return fullpath.substr(pos1,pos2);
}

void AnalyzerInformation::close()
{
    analyzerInfoFile.clear();
    if (fout.is_open()) {
        fout << "</analyzerinfo>\n";
        fout.close();
    }
}

static bool skipAnalysis(const std::string &analyzerInfoFile, unsigned long long checksum, std::list<ErrorLogger::ErrorMessage> *errors)
{
    tinyxml2::XMLDocument doc;
    tinyxml2::XMLError error = doc.LoadFile(analyzerInfoFile.c_str());
    if (error != tinyxml2::XML_SUCCESS)
        return false;

    const tinyxml2::XMLElement * const rootNode = doc.FirstChildElement();
    if (rootNode == nullptr)
        return false;

    const char *attr = rootNode->Attribute("checksum");
    if (!attr || attr != std::to_string(checksum))
        return false;

    for (const tinyxml2::XMLElement *e = rootNode->FirstChildElement(); e; e = e->NextSiblingElement()) {
        if (std::strcmp(e->Name(), "error") == 0)
            errors->push_back(ErrorLogger::ErrorMessage(e));
    }

    return true;
}

bool AnalyzerInformation::analyzeFile(const std::string &buildDir, const std::string &sourcefile, const std::string &cfg, unsigned long long checksum, std::list<ErrorLogger::ErrorMessage> *errors)
{
    if (buildDir.empty() || sourcefile.empty())
        return true;
    close();

	analyzerInfoFile = buildDir + "/" + std::to_string(checksum);

    if (skipAnalysis(analyzerInfoFile, checksum, errors))
        return false;

    fout.open(analyzerInfoFile);
    if (fout.is_open()) {
        fout << "<?xml version=\"1.0\"?>\n";
        fout << "<analyzerinfo checksum=\"" << checksum << "\">\n";
    } else {
        analyzerInfoFile.clear();
    }

    return true;
}

void AnalyzerInformation::reportErr(const ErrorLogger::ErrorMessage &msg, bool /*verbose*/)
{
    if (fout.is_open())
        fout << msg.toXML() << '\n';
}

void AnalyzerInformation::setFileInfo(const std::string &check, const std::string &fileInfo)
{
    if (fout.is_open() && !fileInfo.empty())
        fout << "  <FileInfo check=\"" << check << "\">\n" << fileInfo << "  </FileInfo>\n";
}
