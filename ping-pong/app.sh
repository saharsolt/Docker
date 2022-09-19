#!/bin/bash
mkdir log
for ((i=1; ; i++))
do
   text="$(date "+%Y-%m-%d %H:%M:%S") - Get /ping --- response: $(curl -s ping_pong:80/ping)"
   echo $text
   echo $text  >> log/log.txt
   sleep 2
done