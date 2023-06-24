#! /bin/bash

files=("f1.txt" "f2.txt" "f3.txt" "f4.txt" "f5.txt")

echo 'Only file in index 1: ' ${files[1]}
echo 'All files at once: ' ${files[*]}
echo 'Total # of elements in array: ' ${files[@]}