import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View2.scss';

class View2 extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropDownOption: 'Dropdown',
      input: 'Default',
      modalVisible: true
    };
    this.getTextFieldInput = this.getTextFieldInput.bind(this);
    this.modalExit = this.modalExit.bind(this);
  }

  buttonHit(viewId) {
    this.props.onChange({ viewId: viewId });
  }

  // Drop Down Object
  //_____________________________________________________________________________________
  createDropDown() {
    return (
      <div className="styleBetween">
        <Dropdown isOpen={this.state.dropdownOpen}   toggle={this.toggle}>
         <DropdownToggle  className="btn btn-light" caret>
           {this.state.dropDownOption}
         </DropdownToggle>
         <DropdownMenu>
           <DropdownItem onClick={this.dropDownClicked.bind(this, 'Option 1')}>Option 1</DropdownItem>
           <DropdownItem  onClick={this.dropDownClicked.bind(this, 'Option 2')}> Option 2</DropdownItem>
           <DropdownItem disabled> Option 3 (disabled)</DropdownItem>
           <DropdownItem divider />
           <DropdownItem  onClick={this.dropDownClicked.bind(this, 'Option 4')}>Option 4</DropdownItem>
         </DropdownMenu>
       </Dropdown>
      </div>
    );
  }

  // Drop Down Actions
  // _________________________________________________________________________________
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  dropDownClicked(selected) {
    this.setState({ dropDownOption: selected });
  }

  // Text Field
  // ___________________________________________________________________________________
  createTextField() {
    return (
      <div className="textFieldSet">
        <p>
         <input type = "text"
           id = "DefaultTextField"
           placeholder = " Default Text Field"
           className="textFieldInput"
           />
        </p>

        <Button type="button" className="btn-light textFieldButton" onClick={this.getTextFieldInput}>
          Save Input
        </Button>
      </div>
    );
  }

  getTextFieldInput() {
    const input = document.getElementById('DefaultTextField').value;
    this.setState({ input: input });
  }

  // Create Image Field
  //____________________________________________________________________________
  createImage() {
    return (
      <div className="imageContainer">
        <img src="https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
          className="imageClass"/>
          <div className="showMe">
                Text Overlay
          </div>
      </div>
    );
  }


  // Create Modal with Exit
  //____________________________________________________________________________
  createModal() {
    return (
    <div className="customModal">
      <div className="modalContent">
        <span className="closeAdmin"  onClick={this.modalExit}>&times;</span>
        <h1 className="title">  Basic Modal </h1>
      </div>
    </div>
  );
  }

  createModalButton() {
    return (
      <div className="styleBetween">
        <Button type="button" className="btn-outline-dark btn-light" onClick={this.modalExit}>
            Show Generic Modal
        </Button>
      </div>
    );
  }

  modalExit() {
    this.setState( prevState => ({
      modalVisible: !prevState.modalVisible
    }));
  }

  render() {
    const dropDown = this.createDropDown();
    const textField = this.createTextField();
    const imageField = this.createImage();
    const modal = this.state.modalVisible ? this.createModal() : null;
    const modalButton = this.createModalButton();

    return (
      <div className="columnView">
        {modal}
        <div> THIS IS VIEW 2</div>
        <div className="buttonStyle">
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'Main')}> Go Back to Main View</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 1')}> Go To View 1</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 3')}> Go To View 3</Button>
        </div>
        {dropDown}
        {textField}
        {this.state.input}
        {imageField}
        {modalButton}
      </div>
    );
  }
}

View2.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View2;
