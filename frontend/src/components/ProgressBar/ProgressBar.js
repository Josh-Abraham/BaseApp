
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import './ProgressBar.scss';
import { COLOUR_THEME } from '../../constants';

class ProgressBar extends Component {

  submitForm() {

  }

  getProgressWidth() {
    const currentValue = (this.props.currentProgress / this.props.maxProgress) * 80

    return currentValue + 'vw'
  }

  getProgressBar(progressWidth) {
    if (this.props.currentProgress === this.props.maxProgress) {
      return (
        <ThemeProvider theme={COLOUR_THEME}>
          <Button
            className="submitButton"
            variant="contained"
            color="primary"
            disableElevation
            onClick={this.submitForm.bind(this)}
          >
            {this.props.fullText}
          </Button>
        </ThemeProvider>
      );
    }
    return (
      <div className="progressBarOuter">
        <div
          className="progressBar"
          style={{ "width": progressWidth }}
        />
      </div>
    );
  }

  render() {
    const progressWidth = this.getProgressWidth();
    const createProgressBar = this.getProgressBar(progressWidth);
    return (
      <div className="progressAndTitle">
        <div className="progressTitle">
          {this.props.title}
        </div>
        <div className="progressBarWrapper">
          {createProgressBar}
        </div>
      </div>
    );
  }
}


ProgressBar.defaultProps = {
  currentProgress: 0,
  maxProgress: 100,
  onChange: null,
  title: '',
  fullText: ''
}


ProgressBar.propTypes = {
  currentProgress: Proptypes.number,
  maxProgress: Proptypes.number,
  onChange: Proptypes.func,
  title: Proptypes.string,
  fullText: Proptypes.string
}


export default ProgressBar;
