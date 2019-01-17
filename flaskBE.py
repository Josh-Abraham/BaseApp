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
@app.route("/save", methods=['GET', 'POST'])     #GET REQUEST, now we can do saving
def save():
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
@app.route("/cmd", methods=['GET', 'POST'])     #GET REQUEST, now we can do saving
def cmd():
    content = request.get_json()
    cmd = content['data']
    f= open("BuyOrSell.txt","a+")
    f.write(cmd + '\n')
    f.close()
    return jsonify(info='Success')

if __name__ == '__main__':
    app.run(debug=True)
