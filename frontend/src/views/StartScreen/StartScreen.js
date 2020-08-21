// Import Functions for Base Home App
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { getSampleData } from '../../utils/sockets'
import TextField from '../../components/TextField'
import RadioGroup from '../../components/RadioGroup'
import CheckBox from '../../components/CheckBox'
import ProgressBar from '../../components/ProgressBar'
import { v4 as uuidv4 } from 'uuid'
import './StartScreen.scss'

class StartScreen extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      checkBoxSelected: false,
      radioButtonSelected: '2'
    }
    this.handleTextFieldBlur = this.handleTextFieldBlur.bind(this);
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  componentDidMount() {
    getSampleData().then(res => {
      console.log(res.data)
      this.setState({ title: res.data })
    })
  }

  // TextField
  getTextField(defaultValue, label) {
    return <TextField
      id={`text_field_${uuidv4()}`}
      defaultValue={defaultValue}
      label={label}
    />
  }

  handleTextFieldBlur(e) {
    const textInput = e.target.value;
    this.setState({
      textFieldInput: textInput
    });
  }

  // Raddio Button
  getRadioGroup(label, options, direction, selection) {
    return <RadioGroup
      id={`radio_group_${uuidv4()}`}
      label={label}
      radioButtonOptions={options}
      direction={direction}
      onChange={this.handleRadioButtonChange}
      currentSelection={selection}
    />
  }

  handleRadioButtonChange(newSelection) {
    this.setState({
      radioButtonSelected: newSelection
    });
  }


  // Check Box
  getCheckBox(label, isSelected) {
    return <CheckBox
      id={`check_box_${uuidv4()}`}
      label={label}
      isSelected={isSelected}
      onChange={this.handleCheckBoxClick}
    />
  }

  handleCheckBoxClick() {
    const selection = !(this.state.checkBoxSelected);
    this.setState({
      checkBoxSelected: selection
    });
  }

  // ProgressBar
  getProgressBar(currentProgress, maxProgress, title, fullText) {
    return <ProgressBar
      id={`progress_bar_${uuidv4()}`}
      currentProgress={currentProgress}
      maxProgress={maxProgress}
      title={title}
      fullText={fullText}
    />
  }

render() {
  const textField = this.getTextField('Enter', 'Name')
  const radioGroup = this.getRadioGroup('Pick an option', ['0', '1', '2', '3'], 'column', this.state.radioButtonSelected)
  const checkBox = this.getCheckBox('Enter', this.state.checkBoxSelected)
  const progressBar = this.getProgressBar(40, 80, 'Current Progress', 'SUCCESS')

  return (
    <div className="StartScreenWrapper">
      {this.state.title}
      {textField}
      {radioGroup}
      {checkBox}
      {progressBar}
    </div>
  );
}
}

StartScreen.defaultProps = {
  text: 'Hello'
}
StartScreen.propTypes = {
  text: Proptypes.string
}

export default StartScreen;
