
# python -m pytest test-addons.py

import os
from glob import glob
import re
import sys
import pytest
import json

from testutils import cppcheck, assert_cppcheck, addon_standalone


def test_execute_addon_failure(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
                void f();
                """)

    args = ['--addon=naming', test_file]

    # provide empty PATH environment variable so python is not found and execution of addon fails
    env = {'PATH': ''}
    _, _, stderr = cppcheck(args, env)
    assert stderr == '{}:0:0: error: Bailing out from analysis: Checking file failed: Failed to auto detect python [internalError]\n\n^\n'.format(test_file)


def test_execute_addon_failure_2(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
                void f();
                """)

    # specify non-existent python executbale so execution of addon fails
    args = ['--addon=naming', '--addon-python=python5.x', test_file]

    _, _, stderr = cppcheck(args)
    ec = 1 if os.name == 'nt' else 127
    assert stderr == "{}:0:0: error: Bailing out from analysis: Checking file failed: Failed to execute addon 'naming' - exitcode is {} [internalError]\n\n^\n".format(test_file, ec)


def test_execute_addon_file0(tmpdir):
    test_file = os.path.join(tmpdir, 'test.c')
    with open(test_file, 'wt') as f:
        f.write('void foo() {}\n')

    args = ['--xml', '--addon=misra', '--enable=style', test_file]

    _, _, stderr = cppcheck(args)
    assert 'misra-c2012-8.2' in stderr
    assert '.dump' not in stderr


def test_addon_misra(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
typedef int MISRA_5_6_VIOLATION;
        """)

    args = ['--addon=misra', '--enable=all', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == '{}:2:1: style: misra violation (use --rule-texts=<file> to get proper output) [misra-c2012-2.3]\ntypedef int MISRA_5_6_VIOLATION;\n^\n'.format(test_file)


def test_addon_y2038(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    # TODO: trigger warning
    with open(test_file, 'wt') as f:
        f.write("""
extern void f()
{
    time_t t = std::time(nullptr);
    (void)t;
}
        """)

    args = ['--addon=y2038', '--enable=all', '--template={file}:{line}:{column}: {severity}:{inconclusive:inconclusive:} {message} [{id}]', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == '{}:4:21: warning: time is Y2038-unsafe [y2038-unsafe-call]\n'.format(test_file)


def test_addon_threadsafety(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
extern const char* f()
{
    return strerror(1);
}
        """)

    args = ['--addon=threadsafety', '--enable=all', '--template={file}:{line}:{column}: {severity}:{inconclusive:inconclusive:} {message} [{id}]', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == '{}:4:12: warning: strerror is MT-unsafe [threadsafety-unsafe-call]\n'.format(test_file)


def test_addon_naming(tmpdir):
    # the addon does nothing without a config
    addon_file = os.path.join(tmpdir, 'naming1.json')
    with open(addon_file, 'wt') as f:
        f.write("""
{
    "script": "addons/naming.py",
    "args": [
        "--var=[_a-z].*"
    ]
}
                """)

    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
int Var;
        """)

    args = ['--addon={}'.format(addon_file), '--enable=all', '--template={file}:{line}:{column}: {severity}:{inconclusive:inconclusive:} {message} [{id}]', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == '{}:2:1: style: Variable Var violates naming convention [naming-varname]\n'.format(test_file)


def test_addon_namingng(tmpdir):
    addon_py = 'namingng.py'
    addon_file = os.path.join(tmpdir, 'namingng.json')
    addon_config_file = os.path.join(tmpdir, 'namingng.config.json')
    with open(addon_file, 'wt') as f:
        f.write("""
{
    "script": "addons/%s",
    "args": [
        "--configfile=%s"
    ]
}
                """%(addon_py,addon_config_file.replace('\\','\\\\')))

    with open(addon_config_file, 'wt') as f:
        f.write("""
{
    "RE_FILE": [
        "[^/]*[a-z][a-z0-9_]*[a-z0-9]\\.c\\Z"
    ],
    "RE_CLASS_NAME": ["[a-z][a-z0-9_]*[a-z0-9]\\Z"],
    "RE_NAMESPACE": ["[a-z][a-z0-9_]*[a-z0-9]\\Z"],
    "RE_VARNAME": ["[a-z][a-z0-9_]*[a-z0-9]\\Z"],
    "RE_PUBLIC_MEMBER_VARIABLE": ["[a-z][a-z0-9_]*[a-z0-9]\\Z"],
    "RE_PRIVATE_MEMBER_VARIABLE": {
        ".*_tmp\\Z":[true,"illegal suffix _tmp"],
        "priv_.*\\Z":[false,"required prefix priv_ missing"]
    },
    "RE_GLOBAL_VARNAME": ["[a-z][a-z0-9_]*[a-z0-9]\\Z"],
    "RE_FUNCTIONNAME": ["[a-z][a-z0-9_]*[a-z0-9]\\Z"],
    "include_guard": {
        "input": "basename",
        "prefix": "_",
        "suffix": "",
        "case": "upper",
        "max_linenr": 5,
        "RE_HEADERFILE": ".*\\.h\\Z",
        "required": true
    },
    "var_prefixes": {"uint32_t": "ui32"},
    "function_prefixes": {"uint16_t": "ui16",
                          "uint32_t": "ui32"},
    "skip_one_char_variables": false
}
                """.replace('\\','\\\\'))

    test_unguarded_include_file_basename = 'test_unguarded.h'
    test_unguarded_include_file = os.path.join(tmpdir, test_unguarded_include_file_basename)
    with open(test_unguarded_include_file, 'wt') as f:
        f.write("""
void InvalidFunctionUnguarded();
""")

    test_include_file_basename = '_test.h'
    test_include_file = os.path.join(tmpdir, test_include_file_basename)
    with open(test_include_file, 'wt') as f:
        f.write("""
#ifndef TEST_H
#define TEST_H

void InvalidFunction();
extern int _invalid_extern_global;

#include "{}"

#endif
""".format(test_unguarded_include_file))

    test_file_basename = 'test_.cpp'
    test_file = os.path.join(tmpdir, test_file_basename)
    with open(test_file, 'wt') as f:
        f.write("""
#include "%s"

void invalid_function_();
void _invalid_function();
void valid_function1();
void valid_function2(int _invalid_arg);
void valid_function3(int invalid_arg_);
void valid_function4(int valid_arg32);
void valid_function5(uint32_t invalid_arg32);
void valid_function6(uint32_t ui32_valid_arg);
uint16_t invalid_function7(int valid_arg);
uint16_t ui16_valid_function8(int valid_arg);

int _invalid_global;
static int _invalid_static_global;

class _clz {
public:
    _clz() : _invalid_public(0), _invalid_private(0), priv_good(0), priv_bad_tmp(0) { }
    int _invalid_public;
private:
    char _invalid_private;
    int priv_good;
    int priv_bad_tmp;
};

namespace _invalid_namespace { }
        """%(test_include_file_basename))

    args = ['--addon='+addon_file, '--dump', '--verbose', '--enable=all', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file),
        'Defines:',
        'Undefines:',
        'Includes:',
        'Platform:native'
    ]
    lines = [line for line in stderr.splitlines() if line != '']
    expect = [
        '{}:0:0: style: File name {} violates naming convention [namingng-namingConvention]'.format(test_include_file,test_include_file_basename),
        '^',
        '{}:2:9: style: include guard naming violation; TEST_H != _TEST_H [namingng-includeGuardName]'.format(test_include_file),
        '#ifndef TEST_H',
        '        ^',
        '{}:5:6: style: Function InvalidFunction violates naming convention [namingng-namingConvention]'.format(test_include_file),
        'void InvalidFunction();',
        '     ^',
        '{}:6:12: style: Global variable _invalid_extern_global violates naming convention [namingng-namingConvention]'.format(test_include_file),
        'extern int _invalid_extern_global;',
        '           ^',

        '{}:0:0: style: File name {} violates naming convention [namingng-namingConvention]'.format(test_unguarded_include_file,test_unguarded_include_file_basename),
        '^',
        '{}:0:0: style: Missing include guard [namingng-includeGuardMissing]'.format(test_unguarded_include_file),
        '^',
        '{}:2:6: style: Function InvalidFunctionUnguarded violates naming convention [namingng-namingConvention]'.format(test_unguarded_include_file),
        'void InvalidFunctionUnguarded();',
        '     ^',

        '{}:0:0: style: File name {} violates naming convention [namingng-namingConvention]'.format(test_file,test_file_basename),
        '^',
        '{}:7:26: style: Variable _invalid_arg violates naming convention [namingng-namingConvention]'.format(test_file),
        'void valid_function2(int _invalid_arg);',
        '                         ^',
        '{}:8:26: style: Variable invalid_arg_ violates naming convention [namingng-namingConvention]'.format(test_file),
        'void valid_function3(int invalid_arg_);',
        '                         ^',
        '{}:10:31: style: Variable invalid_arg32 violates naming convention [namingng-namingConvention]'.format(test_file),
        'void valid_function5(uint32_t invalid_arg32);',
        '                              ^',
        '{}:4:6: style: Function invalid_function_ violates naming convention [namingng-namingConvention]'.format(test_file),
        'void invalid_function_();',
        '     ^',
        '{}:5:6: style: Function _invalid_function violates naming convention [namingng-namingConvention]'.format(test_file),
        'void _invalid_function();',
        '     ^',
        '{}:12:10: style: Function invalid_function7 violates naming convention [namingng-namingConvention]'.format(test_file),
        'uint16_t invalid_function7(int valid_arg);',
        '         ^',
        '{}:15:5: style: Global variable _invalid_global violates naming convention [namingng-namingConvention]'.format(test_file),
        'int _invalid_global;',
        '    ^',
        '{}:16:12: style: Global variable _invalid_static_global violates naming convention [namingng-namingConvention]'.format(test_file),
        'static int _invalid_static_global;',
        '           ^',
        '{}:20:5: style: Class Constructor _clz violates naming convention [namingng-namingConvention]'.format(test_file),
        '    _clz() : _invalid_public(0), _invalid_private(0), priv_good(0), priv_bad_tmp(0) { }',
        '    ^',
        '{}:21:9: style: Public member variable _invalid_public violates naming convention [namingng-namingConvention]'.format(test_file),
        '    int _invalid_public;',
        '        ^',
        '{}:23:10: style: Private member variable _invalid_private violates naming convention: required prefix priv_ missing [namingng-namingConvention]'.format(test_file),
        '    char _invalid_private;',
        '         ^',
        '{}:25:9: style: Private member variable priv_bad_tmp violates naming convention: illegal suffix _tmp [namingng-namingConvention]'.format(test_file),
        '    int priv_bad_tmp;',
        '        ^',
        '{}:28:11: style: Namespace _invalid_namespace violates naming convention [namingng-namingConvention]'.format(test_file),
        'namespace _invalid_namespace { }',
        '          ^',
    ]
    # test sorted lines; the order of messages may vary and is not of importance
    lines.sort()
    expect.sort()
    assert lines == expect

    # Perform same analysis again, but now in standalone mode.
    dump_files = glob(os.path.join(tmpdir,'*.dump'))
    assert len(dump_files) == 1

    dump_file = dump_files[0]
    assert dump_file == test_file+'.dump'

    args = ['--configfile='+addon_config_file,dump_file]
    exitcode, stdout, stderr = addon_standalone(addon_py,args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {}...'.format(dump_file),
        'Checking config ...',
    ]

    # Trim column information and adapt to standalone output format.
    lines = [line for line in stderr.splitlines() if line != '']
    def standaloneize(line):
        pat = '([^:]+):([0-9]+):[0-9]+: ([^:]+): (.*)'
        repl = '[\\1:\\2] (\\3) \\4'
        return re.sub(pat,repl,line,1)
    expect_standalone = [standaloneize(line) for line in lines if line.strip() != '^']
    lines.sort()
    expect_standalone.sort()
    assert lines == expect_standalone

def test_addon_namingng_config(tmpdir):
    addon_file = os.path.join(tmpdir, 'namingng.json')
    addon_config_file = os.path.join(tmpdir, 'namingng.config.json')
    with open(addon_file, 'wt') as f:
        f.write("""
{
    "script": "addons/namingng.py",
    "args": [
        "--configfile=%s"
    ]
}
                """%(addon_config_file).replace('\\','\\\\'))

    with open(addon_config_file, 'wt') as f:
        f.write("""
{
    "RE_FILE": "[^/]*[a-z][a-z0-9_]*[a-z0-9]\\.c\\Z",
    "RE_NAMESPACE": false,
    "RE_VARNAME": ["+bad pattern","[a-z]_good_pattern\\Z","(parentheses?"],
    "RE_PRIVATE_MEMBER_VARIABLE": "[a-z][a-z0-9_]*[a-z0-9]\\Z",
    "RE_PUBLIC_MEMBER_VARIABLE": {
        "tmp_.*\\Z":[true,"illegal prefix tmp_"],
        "bad_.*\\Z":true,
        "public_.*\\Z":[false],
        "pub_.*\\Z":[0,"required prefix pub_ missing"]
    },
    "RE_GLOBAL_VARNAME": "[a-z][a-z0-9_]*[a-z0-9]\\Z",
    "RE_FUNCTIONNAME": "[a-z][a-z0-9_]*[a-z0-9]\\Z",
    "RE_CLASS_NAME": "[a-z][a-z0-9_]*[a-z0-9]\\Z",
    "_comment1": "these should all be arrays, or null, or not set",

    "include_guard": true,
    "var_prefixes": ["bad"],
    "function_prefixes": false,
    "_comment2": "these should all be dict",

    "skip_one_char_variables": "false",
    "_comment3": "this should be bool",

    "RE_VAR_NAME": "typo"
}
                """.replace('\\','\\\\'))

    test_file_basename = 'test.c'
    test_file = os.path.join(tmpdir, test_file_basename)
    with open(test_file, 'a') as f:
        # only create the file
        pass

    args = ['--addon='+addon_file, '--verbose', '--enable=all', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0

    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file),
        'Defines:',
        'Undefines:',
        'Includes:',
        'Platform:native'
    ]
    lines = stderr.splitlines()
    # ignore the first line, stating that the addon failed to run properly
    lines.pop(0)
    assert lines == [
        "Output:",
        "config error: RE_FILE must be list (not str), or not set",
        "config error: RE_NAMESPACE must be list or dict (not bool), or not set",
        "config error: include_guard must be dict (not bool), or not set",
        "config error: item '+bad pattern' of 'RE_VARNAME' is not a valid regular expression: nothing to repeat at position 0",
        "config error: item '(parentheses?' of 'RE_VARNAME' is not a valid regular expression: missing ), unterminated subpattern at position 0",
        "config error: var_prefixes must be dict (not list), or not set",
        "config error: RE_PRIVATE_MEMBER_VARIABLE must be list or dict (not str), or not set",
        "config error: item 'bad_.*\\Z' of 'RE_PUBLIC_MEMBER_VARIABLE' must be an array [bool,string]",
        "config error: item 'public_.*\\Z' of 'RE_PUBLIC_MEMBER_VARIABLE' must be an array [bool,string]",
        "config error: item 'pub_.*\\Z' of 'RE_PUBLIC_MEMBER_VARIABLE' must be an array [bool,string]",
        "config error: RE_GLOBAL_VARNAME must be list or dict (not str), or not set",
        "config error: RE_FUNCTIONNAME must be list or dict (not str), or not set",
        "config error: function_prefixes must be dict (not bool), or not set",
        "config error: RE_CLASS_NAME must be list or dict (not str), or not set",
        "config error: skip_one_char_variables must be bool (not str), or not set",
        "config error: unknown config key 'RE_VAR_NAME' [internalError]",
        "",
        "^",
    ]


def test_addon_findcasts(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
        extern void f(char c)
        {
            int i = (int)c;
            (void)i;
        }
        """)

    args = ['--addon=findcasts', '--enable=all', '--template={file}:{line}:{column}: {severity}:{inconclusive:inconclusive:} {message} [{id}]', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == '{}:4:21: information: found a cast [findcasts-cast]\n'.format(test_file)


def test_addon_misc(tmpdir):
    test_file = os.path.join(tmpdir, 'test.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
extern void f()
{
    char char* [] = {"a" "b"}
}
        """)

    args = ['--addon=misc', '--enable=all', '--template={file}:{line}:{column}: {severity}:{inconclusive:inconclusive:} {message} [{id}]', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == '{}:4:26: style: String concatenation in array initialization, missing comma? [misc-stringConcatInArrayInit]\n'.format(test_file)


def test_invalid_addon_json(tmpdir):
    addon_file = os.path.join(tmpdir, 'addon1.json')
    with open(addon_file, 'wt') as f:
        f.write("""
                """)

    test_file = os.path.join(tmpdir, 'file.cpp')
    with open(test_file, 'wt'):
        pass

    args = ['--addon={}'.format(addon_file), test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 1
    lines = stdout.splitlines()
    assert lines == [
        'Loading {} failed. syntax error at line 2 near: '.format(addon_file)
    ]
    assert stderr == ''


def test_invalid_addon_py(tmpdir):
    addon_file = os.path.join(tmpdir, 'addon1.py')
    with open(addon_file, 'wt') as f:
        f.write("""
raise Exception()
                """)

    test_file = os.path.join(tmpdir, 'file.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
typedef int MISRA_5_6_VIOLATION;
                """)

    args = ['--addon={}'.format(addon_file), '--enable=all', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0  # TODO: needs to be 1
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == "{}:0:0: error: Bailing out from analysis: Checking file failed: Failed to execute addon 'addon1' - exitcode is 1 [internalError]\n\n^\n".format(test_file)


def test_invalid_addon_py_verbose(tmpdir):
    addon_file = os.path.join(tmpdir, 'addon1.py')
    with open(addon_file, 'wt') as f:
        f.write("""
raise Exception()
                """)

    test_file = os.path.join(tmpdir, 'file.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
typedef int MISRA_5_6_VIOLATION;
                """)

    args = ['--addon={}'.format(addon_file), '--enable=all', '--verbose', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0  # TODO: needs to be 1
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file),
        'Defines:',
        'Undefines:',
        'Includes:',
        'Platform:native'
    ]
    """
/tmp/pytest-of-user/pytest-11/test_invalid_addon_py_20/file.cpp:0:0: error: Bailing out from analysis: Checking file failed: Failed to execute addon 'addon1' - exitcode is 1: python3 /home/user/CLionProjects/cppcheck/addons/runaddon.py /tmp/pytest-of-user/pytest-11/test_invalid_addon_py_20/addon1.py --cli /tmp/pytest-of-user/pytest-11/test_invalid_addon_py_20/file.cpp.24762.dump
Output:
Traceback (most recent call last):
  File "/home/user/CLionProjects/cppcheck/addons/runaddon.py", line 8, in <module>
    runpy.run_path(addon, run_name='__main__')
  File "<frozen runpy>", line 291, in run_path
  File "<frozen runpy>", line 98, in _run_module_code
  File "<frozen runpy>", line 88, in _run_code
  File "/tmp/pytest-of-user/pytest-11/test_invalid_addon_py_20/addon1.py", line 2, in <module>
    raise Exception()
Exceptio [internalError]
    """
    # /tmp/pytest-of-user/pytest-10/test_invalid_addon_py_20/file.cpp:0:0: error: Bailing out from analysis: Checking file failed: Failed to execute addon 'addon1' - exitcode is 256.: python3 /home/user/CLionProjects/cppcheck/addons/runaddon.py /tmp/pytest-of-user/pytest-10/test_invalid_addon_py_20/addon1.py --cli /tmp/pytest-of-user/pytest-10/test_invalid_addon_py_20/file.cpp.24637.dump
    assert stderr.startswith("{}:0:0: error: Bailing out from analysis: Checking file failed: Failed to execute addon 'addon1' - exitcode is 1: ".format(test_file))
    assert stderr.count('Output:\nTraceback')
    assert stderr.endswith('raise Exception()\nException [internalError]\n\n^\n')


def test_addon_result(tmpdir):
    addon_file = os.path.join(tmpdir, 'addon1.py')
    with open(addon_file, 'wt') as f:
        f.write("""
print("Checking ...")
print("")
print('{"file": "test.cpp", "linenr": 1, "column": 1, "severity": "style", "message": "msg", "addon": "addon1", "errorId": "id", "extra": ""}')
print('{"loc": [{"file": "test.cpp", "linenr": 1, "column": 1, "info": ""}], "severity": "style", "message": "msg", "addon": "addon1", "errorId": "id", "extra": ""}')
                """)

    test_file = os.path.join(tmpdir, 'file.cpp')
    with open(test_file, 'wt') as f:
        f.write("""
typedef int MISRA_5_6_VIOLATION;
                """)

    args = ['--addon={}'.format(addon_file), '--enable=all', test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 0  # TODO: needs to be 1
    lines = stdout.splitlines()
    assert lines == [
        'Checking {} ...'.format(test_file)
    ]
    assert stderr == 'test.cpp:1:1: style: msg [addon1-id]\n\n^\n'


def test_missing_addon(tmpdir):
    args = ['--addon=misra3', '--addon=misra', '--addon=misra2', 'file.c']

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 1
    lines = stdout.splitlines()
    lines.sort()
    assert lines == [
        'Did not find addon misra2.py',
        'Did not find addon misra3.py'
    ]
    assert stderr == ""


def __test_addon_json_invalid(tmpdir, addon_json, expected):
    addon_file = os.path.join(tmpdir, 'invalid.json')
    with open(addon_file, 'wt') as f:
        f.write(addon_json)

    test_file = os.path.join(tmpdir, 'file.cpp')
    with open(test_file, 'wt'):
        pass

    args = ['--addon={}'.format(addon_file), test_file]

    exitcode, stdout, stderr = cppcheck(args)
    assert exitcode == 1
    lines = stdout.splitlines()
    assert len(lines) == 1
    assert lines == [
        'Loading {} failed. {}'.format(addon_file, expected)
    ]
    assert stderr == ''


def test_addon_json_invalid_no_obj(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps([]), "JSON is not an object.")


def test_addon_json_invalid_args_1(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'args':0}), "'args' must be an array.")


def test_addon_json_invalid_args_2(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'args':[0]}), "'args' entry is not a string.")


def test_addon_json_invalid_ctu(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'ctu':0}), "'ctu' must be a boolean.")


def test_addon_json_invalid_python(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'python':0}), "'python' must be a string.")


def test_addon_json_invalid_executable(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'executable':0}), "'executable' must be a string.")


def test_addon_json_invalid_script_1(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'Script':''}), "'script' is missing.")


def test_addon_json_invalid_script_2(tmpdir):
    __test_addon_json_invalid(tmpdir, json.dumps({'script':0}), "'script' must be a string.")
