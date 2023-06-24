#! /bin/bash

user=($(whoami) 11804306 "Developers" "bash")

echo "Username: ${user[0]}"
echo "User ID: ${user[1]}"
echo "User Groups: ${user[2]}"
echo "User Shell: ${user[3]}"
