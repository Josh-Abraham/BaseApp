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
    check2: false,
    radioButton: 'radio1'
    }
  }

  componentDidMount() {
    document.getElementById('defaultCheck2').disabled = true;
  }

  // _______________________________________________________________________________________________________________
  // BACK BUTTON
  buttonHit(viewId) {
    this.props.onChange({ viewId: viewId });
  }

  //________________________________________________________________________________________________________________
  // Title Maker 2 Options
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

  // ______________________________________________________________________________________________________________
  // CHECK BOX MAKER

  checkBoxMaker() {
    return (
    <div className="styleBetween">
      <div class="form-check">
        <input class="form-check-input" className="styleCheckBox" type="checkbox" value="" id="check1" onClick={this.checkClick.bind(this, 'check1')}/>
        <label class="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" className="styleCheckBox" type="checkbox" value="" id="defaultCheck2" onClick={this.checkClick.bind(this, 'check2')}/>
        <label class="form-check-label" for="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
    </div>
    );
  }

  // ______________________________________________________________________________________________________________________________
  // Check Box Action Handler

  checkClick(checkType) {
    if (checkType === 'check1') {
      this.setState({ check1: !this.state.check1 });
      document.getElementById('defaultCheck2').disabled = this.state.check1;
    } else if (checkType === 'check2') {
      this.setState({ check2: !this.state.check2 });
    }
  }

  //______________________________________________________________________________________________________________________________
  //RADIO BUTTON GROUP

  radioGroupMaker() {
    return (
      <div className="radioGroupColumn">
        <div>
          <input
            type="radio"
            name="group1"
            id="RadioButton1"
            className="radioGroupElement"
            onClick={this.radioButtonHit.bind(this, 'radio1')}
          />
          <label for="RadioButton1">Option 1</label>
        </div>
        <div>
          <input
            type="radio"
            name="group1"
            id="RadioButton2"
            className="radioGroupElement"
            onClick={this.radioButtonHit.bind(this, 'radio2')}
          />
          <label for="RadioButton2">Option 2</label>
        </div>
        <div>
          <input
            type="radio"
            name="group1"
            id="RadioButton3"
            className="radioGroupElement"
            onClick={this.radioButtonHit.bind(this, 'radio3')}
          />
          <label for="RadioButton3">Option 3</label>
        </div>
      </div>
    )
  }

  //______________________________________________________________________________________________________________________________
  //Radio button Handler

  radioButtonHit(buttonHit) {
    this.setState({ radioButton: buttonHit });
  }

  //_____________________________________________________________________________________________________________________________
  //General Bootstarp Button Set
  createBootstrapOutlineButton() {
    return (
      <div className="columnView">
        {/* Smol Button */}
        <div className="styleBetween">
          <Button type="button" className="btn-outline-success btn-light btn-sm" onClick={this.genericButtonHit.bind(this, 'Small Button')}>
              Small Bootstrap Button
          </Button>
        </div>

        {/* Basic Button */}
        <div className="styleBetween">
          <Button type="button" className="btn-outline-info btn-light" onClick={this.genericButtonHit.bind(this, 'Average Button')}>
              Generic Bootstrap Button
          </Button>
        </div>

        {/* Thicc Button */}
        <div className="styleBetween">
          <Button type="button" className="btn-outline-danger btn-light btn-lg" onClick={this.genericButtonHit.bind(this, 'Large Button')}>
              Large Generic Bootstrap Button
          </Button>
        </div>

        {/* Blocky Boi Button */}
        <div className="styleBetween">
          <Button type="button" className="btn-outline-secondary btn-light btn-block btn-lg" onClick={this.genericButtonHit.bind(this, 'Block Button')}>
              Block Span Generic Bootstrap Button
          </Button>
        </div>
      </div>
    );
  }


  //_____________________________________________________________________________________________________________________________
  //General Dom Button Set
  createDomButtoms() {
    return (
      <div>
        <div className="divButton"  onClick={this.genericButtonHit.bind(this, 'Div Button')}>
          Div Button
        </div>
        <div className="imgButton" onClick={this.genericButtonHit.bind(this, 'Image Button')}>
          <img src="http://www.pngall.com/wp-content/uploads/2016/05/Click-Here-PNG-HD.png" alt="Blue Button" className="imgInternal"/>
        </div>
      </div>
    );
  }

  // Base Button Handler
  genericButtonHit(newTitle) {
    this.setState({ title: newTitle });
  }


  render() {
    const title = this.pageTitle();
    const checkBox = this.checkBoxMaker();
    const radioGroup = this.radioGroupMaker();
    const genericButton1 = this.createBootstrapOutlineButton();
    const domButtons = this.createDomButtoms();

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
            {radioGroup}
            {genericButton1}
            {domButtons}
        </div>
      </div>
    );
  }
}

View1.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View1;
