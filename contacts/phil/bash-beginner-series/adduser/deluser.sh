#!/bin/bash

users=$(cat users.txt | tr -d '\r')

for user in $users; do
sudo deluser --remove-home "$user"
done