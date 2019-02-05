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
      modalVisible: true,
      totalItems: ['a', 'b', 'c', 'd', 'e', 'f', 'abc', 'efg', 'aei', 'bc', 'abcd', 'ab', 'cde', 'fgh', 'g', 'h', 'cd', 'cba', 'z'],
      searchedItems : []
    };
    this.getTextFieldInput = this.getTextFieldInput.bind(this);
    this.modalExit = this.modalExit.bind(this);
    this.captureSearch = this.captureSearch.bind(this);
  }

  componentDidMount() {
    this.setState({ searchedItems: this.state.totalItems });
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

  // List Creation
  //____________________________________________________________________________________
  createListOfItems() {
      const elements = this.state.searchedItems.map((element) => this.createListElement(element));
      return (
          <div className="tableContainer">
              <div className="tableTitle">
                <span>List Elements</span>
              </div>
              <div className="tableElements">
                {elements}
              </div>
          </div>
      );
  }

  createListElement(element) {
    return (
        <div className="tableElement" key={element}>
          <span>{element}</span>
        </div>
    );
  }

  // Search Bar Creator
  // ________________________________________________________________________________
  createSearchBar() {
    return(
      <div className="styleBetween">
        <div className="styleCentre">
             <input type = "text"
               id = "Search"
               placeholder = "Search"
               className="styleSearch"
               onChange={this.captureSearch}
               />
              <img src="https://thakshashila.com/content/images/2017/12/unnamed.png" className="imageSearch" onClick={this.captureSearch}/>
        </div>
      </div>
    );
  }

  captureSearch() {
    const input = document.getElementById('Search').value;
    const inputSplit = input.split("");
    let searchResult = [];
    if (inputSplit.length > 0) {
      this.state.totalItems.forEach((element) => {
        for (let i = 0; i < inputSplit.length; i++) {
          if (i === inputSplit.length - 1 && element.indexOf(inputSplit[i]) !== -1) {
            searchResult.push(element);
          } else if (element.indexOf(inputSplit[i]) === -1) {
            break;
          }
        }
      });
    } else {
      searchResult = this.state.totalItems;
    }

    this.setState({ searchedItems: searchResult });
  }


  render() {
    const dropDown = this.createDropDown();
    const textField = this.createTextField();
    const imageField = this.createImage();
    const modal = this.state.modalVisible ? this.createModal() : null;
    const modalButton = this.createModalButton();
    const searchBar = this.createSearchBar();
    const list = this.createListOfItems();

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
        {searchBar}
        {list}
      </div>
    );
  }
}

View2.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View2;
