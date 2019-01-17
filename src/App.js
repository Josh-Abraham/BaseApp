import React, { Component } from 'react';
import { TextField, validator } from 'react-textfield';
import './App.css';
import axios from 'axios';

// To Package
// npm install --global rollup
// npm run package
// npm install electron --save-dev
// in package json add script 

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    prices: [],
    webTitle: ''
  }
}

componentDidMount() {
  axios.get('http://localhost:5000/mount')
  .then(res => {
        const data = res.data;
         this.setState({ webTitle: data.webTitle });
       })
  .catch(function (error) {
    console.log(error);
  });
}

  findStock() {
    // Send stock ticker to BE
    let ticker = document.getElementById('ticker').value;
    const user = {
       name: ticker
     };
    axios.post('http://localhost:5000/save', user)
       .then(res => {
         console.log(res.data.prics);
         this.setState({ prices: res.data.prices });
       })
  }

  buyOrSellStock() {
    // Send stock ticker to BE
    let cmd = document.getElementById('buyOrSell').value;
    const data = {
       data: cmd
     };
    axios.post('http://localhost:5000/cmd', data)
       .then(res => {
       })
  }

  createPrice(price) {
    return (
      <div>{price}</div>
    );
  }

  render() {
    const prices = this.state.prices.map((price) => this.createPrice(price));
    return (
      <div>
        <header className="App-header">
        <p>{this.state.webTitle}</p>
        <form>
          <p>
            <label>Stock Ticker </label>
            <input type = "text"
                id = "ticker"
                placeholder = "Enter Ticker" />
          </p>
              <button type="button" onClick={this.findStock.bind(this)}> Find Stock </button>
          <p>
            <label>Buy or Sell</label>
            <input type = "text"
                id = "buyOrSell"
                placeholder = "Enter Command" />
          </p>
              <button type="button" onClick={this.buyOrSellStock.bind(this)}> Save Command </button>
      </form>
      <div>
        {prices}
      </div>
      </header>

      </div>
    );
  }
}

export default App;
