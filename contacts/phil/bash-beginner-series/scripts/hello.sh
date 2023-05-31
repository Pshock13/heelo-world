#! /bin/bash
# adding the SheBang line seen in
# line number 1 will allow us to run
# hello.sh from the folder using './hello.sh'
echo "Hello, $(whoami)!"

# echo "What's your name, stranger?"

# read name

# echo "Hello, $name"
currentDate=$(date)
echo "Today is $currentDate"