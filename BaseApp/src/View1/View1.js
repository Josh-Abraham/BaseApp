import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View1.scss';
import axios from 'axios';

class View1 extends Component {

  constructor(props) {
  super(props);
  this.state = {
    title: 'This is a default title',
    check1: false,
    check2: false,
    radioButton: ''
    }
    this.saveButton = this.saveButton.bind(this);
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
      <div className="jumbotron">
        <h1 className="display-4">{this.state.title}</h1>
      </div>
        <h1><span className="badge badge-pill badge-dark">{this.state.title}</span></h1>
      </div>
    );
  }

  // ______________________________________________________________________________________________________________
  // CHECK BOX MAKER

  checkBoxMaker() {
    return (
    <div className="styleBetween">
      <div className="form-check">
        <input class="form-check-input" className="styleCheckBox" type="checkbox" value="" id="check1" onClick={this.checkClick.bind(this, 'check1')}/>
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input class="form-check-input" className="styleCheckBox" type="checkbox" value="" id="defaultCheck2" onClick={this.checkClick.bind(this, 'check2')}/>
        <label className="form-check-label" for="defaultCheck2">
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

  // CHECK BOX With Inputs
  // ______________________________________________________________________________________________________________

  checkBoxMaker(inputField, title ,label) {
    let titleElement = null;
    if (title !== '') {
      titleElement = (
        <h2>
          <div className="textHeader">{title}</div>
        </h2>
      );
    }
    return (
    <div>
      {titleElement}
      <div className="form-check">
        <input class="form-check-input" className="styleCheckBox" type="checkbox" value="" id="check1" onClick={this.checkClick.bind(this, inputField)}/>
        <label className="form-check-label" for="defaultCheck1">
          {label}
        </label>
      </div>
    </div>
    );
  }

  // ______________________________________________________________________________________________________________________________
  // Check Box Action Handler

  checkClick2(inputField) {
    this.setState({ [inputField]: !this.state[inputField]});
  }


  //______________________________________________________________________________________________________________________________
  //RADIO BUTTON GROUP

  radioGroupMaker(elements,title, group) {
    const groupButtons = elements.map((element) => {
        return (
          <div>
            <input
              type="radio"
              name={group}
              id={element.id}
              className="radioGroupElement"
              onClick={this.radioButtonHit.bind(this, group, element.id)}
            />
            <label for={element.id}>{element.label}</label>
          </div>
        );
    });
    return (
      <div className="radioGroupColumn">
      <h2>
        <div className="textHeader">{title}</div>
      </h2>
        {groupButtons}
      </div>
    )
  }

  //______________________________________________________________________________________________________________________________
  //Radio button Handler

  radioButtonHit(group, buttonHit) {
    this.setState({ [group]: buttonHit });
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

  //_________________________________________________________________________________________________________________________
  // Base Button Handler
  genericButtonHit(newTitle) {
    this.setState({ title: newTitle });
  }


  // Logic For Backend Save
  saveButton() {
    const data = {
     viewId: 'View 1',
     title: this.state.title,
     check1: this.state.check1,
     check2: this.state.check2,
     radioButton: this.state.radioButton
   }
     axios.post('http://localhost:5000/save', data)
        .then(res => {
          this.props.onChange({ viewId: 'Main' });
        });
  }

  render() {
    const title = this.pageTitle();
    const checkBox = this.checkBoxMaker();
    const radioContent =  [
      {
        id: 'option1',
        label: 'Option 1'
      },
      {
        id: 'option2',
        label: 'Option 2'
      },
      {
        id: 'option3',
        label: 'Option 3'
      }
    ];
    const radioGroup = this.radioGroupMaker(radioContent, 'Basic Radio Group','radioButton');
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
            <div className="styleBetween"/>
            <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 3')}> Go To View 3</Button>
          </div>
            {checkBox}
            {radioGroup}
            {genericButton1}
            {domButtons}
            <Button type="button" className="btn btn-dark" onClick={this.saveButton}> Save View Information</Button>
        </div>
      </div>
    );
  }
}

View1.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View1;
