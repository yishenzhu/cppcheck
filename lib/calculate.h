/*
 * Cppcheck - A tool for static C/C++ code analysis
 * Copyright (C) 2007-2021 Cppcheck team.
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

#ifndef calculateH
#define calculateH

#include "mathlib.h"
#include <string>

template<class T>
static bool isEqual(T x, T y)
{
    return x == y;
}

template<>
bool isEqual<double>(double x, double y)
{
    const double diff = (x > y) ? x - y : y - x;
    return !((diff / 2) < diff);
}

template<class T>
static bool isZero(T x)
{
    return isEqual<T>(x, T(0));
}

template<class R, class T>
static R calculate(const std::string& s, const T& x, const T& y, bool* error = nullptr)
{
    auto wrap = [](T z) {
        return R{z};
    };
    switch (MathLib::encodeMultiChar(s)) {
    case '+':
        return wrap(x + y);
    case '-':
        return wrap(x - y);
    case '*':
        return wrap(x * y);
    case '/':
        if (isZero(y)) {
            if (error)
                *error = true;
            return R{};
        }
        return wrap(x / y);
    case '%':
        if (isZero(y)) {
            if (error)
                *error = true;
            return R{};
        }
        return wrap(MathLib::bigint(x) % MathLib::bigint(y));
    case '&':
        return wrap(MathLib::bigint(x) & MathLib::bigint(y));
    case '|':
        return wrap(MathLib::bigint(x) | MathLib::bigint(y));
    case '^':
        return wrap(MathLib::bigint(x) ^ MathLib::bigint(y));
    case '>':
        return wrap(x > y);
    case '<':
        return wrap(x < y);
    case '<<':
        if (y >= sizeof(MathLib::bigint) * 8) {
            if (error)
                *error = true;
            return R{};
        }
        return wrap(MathLib::bigint(x) << MathLib::bigint(y));
    case '>>':
        if (y >= sizeof(MathLib::bigint) * 8) {
            if (error)
                *error = true;
            return R{};
        }
        return wrap(MathLib::bigint(x) >> MathLib::bigint(y));
    case '&&':
        return wrap(!isZero(x) && !isZero(y));
    case '||':
        return wrap(!isZero(x) || !isZero(y));
    case '==':
        return wrap(isEqual(x, y));
    case '!=':
        return wrap(!isEqual(x, y));
    case '>=':
        return wrap(x >= y);
    case '<=':
        return wrap(x <= y);
    }
    throw InternalError(nullptr, "Unknown operator: " + s);
}

template<class T>
static T calculate(const std::string& s, const T& x, const T& y, bool* error = nullptr)
{
    return calculate<T, T>(s, x, y, error);
}

#endif
