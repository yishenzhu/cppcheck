#!/usr/bin/env python3

# Run this script from your branch with proposed Cppcheck patch to verify your
# patch against current master. It will compare output of testing a bunch of
# opensource packages

import donate_cpu_lib as lib
import argparse
import os
import sys
import random
import subprocess


def format_float(a, b=1):
    if a > 0 and b > 0:
        return '{:.2f}'.format(a / b)
    return 'N/A'


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Run this script from your branch with proposed Cppcheck patch to verify your patch against current master. It will compare output of testing bunch of opensource packages')
    parser.add_argument('-j', default=1, type=int, help='Concurency execution threads')
    parser.add_argument('-p', default=256, type=int, help='Count of packages to check')
    parser.add_argument('-o', default='my_check_diff.log', help='Filename of result inside a working path dir')
    parser.add_argument('--work-path', '--work-path=', default=lib.work_path, type=str, help='Working directory for reference repo')
    args = parser.parse_args()

    print(args)

    work_path = os.path.abspath(args.work_path)
    if not os.path.exists(work_path):
        os.makedirs(work_path)
    master_dir = os.path.join(work_path, 'cppcheck')

    jobs = '-j' + str(args.j)
    result_file = os.path.join(work_path, args.o)
    (f, ext) = os.path.splitext(result_file)
    timing_file = f + '_timing' + ext
    your_repo_dir = os.path.dirname(os.path.dirname(os.path.abspath(sys.argv[0])))

    if os.path.exists(result_file):
        os.remove(result_file)
    if os.path.exists(timing_file):
        os.remove(timing_file)

    if not lib.get_cppcheck(master_dir, work_path):
        print('Failed to clone master of Cppcheck, retry later')
        sys.exit(1)

    try:
        os.chdir(your_repo_dir)
        commit_id = (subprocess.check_output(['git', 'merge-base', 'origin/master', 'HEAD'])).strip().decode('ascii')
        with open(result_file, 'a') as myfile:
            myfile.write('Common ancestor: ' + commit_id + '\n\n')
        package_width = '140'
        timing_width = '>7'
        with open(timing_file, 'a') as myfile:
            myfile.write('{:{package_width}} {:{timing_width}} {:{timing_width}} {:{timing_width}}\n'.format(
                'Package', 'master', 'your', 'Factor', package_width=package_width, timing_width=timing_width))

        os.chdir(master_dir)
        subprocess.check_call(['git', 'checkout', '-f', commit_id])
    except:
        print('Failed to switch to common ancestor of your branch and master')
        sys.exit(1)

    if not lib.compile_cppcheck(master_dir, jobs):
        print('Failed to compile master of Cppcheck')
        sys.exit(1)

    print('Testing your PR from directory: ' + your_repo_dir)
    if not lib.compile_cppcheck(your_repo_dir, jobs):
        print('Failed to compile your version of Cppcheck')
        sys.exit(1)

    packages_count = lib.get_packages_count(lib.server_address)
    if not packages_count:
        print("network or server might be temporarily down..")
        sys.exit(1)

    packages_idxs = list(range(packages_count))
    random.shuffle(packages_idxs)

    packages_processed = 0
    crashes = []
    timeouts = []

    while packages_processed < args.p and len(packages_idxs) > 0:
        package = lib.get_package(lib.server_address, packages_idxs.pop())

        tgz = lib.download_package(work_path, package, None)
        if tgz is None:
            print("No package downloaded")
            continue

        if not lib.unpack_package(work_path, tgz):
            print("No files to process")
            continue

        results_to_diff = []

        master_crashed = False
        your_crashed = False

        master_timeout = False
        your_timeout = False

        libraries = lib.get_libraries()
        c, errout, info, time_master, cppcheck_options, timing_info = lib.scan_package(work_path, master_dir, jobs, libraries)
        if c < 0:
            if c == -101 and 'error: could not find or open any of the paths given.' in errout:
                # No sourcefile found (for example only headers present)
                print('Error: 101')
            elif c == lib.RETURN_CODE_TIMEOUT:
                print('Master timed out!')
                master_timeout = True
            else:
                print('Master crashed!')
                master_crashed = True
        results_to_diff.append(errout)

        c, errout, info, time_your, cppcheck_options, timing_info = lib.scan_package(work_path, your_repo_dir, jobs, libraries)
        if c < 0:
            if c == -101 and 'error: could not find or open any of the paths given.' in errout:
                # No sourcefile found (for example only headers present)
                print('Error: 101')
            elif c == lib.RETURN_CODE_TIMEOUT:
                print('Your code timed out!')
                your_timeout = True
            else:
                print('Your code crashed!')
                your_crashed = True
        results_to_diff.append(errout)

        if master_crashed or your_crashed:
            who = None
            if master_crashed and your_crashed:
                who = 'Both'
            elif master_crashed:
                who = 'Master'
            else:
                who = 'Your'
            crashes.append(package + ' ' + who)

        if master_timeout or your_timeout:
            who = None
            if master_timeout and your_timeout:
                who = 'Both'
            elif master_timeout:
                who = 'Master'
            else:
                who = 'Your'
            timeouts.append(package + ' ' + who)

        with open(result_file, 'a') as myfile:
            myfile.write(package + '\n')
            diff = lib.diff_results(work_path, 'master', results_to_diff[0], 'your', results_to_diff[1])
            if diff != '':
                myfile.write('diff:\n' + diff + '\n')

        with open(timing_file, 'a') as myfile:
            myfile.write('{:{package_width}} {:{timing_width}} {:{timing_width}} {:{timing_width}}\n'.format(
                package, format_float(time_master),
                format_float(time_your), format_float(time_your, time_master),
                package_width=package_width, timing_width=timing_width))

        packages_processed += 1
        print(str(packages_processed) + ' of ' + str(args.p) + ' packages processed\n')

    with open(result_file, 'a') as myfile:
        myfile.write('\n\ncrashes\n')
        myfile.write('\n'.join(crashes))

    with open(result_file, 'a') as myfile:
        myfile.write('\n\ntimeouts\n')
        myfile.write('\n'.join(timeouts) + '\n')

    print('Result saved to: ' + result_file)
