/*
 * Cppcheck - A tool for static C/C++ code analysis
 * Copyright (C) 2007-2017 Cppcheck team.
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
//---------------------------------------------------------------------------
#ifndef suppressionsH
#define suppressionsH
//---------------------------------------------------------------------------

#include "config.h"

#include <istream>
#include <list>
#include <set>
#include <string>

/// @addtogroup Core
/// @{

/** @brief class for handling suppressions */
class CPPCHECKLIB Suppressions {
public:

    struct CPPCHECKLIB ErrorMessage {
        std::string errorId;
        void setFileName(const std::string &s);
        const std::string &getFileName() const {
            return _fileName;
        }
        int lineNumber;
        bool inconclusive;
        std::string symbolNames;
    private:
        std::string _fileName;
    };

    struct CPPCHECKLIB Suppression {
        Suppression() : lineNumber(NO_LINE), matched(false) {}
        Suppression(const Suppression &other) {
            *this = other;
        }
        Suppression(const std::string &id, const std::string &file, int line=NO_LINE) : errorId(id), fileName(file), lineNumber(line), matched(false) {}

        Suppression & operator=(const Suppression &other) {
            errorId = other.errorId;
            fileName = other.fileName;
            lineNumber = other.lineNumber;
            symbolName = other.symbolName;
            matched = other.matched;
            return *this;
        }

        bool operator<(const Suppression &other) const {
            if (errorId != other.errorId)
                return errorId < other.errorId;
            if (lineNumber < other.lineNumber)
                return lineNumber < other.lineNumber;
            if (fileName != other.fileName)
                return fileName < other.fileName;
            if (symbolName != other.symbolName)
                return symbolName < other.symbolName;
        };

        /**
         * Parse inline suppression in comment
         * @param comment the full comment text
         * @param errorMessage output parameter for error message (wrong suppression attribute)
         * @return true if it is a inline comment.
         */
        bool parseComment(std::string comment, std::string *errorMessage);

        bool isSuppressed(const ErrorMessage &errmsg) const;

        bool isMatch(const ErrorMessage &errmsg);
        std::string getText() const;

        std::string errorId;
        std::string fileName;
        int lineNumber;
        std::string symbolName;
        bool matched;

        static const int NO_LINE = 0;
    };

    /**
     * @brief Don't show errors listed in the file.
     * @param istr Open file stream where errors can be read.
     * @return error message. empty upon success
     */
    std::string parseFile(std::istream &istr);

    /**
     * @brief Don't show errors listed in the file.
     * @param filename file name
     * @return error message. empty upon success
     */
    std::string parseXmlFile(const char *filename);

    /**
     * @brief Don't show the given error.
     * @param line Description of error to suppress (in id:file:line format).
     * @return error message. empty upon success
     */
    std::string addSuppressionLine(const std::string &line);

    /**
     * @brief Don't show this error. File and/or line are optional. In which case
     * the errorId alone is used for filtering.
     * @param errorId the id for the error, e.g. "arrayIndexOutOfBounds"
     * @param file File name with the path, e.g. "src/main.cpp"
     * @param line number, e.g. "123"
     * @return error message. empty upon success
     */
    std::string addSuppression(const Suppression &suppression);

    /**
     * @brief Returns true if this message should not be shown to the user.
     * @param errmsg error message
     * @return true if this error is suppressed.
     */
    bool isSuppressed(const ErrorMessage &errmsg);

    /**
	 * @brief Create an xml dump of suppressions
	 * @param out stream to write XML to
	*/
	void dump(std::ostream &out);

    /**
     * @brief Returns list of unmatched local (per-file) suppressions.
     * @return list of unmatched suppressions
     */
    std::list<Suppression> getUnmatchedLocalSuppressions(const std::string &file, const bool unusedFunctionChecking) const;

    /**
     * @brief Returns list of unmatched global (glob pattern) suppressions.
     * @return list of unmatched suppressions
     */
    std::list<Suppression> getUnmatchedGlobalSuppressions(const bool unusedFunctionChecking) const;

    static bool matchglob(const std::string &pattern, const std::string &name);
private:
    /** @brief List of error which the user doesn't want to see. */
    std::list<Suppression> _suppressions;
};

/// @}
//---------------------------------------------------------------------------
#endif // suppressionsH
