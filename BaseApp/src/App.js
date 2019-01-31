import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import View1 from './View1/View1.js';
import View2 from './View2/View2.js';
import View3 from './View3/View3.js';
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
    viewId: 'Main'
  }

}

componentDidMount() {
  // axios.get('http://localhost:5000/mount')
  // .then(res => {
  //       const data = res.data;
  //        this.setState({ webTitle: data.webTitle });
  //      })
  // .catch(function (error) {
  //   console.log(error);
  // });
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

  getMainView() {
    if (this.state.viewId === 'Main') {
        return (
          <div> In Main
            <span> Hello World </span>
            <Button type="button" className="btn btn-info" onClick={this.buttonHit.bind(this)}> Go To View 1</Button>
          </div>
        );
    } else if (this.state.viewId === 'View 1') {
      return (
        <View1
            onChange = {this.onChange.bind(this)}
        />
      );
    } else if (this.state.viewId === 'View 2') {
      return <View2
          onChange = {this.onChange.bind(this)}
      />;
    } else if (this.state.viewId === 'View 3') {
      return <View3
          onChange = {this.onChange.bind(this)}
      />;
    }

    return null;
  }

  onChange(newState) {
    this.setState(newState);
  }

  buttonHit() {
      this.setState({ viewId: 'View 1' });
  }

  render() {
    const mainView = this.getMainView();

    return (
      <div className="test">
        {mainView}
      </div>
    );
  }
}

export default App;
