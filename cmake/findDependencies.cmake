set(CMAKE_INCLUDE_CURRENT_DIR ON)
set(CMAKE_AUTOMOC OFF)

find_package(Qt4 4.6.1 COMPONENTS QtCore QtGui)

if (HAVE_RULES)
    find_library(PCRE pcre)
    if (NOT PCRE)
        message(FATAL_ERROR "pcre dependency for RULES has not been found")
    endif()
endif()
