message( STATUS "------------------ General configuration for ${PROJECT_NAME} ${VERSION} -----------------")
message( STATUS )
message( STATUS "CMake Generator =       ${CMAKE_GENERATOR}")
message( STATUS "Compiler =              ${CMAKE_CXX_COMPILER_ID}")
message( STATUS "Build type =            ${CMAKE_BUILD_TYPE}")
message( STATUS "CMAKE_INSTALL_PREFIX =  ${CMAKE_INSTALL_PREFIX}" )
message( STATUS "C++ flags (General) =   ${CMAKE_CXX_FLAGS}")
message( STATUS "C++ flags (Release) =   ${CMAKE_CXX_FLAGS_RELEASE}")
message( STATUS "C++ flags (Debug) =     ${CMAKE_CXX_FLAGS_DEBUG}")
get_directory_property( DirDefs DIRECTORY ${CMAKE_SOURCE_DIR} COMPILE_DEFINITIONS )
foreach( d ${DirDefs} )
    message( STATUS "Found Define: " ${d} )
endforeach()
message( STATUS )
message( STATUS "---------------------------------------------------------" )
message( STATUS "USE_CLANG =             ${USE_CLANG}" )
message( STATUS "USE_ANALYZE =           ${USE_ANALYZE}" )
message( STATUS "ANALYZE_MEMORY =        ${ANALYZE_MEMORY}" )
message( STATUS "ANALYZE_ADDRESS =       ${ANALYZE_ADDRESS}" )
message( STATUS "ANALYZE_THREAD =        ${ANALYZE_THREAD}" )
message( STATUS "ANALYZE_UNDEFINED =     ${ANALYZE_UNDEFINED}" )
message( STATUS "ANALYZE_DATAFLOW =      ${ANALYZE_DATAFLOW}" )
message( STATUS "WARNINGS_ANSI_ISO =     ${WARNINGS_ANSI_ISO}" )
message( STATUS "WARNINGS_ARE_ERRORS =   ${WARNINGS_ARE_ERRORS}" )
message( STATUS )
message( STATUS "BUILD_SHARED_LIBS =     ${BUILD_SHARED_LIBS}" )
message( STATUS "BUILD_TESTS =           ${BUILD_TESTS}" )
message( STATUS "BUILD_GUI =             ${BUILD_GUI}" )
message( STATUS )
message( STATUS "Change a value with: cmake -D<Variable>=<Value>" )
message( STATUS )
if(${USE_ANALYZE})
   message( STATUS "------------------- Run static analyzer ----------------------" )
   message( STATUS "##############################")
   message( STATUS "RUN: scan-build make" )
   message( STATUS "##############################")
   message( STATUS )
endif()

if(${ANALYZE_ADDRESS})
   message("##########################################################")
   message(STATUS "For better visualitation change enviroment variable: ASAN_SYMBOLIZER_PATH=/path/to/llvm-symbolizer")
   message(STATUS "Detect memory leaks, change enviroment variable: ASAN_OPTIONS=\"detect_leaks=1\"")
   message("##########################################################")
endif()
