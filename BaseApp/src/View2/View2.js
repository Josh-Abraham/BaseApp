import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View2.css';

class View2 extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropDownOption: 'Dropdown'
    };
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


  render() {
    const dropDown = this.createDropDown();

    return (
      <div className="columnView">
        <div> THIS IS VIEW 2</div>
        <div className="buttonStyle">
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'Main')}> Go Back to Main View</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 1')}> Go To View 1</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 3')}> Go To View 3</Button>
        </div>
        {dropDown}
      </div>
    );
  }
}

View2.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View2;
