#!/bin/bash

users=$(cat users.txt | tr -d '\r') # reads your user.txt file while removing carriage returns

for user in $users; do
#randompw="$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1)"
# echo "$randompw"
sudo useradd -m "$user"
sudo passwd -d "$user"

#echo $randompw | sudo passwd $user
done