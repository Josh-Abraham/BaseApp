@echo off
set FLASK_APP=flaskBE.py
set FLASK_DEBUG=1
start  /min flask run
start  /min npm start
