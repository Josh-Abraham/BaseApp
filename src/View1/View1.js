import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View1.css';

class View1 extends Component {

  constructor(props) {
  super(props);
  this.state = {
    title: 'This is a default title',
    check1: false,
    check2: false
    }
  }

  buttonHit(viewId) {
    this.props.onChange({ viewId: viewId });
  }

  pageTitle() {
    return (
      <div className="center">
      <div class="jumbotron">
        <h1 class="display-4">{this.state.title}</h1>
      </div>
        <h1><span class="badge badge-pill badge-dark">{this.state.title}</span></h1>
      </div>
    );
  }

  checkBoxMaker() {
    return (
    <div className="styleBetween">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="check1" onClick={this.checkClick.bind(this, 'check1')}/>
        <label class="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled onClick={this.checkClick.bind(this, 'check2')}/>
        <label class="form-check-label" for="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
    </div>
    );
  }

  checkClick(checkType) {
    if (checkType === 'check1') {
      this.setState({ check1: !this.state.check1 });
      document.getElementById('defaultCheck2').disabled = this.state.check1;
    } else if (checkType === 'check2') {
      this.setState({ check2: !this.state.check2 });
    }
  }

  render() {
    const title = this.pageTitle();
    const checkBox = this.checkBoxMaker();

    return (
      <div>
        {title}
        <div className="columnView">
          <div> HELLO  World</div>
          <div className="buttonStyle">
            <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'Main')}> Go Back to Main View</Button>
            <div className="styleBetween"/>
            <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 2')}> Go To View 2</Button>
          </div>
            {checkBox}
        </div>
      </div>
    );
  }
}

View1.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View1;
