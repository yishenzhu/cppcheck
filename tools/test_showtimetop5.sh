#!/bin/bash
# "gwc" is a GNU compatible of "wc" on MacOS
WC_CMD=$(which gwc || which wc)
output=$(./cppcheck --showtime=top5 cli/cmdlineparser.h --language=c++ --quiet)
echo "$output"
if  [[ "$(echo "$output" | $WC_CMD -l)" != 7 ]] ; then
    false
fi
