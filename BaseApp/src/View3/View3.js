import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Proptypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View3.scss';
import axios from 'axios';

class View3 extends Component {

  constructor(props) {
  super(props);
  this.state = {
    left: false,
    right: false,
    opacity: 0
    }
    this.saveButton = this.saveButton.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    }, 500);
  }

  buttonHit(viewId) {
    this.props.onChange({ viewId: viewId });
  }

  // Panels wIth Sliding

  getButton(direction, styler) {
    return (
      <div>
        <Button
          type="button"
          className={`${styler} btn-light btn-sm`}
          style={{ 'width': '58.5px', 'marginRight': '1px', 'opacity': '0.8' }}
          onClick={this.panelShow.bind(this, direction)}
        >
          {direction}
        </Button>
      </div>
    )
  }

  panelShow(direction) {
    this.setState({ [direction]: !this.state[direction] });
  }

  getLeftPanel() {
    const toggleStyle = this.state.left ? 'leftPanelOpening' : 'leftPanelClosing';
    return (
      <div className={toggleStyle} style={{ 'opacity': this.state.opacity }}>
          <div className="panelTitle"> Left Panel </div>
          <div className="panelContent">
            <li>
                This is a simple list
            </li>
            <li>
                That exists within the left panel
            </li>
            <li>
                Simply to demonstrate lists and a simple panel
            </li>
            <li>
                The right side will contain images
            </li>
          </div>
      </div>
    );
  }

  getRightPanel() {
    const toggleStyle = this.state.right ? 'rightPanelOpening' : 'rightPanelClosing';
    return (
      <div className={toggleStyle} style={{ 'opacity': this.state.opacity }}>
          <div className="panelTitle"> Right Panel </div>
          <div className="panelContent">
            <img
              className="panelImage"
              src="https://media.mnn.com/assets/images/2015/08/union-wood-sunrise.jpg.653x0_q80_crop-smart.jpg"
              alt="Forest"/>
            <img
              className="panelImage"
              src="https://i.pinimg.com/originals/ec/11/7a/ec117a2614aad453a8b8f1a7d00cb7ce.jpg"
              alt="Mountain"/>
            <img
              className="panelImage"
              src="https://i.ytimg.com/vi/b-4wIKK2dpg/maxresdefault.jpg"
              alt="Beach"/>
            <img
              className="panelImage"
              src="http://wallpapers.ae/wp-content/uploads/2015/10/Lovely-river-wallpaper.jpg"
              alt="River"/>
          </div>
      </div>
    );
  }


  // Logic For Backend Save
  //____________________________________________________________________________
  saveButton() {
    const data = {
     viewId: 'View 3',
     leftPanel: this.state.left,
     rightPanel: this.state.right
   }
     axios.post('http://localhost:5000/save', data)
        .then(res => {
          this.props.onChange({ viewId: 'Main' });
        });
  }



  render() {
    const leftPanelButton = this.getButton('left', 'btn-outline-primary');
    const rightPanelButton = this.getButton('right', 'btn-outline-warning');
    const leftPanel = this.getLeftPanel();
    const rightPanel = this.getRightPanel();

    return (
      <div className="columnView">
        <div> THIS IS VIEW 3</div>
        <div className="buttonStyle">
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'Main')}> Go Back to Main View</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 1')}> Go To View 1</Button>
          <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.buttonHit.bind(this, 'View 2')}> Go To View 2</Button>

          <div className="styleBetween">
            <div className="panelButtons">
              {leftPanelButton}
              {rightPanelButton}
            </div>
          </div>
            <div className="styleBetween"/>
          <Button type="button" className="btn btn-dark" onClick={this.saveButton}> Save View Information</Button>
        </div>
            {leftPanel}
            {rightPanel}
      </div>
    );
  }
}

View3.proptypes = {
  onChange: Proptypes.func.isRequired,
};

export default View3;
