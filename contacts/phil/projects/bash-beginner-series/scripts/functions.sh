#! /bin/bash

# functions can be defined with or without the 'function' keyword
hello(){
    echo "Hello, World!"
}

# call the function by simply referencing the name of said function
hello
hello
hello

# passing arguments to functions
iseven () {
if [ $(($1 % 2)) -eq 0 ]; then
echo "$1 is even."
else
echo "$1 is odd."
fi
}

iseven 3
iseven 4
iseven 20
iseven 111