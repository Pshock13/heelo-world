#! /bin/bash

# When a bash function finishes executing, 
# it returns the exit status of the last command 
# executed captured in the $? variable. Zero indicates
# successful execution or a non-zero positive integer (1-255)
# to indicate failure.

error () {
blabla
return 0
}

error
echo "The return status of the error function is: $?"