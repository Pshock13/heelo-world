#!/bin/bash
# The patterns are always followed by a blank space and ).
# Commands are always followed by double semicolon ;;. White space is not mandatory before it.
# Case statements end with esac (reverse of case).

CHAR=$1

case $CHAR in
[a-z])
echo "Small Alphabet." ;;
[A-Z])
echo "Big Alphabet." ;;
[0-9])
echo "Number." ;;
*)
echo "Special Character."
esac