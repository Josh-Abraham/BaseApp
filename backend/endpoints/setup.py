from flask import Blueprint
from flask import Flask
from flask import request
from flask import jsonify

import json
import requests

setup = Blueprint("setup", __name__)

@setup.route('/getSampelInfo', methods=['GET'])
def getSampelInfo():
  return 'Hello'