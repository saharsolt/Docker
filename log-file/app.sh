#!/bin/bash
mkdir log
for ((i=1; ; i++))
do
   text="$(date "+%Y-%m-%d %H:%M:%S") - infinite loops $i"
   echo $text
   echo $text  >> log/log.txt
   sleep 1
done