#!/usr/bin/env python3
#
# cppcheck addon for naming conventions
# An enhanced version. Configuration is taken from a json file
# It supports to check for type-based prefixes in function or variable names.
#
# Example usage (variable name must start with lowercase, function name must start with uppercase):
# $ cppcheck --dump path-to-src/
# $ python naming.py namingng.py test.c.dump
#
# JSON format:
#
# {
#    "RE_VARNAME": "[a-z]*[a-zA-Z0-9_]*\\Z",
#    "RE_PRIVATE_MEMBER_VARIABLE": null,
#    "RE_FUNCTIONNAME": "[a-z0-9A-Z]*\\Z",
#    "var_prefixes": {"uint32_t": "ui32"},
#    "function_prefixes": {"uint16_t": "ui16",
#                          "uint32_t": "ui32"}
# }
#
# RE_VARNAME, RE_PRIVATE_MEMBER_VARIABE and RE_FUNCTIONNAME are regular expressions to cover hte basic names
# In var_prefixes and function_prefixes there are the variable-type/prefix pairs

import cppcheckdata
import sys
import re
import argparse
import json


def reportError(filename, linenr, severity, msg):
    sys.stderr.write(
        '[' + filename + ':' + str(linenr) + '] (' + severity + ') naming.py: ' + msg + '\n')


def loadConfig(configfile):
    with open(configfile) as fh:
        data = json.load(fh)
    return data


def process(dumpfiles, configfile, debugprint=False):

    errors = 0

    conf = loadConfig(configfile)

    for afile in dumpfiles:
        if not afile[-5:] == '.dump':
            continue
        print('Checking ' + afile + '...')
        data = cppcheckdata.parsedump(afile)
        for cfg in data.configurations:
            if len(data.configurations) > 1:
                print('Checking ' + afile + ', config "' + cfg.name + '"...')
            if conf["RE_VARNAME"]:
                for var in cfg.variables:
                    if var.nameToken:
                        prev = var.nameToken.previous
                        varType = prev.str
                        while "*" in varType and len(varType.replace("*", "")) == 0:
                            prev = prev.previous
                            varType = prev.str + varType

                        if debugprint:
                            print("Variable Name: " + str(var.nameToken.str))
                            print("original Type Name: " + str(var.nameToken.valueType.originalTypeName))
                            print("Type Name: " + var.nameToken.valueType.type)
                            print("Sign: " + str(var.nameToken.valueType.sign))
                            print("variable type: " + varType)
                            print("\n")
                            print("\t-- {} {}".format(varType, str(var.nameToken.str)))

                        if varType in conf["var_prefixes"]:
                            if not var.nameToken.str.startswith(conf["var_prefixes"][varType]):
                                errors += 1
                                reportError(var.typeStartToken.file, var.typeStartToken.linenr, 'style', 'Variable ' +
                                            var.nameToken.str + ' violates naming convention')
                        res = re.match(conf["RE_VARNAME"], var.nameToken.str)
                        if not res:
                            errors += 1
                            reportError(var.typeStartToken.file, var.typeStartToken.linenr, 'style', 'Variable ' +
                                        var.nameToken.str + ' violates naming convention')

            if conf["RE_PRIVATE_MEMBER_VARIABLE"]:
                # TODO: Not converted yet
                for var in cfg.variables:
                    if (var.access is None) or var.access != 'Private':
                        continue
                    res = re.match(conf["RE_PRIVATE_MEMBER_VARIABLE"], var.nameToken.str)
                    if not res:
                        errors += 1
                        reportError(var.typeStartToken.file, var.typeStartToken.linenr, 'style', 'Private member variable ' +
                                    var.nameToken.str + ' violates naming convention')

            if conf["RE_FUNCTIONNAME"]:
                for token in cfg.tokenlist:
                    if token.function:
                        retval = token.previous.str
                        prev = token.previous
                        while "*" in retval and len(retval.replace("*", "")) == 0:
                            prev = prev.previous
                            retval = prev.str + retval
                        if debugprint:
                            print("\t:: {} {}".format(retval, token.function.name))

                        if retval and retval in conf["function_prefixes"]:
                            if not token.function.name.startswith(conf["function_prefixes"][retval]):
                                errors += 1
                                reportError(
                                    token.file, token.linenr, 'style', 'Function ' + token.function.name + ' violates naming convention')
                        res = re.match(conf["RE_FUNCTIONNAME"], token.function.name)
                        if not res:
                            errors += 1
                            reportError(
                                token.file, token.linenr, 'style', 'Function ' + token.function.name + ' violates naming convention')
    return errors


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Naming verification')
    parser.add_argument('dumpfiles', type=str, nargs='+',
                        help='A set of dumpfiles to process')
    parser.add_argument("--debugprint", action="store_true", default=False,
                        help="Add debug prints")
    parser.add_argument("--configfile", type=str, default="naming.json",
                        help="Naming check config file")

    args = parser.parse_args()
    errors = process(args.dumpfiles, args.configfile, args.debugprint)

    if errors:
        print('Found errors: {}'.format(errors))
        sys.exit(1)
