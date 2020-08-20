// Import Functions for Base Home App
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { getSampleData } from '../../utils/sockets'

class StartScreen extends Component {

  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  componentDidMount() {
    getSampleData().then(res => {
      console.log(res.data)
     this.setState({ title: res.data })
    })
  }

  render() {

    return (
      <div className="selectScreen">
        {this.state.title}
      </div>
    );
  }
}

StartScreen.defaultProps = {
  text: 'Hello'
}
StartScreen.propTypes = {
  text: Proptypes.string
}

export default StartScreen;
