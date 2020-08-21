import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { COLOUR_THEME } from '../../constants';
import './RadioGroup.scss';

class RadioGroup extends Component {

  createRadioButtonGroup() {
    const radioButtonGroup = this.props.radioButtonOptions.map((item) =>
      <FormControlLabel
        key={item}
        control={
          <Radio
            onChange={this.props.onChange.bind(this, item)}
            name={item}
            color='primary'
            checked={this.props.currentSelection === item}
          />
        }
        label={item}
      />
    );

    return <div style={{ 'display': 'flex', 'flexDirection': this.props.direction }}>
      {radioButtonGroup}
    </div>;
  }

  render() {
    const radioButtonGroup = this.createRadioButtonGroup();
    return (
      <div className='radioButtonWrapper'>
        <ThemeProvider theme={COLOUR_THEME}>
          <FormLabel
            component="legend"
            style={{ "fontSize": '20px' }}>
            {this.props.label}
          </FormLabel>
          {radioButtonGroup}
        </ThemeProvider>
      </div>
    );
  }
}

RadioGroup.defaultProps = {
  direction: 'row',
  currentSelection: ''
}

RadioGroup.propTypes = {
  radioButtonOptions: Proptypes.array.isRequired,
  id: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  direction: Proptypes.string,
  onChange: Proptypes.func.isRequired,
  currentSelection: Proptypes.string
}

export default RadioGroup;
