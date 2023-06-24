#!/bin/bash

# Any recursive function must begin with
# a base case which is necessarily to end
# the chain of recursive function calls.
factorial () {
if [ $1 -le 1 ]; then # <-base case
echo 1
else
last=$(factorial $(( $1 -1)))
echo $(( $1 * last ))
fi
}

echo -n "4! is: "
factorial 4