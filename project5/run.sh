#Run webpack and monitor server in the background
#Use nodemon to automatically restart server when source changed
clear;clear;
echo "Starting server..."
DEBUG=express:* nodemon webServer.js & npm run build:w