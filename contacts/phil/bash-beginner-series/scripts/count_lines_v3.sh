#! /bin/bash
# v2 takes an argument when calling the script
# `./count_lines_v2.sh <pathToFile>`
n1=$(wc -l < $1)
n2=$(wc -l < $2)
n3=$(wc -l < $3)
echo "There are $n1 lines in $1"
echo "There are $n2 lines in $2"
echo "There are $n3 lines in $3"

# I'm sure the above code can be
# done with a for loop