#! /bin/bash
# v2 takes an argument when calling the script
# `./count_lines_v2.sh <pathToFile>`
nlines=$(wc -l < $1)
echo "There are $nlines lines in $1"