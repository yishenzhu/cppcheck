if (NOT NPROC)
    include(ProcessorCount)
    ProcessorCount(NPROC)
    if(NPROC EQUAL 0)
        message(FATAL_ERROR "could not get processor count")
    endif()
endif()
message(STATUS "NPROC=${NPROC}")

find_program(RUN_CLANG_TIDY NAMES run-clang-tidy run-clang-tidy-14 run-clang-tidy-13 run-clang-tidy-12 run-clang-tidy-11 run-clang-tidy-10 run-clang-tidy-9 run-clang-tidy-8)
message(STATUS "RUN_CLANG_TIDY=${RUN_CLANG_TIDY}")
if (RUN_CLANG_TIDY)
    # disable all compiler warnings since we are just interested in the tidy ones
    add_custom_target(run-clang-tidy ${RUN_CLANG_TIDY} -checks=-performance-unnecessary-copy-initialization -p=${CMAKE_BINARY_DIR} -j ${NPROC} -extra-arg=-w -quiet)
    if (BUILD_GUI)
        add_dependencies(run-clang-tidy gui-build-deps)
        if (BUILD_TESTS)
            add_dependencies(run-clang-tidy triage-build-ui-deps)
        endif()
    endif()
endif()
