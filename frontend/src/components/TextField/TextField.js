import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { TextField as TextFieldUI } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import './TextField.scss';
import { COLOUR_THEME } from '../../constants';


class TextField extends Component {

  render() {
    return(
      <div className='textField'>
        <form autoComplete='off'>
        <ThemeProvider theme={COLOUR_THEME}>
            <TextFieldUI
              id={this.props.id}
              label={this.props.label}
              variant='outlined'
              onBlur={this.props.onChange}
              color='primary'
              defaultValue={this.props.input}
            />
          </ThemeProvider>
        </form>
      </div>
    );
  }
}

TextField.defaultProps = {
  input: ''
}

TextField.propTypes = {
  label: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  input: Proptypes.string
}

export default TextField;
