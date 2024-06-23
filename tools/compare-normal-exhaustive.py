#!/usr/bin/env python3

# Compare "normal" check level and "exhaustive" check level

import donate_cpu_lib as lib
import argparse
import glob
import os
import sys
import random
import subprocess


def format_float(a, b=1):
    if a > 0 and b > 0:
        return '{:.2f}'.format(a / b)
    return 'N/A'


if __name__ == "__main__":
    __my_script_name = os.path.splitext(os.path.basename(sys.argv[0]))[0]
    __work_path = os.path.expanduser(os.path.join('~', 'cppcheck-' + __my_script_name + '-workfolder'))

    parser = argparse.ArgumentParser(description='Compare --check-level=normal and --check-level=exhaustive output')
    parser.add_argument('-j', default=1, type=int, help='Concurency execution threads')
    parser.add_argument('--cppcheck-path', default=None, type=str, help='Path to Cppcheck binary, if not given then clone and compile')
    package_group = parser.add_mutually_exclusive_group()
    package_group.add_argument('-p', default=256, type=int, help='Count of packages to check')
    package_group.add_argument('--packages', nargs='+', help='Check specific packages and then stop.')
    package_group.add_argument('--packages-path', default=None, type=str, help='Check packages in path.')
    parser.add_argument('-o', default='my_check_diff.log', help='Filename of result inside a working path dir')

    language_group = parser.add_mutually_exclusive_group()
    language_group.add_argument('--c-only', dest='c_only', help='Only process c packages', action='store_true')
    language_group.add_argument('--cpp-only', dest='cpp_only', help='Only process c++ packages', action='store_true')
    parser.add_argument('--work-path', '--work-path=', default=__work_path, type=str, help='Working directory for reference repo')
    args = parser.parse_args()

    print(args)

    if not lib.check_requirements():
        print("Error: Check requirements")
        sys.exit(1)

    work_path = os.path.abspath(args.work_path)
    if not os.path.exists(work_path):
        os.makedirs(work_path)

    lib.set_jobs('-j' + str(args.j))

    def results_file(name):
        f, ext = os.path.splitext(args.o)
        return os.path.join(work_path, f + '_' + name + ext)

    opts = {'0': '--check-level=exhaustive --suppress=valueFlow*',
            'it2': '--check-level=exhaustive --performance-valueflow-max-iterations=2 --suppress=valueFlow*',
            'it1': '--check-level=exhaustive --performance-valueflow-max-iterations=1 --suppress=valueFlow*',
            'if8': '--check-level=exhaustive --performance-valueflow-max-if-count=8 --suppress=valueFlow*'}

    for o in opts.keys():
        f = results_file(o)
        if os.path.exists(f):
            os.remove(f)

    cppcheck_path = args.cppcheck_path

    if cppcheck_path is None:
        cppcheck_path = os.path.join(work_path, 'cppcheck')
        try:
            lib.clone_cppcheck(cppcheck_path, '')
            pass
        except Exception as e:
            print('Failed to clone Cppcheck repository ({}), retry later'.format(e))
            sys.exit(1)

        if not lib.compile_cppcheck(cppcheck_path):
            print('Failed to compile Cppcheck')
            sys.exit(1)

    if args.packages_path:
        # You can download packages using daca2-download.py
        args.packages = glob.glob(os.path.join(args.packages_path, '*.tar.xz'))
        args.p = len(args.packages)
        packages_idxs = list(range(args.p))
        random.shuffle(packages_idxs)
    elif args.packages:
        args.p = len(args.packages)
        packages_idxs = []
    else:
        packages_count = lib.get_packages_count()
        if not packages_count:
            print("network or server might be temporarily down..")
            sys.exit(1)

        packages_idxs = list(range(packages_count))
        random.shuffle(packages_idxs)

    packages_processed = 0
    crashes = []
    timeouts = []

    while (packages_processed < args.p and len(packages_idxs) > 0) or args.packages:
        if args.packages:
            package = args.packages.pop()
        else:
            package = lib.get_package(packages_idxs.pop())

        if package.startswith('ftp://') or package.startswith('http://'):
            tgz = lib.download_package(work_path, package, None)
            if tgz is None:
                print("No package downloaded")
                continue
        else:
            print('Package: ' + package)
            tgz = package

        source_path, source_found = lib.unpack_package(work_path, tgz, c_only=args.c_only, cpp_only=args.cpp_only)
        if not source_found:
            print("No files to process")
            continue

        results_to_diff = list()
        timings = list()

        crashed = []
        timeout = []

        enable = 'style'
        debug_warnings = False

        libraries = lib.library_includes.get_libraries(source_path)

        for id, extra_args in opts.items():
            print('scan:'+id)
            c, errout, info, time, cppcheck_options, timing_info = lib.scan_package(cppcheck_path, source_path, libraries, enable=enable, extra_args=extra_args)
            if c < 0:
                if c == -101 and 'error: could not find or open any of the paths given.' in errout:
                    # No sourcefile found (for example only headers present)
                    print('Error: 101')
                elif c == lib.RETURN_CODE_TIMEOUT:
                    print(id + ' timed out!')
                    timeout.append(id)
                    continue # we don't want to compare timeouts
                else:
                    print(f'{id} crashed! code={c}')
                    crashed.append(id)
            results_to_diff.append(errout)
            timings.append(time)

            if len(results_to_diff) <= 1:
                continue

            r0 = results_to_diff[0]
            with open(results_file(id), 'a') as myfile:
                myfile.write(package + '\n')
                if id in crashed:
                    myfile.write('Crash\n')
                elif id in timeout:
                    myfile.write('Timeout\n')
                else:
                    diff = lib.diff_results('0', r0, id, errout)
                    if diff != '':
                        myfile.write('diff:\n' + diff + '\n')
                    myfile.write('time: %.1f %.1f\n' % (timings[0], time))
                myfile.write('libraries:' + ','.join(libraries) +'\n')

        packages_processed += 1
        print(str(packages_processed) + ' of ' + str(args.p) + ' packages processed\n')

    print('Result saved to: ' + result_file)
