#! /bin/bash
# displays size of two files in bytes

fs1=$(du -b $1 | cut -f1)
fs2=$(du -b $2 | cut -f1)

echo "File size of $1 is: $fs1"
echo "File size of $2 is: $fs2"

# arithmetic is done inside of double parenthesiss
total=$(($fs1+$fs2))

echo "Total size: $total"