/*
 * Cppcheck - A tool for static C/C++ code analysis
 * Copyright (C) 2007-2018 Cppcheck team.
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
#ifndef utilsH
#define utilsH
//---------------------------------------------------------------------------

#include <algorithm>
#include <cctype>
#include <cstddef>
#include <string>

/*! Helper class to aid in the initializing global const data */
template < typename Cont >
class make_container {
public:
    typedef make_container< Cont > my_type;
    typedef typename Cont::value_type T;

    my_type& operator<< (const T& val) {
        data_.insert(data_.end(), val);
        return *this;
    }
    my_type& operator<< (const Cont& other_container) {
        for (typename Cont::const_iterator it=other_container.begin(); it!=other_container.end(); ++it) {
            data_.insert(data_.end(), *it);
        }
        return *this;
    }
    my_type& operator<< (T&& val) {
        data_.insert(data_.end(), val);
        return *this;
    }
    my_type& operator<< (const char* val) {
        data_.insert(data_.end(), val);
        return *this;
    }
    operator Cont() const {
        return data_;
    }
private:
    Cont data_;
};

inline bool endsWith(const std::string &str, char c)
{
    return str[str.size()-1U] == c;
}

inline bool endsWith(const std::string &str, const char end[], std::size_t endlen)
{
    return (str.size() >= endlen) && (str.compare(str.size()-endlen, endlen, end)==0);
}

inline static const char *getOrdinalText(int i)
{
    if (i == 1)
        return "st";
    if (i == 2)
        return "nd";
    if (i == 3)
        return "rd";
    return "th";
}

inline static int caseInsensitiveStringCompare(const std::string &lhs, const std::string &rhs)
{
    if (lhs.size() != rhs.size())
        return (lhs.size() < rhs.size()) ? -1 : 1;
    for (unsigned int i = 0; i < lhs.size(); ++i) {
        const int c1 = std::toupper(lhs[i]);
        const int c2 = std::toupper(rhs[i]);
        if (c1 != c2)
            return (c1 < c2) ? -1 : 1;
    }
    return 0;
}

template< class T, std::size_t N >
T* begin( T (&array)[N] )
{
    return array;
}

template< class T, std::size_t N >
T* end( T (&array)[N] )
{
    return array+N;
}

#define UNUSED(x) (void)(x)

#endif
