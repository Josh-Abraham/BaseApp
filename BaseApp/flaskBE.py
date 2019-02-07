# Writing Requeststo React
from flask import Flask, jsonify, request
from flask_cors import CORS

#Reading Requests from teh internet
import requests
from bs4 import BeautifulSoup

#USE: set FLASK_APP=flaskBE.py in CMD to create the environment var
# To see changes without ropening use: set FLASK_DEBUG=1
#Then do flask run
#using http://http:127.0.0.1:5000/

app = Flask(__name__)
CORS(app)


#Basic Mounting Set
@app.route("/")
@app.route("/mount")     #Allows two routes to lead to same function
def home():
    return jsonify(webTitle='STOCK ANALYSIS')


# WEB PARSING
@app.route("/cmd", methods=['GET', 'POST'])     #GET REQUEST, now we can do saving
def cmd():
    content = request.get_json()
    ticker = content['name']
    quote_page = 'https://finance.yahoo.com/quote/'+ticker+'/history?period1=1544677200&period2=1547355600&interval=1d&filter=history&frequency=1d'
    page = requests.get(quote_page)
    soup = BeautifulSoup(page.content, 'html.parser')
    data = soup.find_all('td')
    prices = []
    dates = []
    # for index in range(len(data)):
    i = 0
    while i < len(data) -1 :
        cell = data[i + 1].get_text()
        if  cell.find("Dividend") == -1:
            dates.append(data[i].get_text())
            prices.append(data[i + 2].get_text())
            i += 7
        else:
            i += 2
    return jsonify(prices=prices)


#File Saving Example
@app.route("/save", methods=['GET', 'POST'])     #GET REQUEST, now we can do saving
def save():
    content = request.get_json()
    viewId = content['viewId'];
    if (viewId == 'View 1'):
        f= open("View 1.txt","w+")
        f.write('View 1\n')
        f.write('Title: ' + content['title'] + '\n')
        f.write('Checkbox 1 selected: ' + str(content['check1']) + '\n')
        f.write('Checkbox 2 selected: ' + str(content['check1'] and content['check2']) + '\n')
    elif (viewId == 'View 2'):
        f= open("View 2.txt","w+")
        f.write('View 2\n')
        f.write('Drop Down Option: ' + content['dropDownOption'] + '\n')
        f.write('Input: ' + content['input'] + '\n')
        f.write('Selected Item: ' + content['selectedItem'] + '\n')
    elif (viewId == 'View 3'):
        f= open("View 3.txt","w+")
        f.write('View 3\n')
        if (content['leftPanel'] and content['rightPanel']):
            f.write('Both panels are currently visible\n')
        elif ( content['leftPanel']):
            f.write('The left Panel is currently hidden\n')
        elif ( content['righttPanel']):
            f.write('The right Panel is currently visible\n')
        else:
            f.write('No panels are currently open\n')

    return jsonify(info='Success')

if __name__ == '__main__':
    app.run(debug=True)
