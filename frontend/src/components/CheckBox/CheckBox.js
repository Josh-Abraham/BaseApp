import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox as CheckBoxUI} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { COLOUR_THEME } from '../../constants';
import './CheckBox.scss';

class CheckBox extends Component {

  render() {
    return(
      <div className='checkBox'>
        <ThemeProvider theme={COLOUR_THEME}>
          <FormControlLabel
            control={
              <CheckBoxUI
                onChange={this.props.onChange}
                name={this.props.label}
                color='primary'
                checked={this.props.isSelected}
              />
            }
            label={this.props.label}
          />
        </ThemeProvider>
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  isSelected: Proptypes.bool.isRequired
}

export default CheckBox;
