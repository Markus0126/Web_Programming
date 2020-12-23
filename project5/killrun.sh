#!/bin/bash

#kill previous nodemon processes
#   -The ps gives you the list of all the processes.
#   -The grep filters that based on your search string
#       [n] is a trick to stop you picking up the actual grep process itself.
#   -The awk just gives you the second field of each line, which is the PID.
#   -The $(x) construct means to execute x then take its output and put it on the command line. 
#       The output of that ps pipeline inside that construct above is the list of process IDs 
#       so you end up with a command like kill 1234 1122 7654.
echo "Killing hanging node processes..."
sudo kill -9 $(ps aux | grep '[n]ode' | awk '{print $2}')

#Run webpack and monitor server in the background
#Use nodemon to automatically restart server when source changed
echo "Starting server..."
nodemon webServer.js & npm run build:w