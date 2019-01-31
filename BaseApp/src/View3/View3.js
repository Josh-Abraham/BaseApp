import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View3.css';

class View3 extends Component {

  buttonHit(viewId) {
    this.props.onChange({ viewId: viewId });
  }

  render() {

    return (
      <div className="columnView">
        <div> THIS IS VIEW 3</div>
        <div className="buttonStyle">
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'Main')}> Go Back to Main View</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 1')}> Go To View 1</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 2')}> Go To View 2</Button>
        </div>
      </div>
    );
  }
}

View3.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View3;
