import React, { Component } from 'react';
import {InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Proptypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import './DropdownSelect.scss';
import { COLOUR_THEME } from '../../../constants';

class DropdownSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  createMenuItems(){
    const options = this.props.dropdownOptions.map((value) =>
      {
        const menuItem =
          <MenuItem
            id={value}
            key={value}
            value={value}
           >{`${value}`}
          </MenuItem>
          return menuItem;
      }
    );
    return options;
  }

  handleChange(e) {
    const newSelection = e.target.value;
    this.setState({
      currentSelection: newSelection
    });
  }

  getTooltip() {
    return (
      <div className="tooltipWrapper">
        <HelpIcon
          className="icon"
          color="secondary"
        />
        <div className="tooltipText">{this.props.hoverText}</div>
       </div>
    );
  }

  render() {
    const menuOptions = this.createMenuItems();
    const tooltip = this.props.enableTooltip ? this.getTooltip() : null;
    return(
      <div  className='dropdownWrapper'>
        <ThemeProvider theme={COLOUR_THEME}>
          <FormControl className='dropdownSelect'>
            <InputLabel id={`Dropdown_${this.props.dropdownName}`} color="primary"
            style={{"fontSize": '20px'}}
            >
                {this.props.dropdownName}
            </InputLabel>
            {tooltip}
          <Select
            id={`Dropdown_Select_${this.props.dropdownName}`}
            value={this.state.currentSelection}
            onChange={this.handleChange}
          >
          {menuOptions}
          </Select>
        </FormControl>
        </ThemeProvider>
      </div>
    );
  }
}

DropdownSelect.defaultProps = {
  dropdownOptions: [],
  dropdownName: '',
  hoverText: '',
  enableTooltip: false
}

DropdownSelect.propTypes = {
 id: Proptypes.string.isRequired,
 dropdownOptions: Proptypes.array,
 dropdownName: Proptypes.string,
 updateFormData: Proptypes.func.isRequired,
 hoverText: Proptypes.string,
 enableTooltip: Proptypes.bool
}

export default DropdownSelect;
