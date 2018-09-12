import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

import Form from './Form';

import axios from 'axios'

import './styles.css';


class CampaignBox extends Component {
  constructor(props) {
      super(props);
      this.addActiveClass= this.addActiveClass.bind(this);
      this.state = {
        isActive: false,
        highView : { style: {height: '0rem'}},
        lowView : { style: {height: '100%', paddingBottom: '1rem'}}
      }
  }





  addActiveClass() {

    if (this.state.isActive) {
      this.setState({
        isActive: false
      })
    }
    else {
      this.setState({
        isActive: true
      })
    }

  }

  render() {

    return (
      <div className="outer-campaign">
        <div onClick={this.addActiveClass} style={this.props.active ? {background: '#2196F3'} : {background: '#7f8c8d'}} className="campaign-top-bar">{this.props.title}
          <i data-tip data-for={this.props.title}  className="material-icons keyname-info">info</i>

          <ReactTooltip id={this.props.title} place="top" type="dark" effect="solid">{this.props.toolTipMsg}</ReactTooltip>

        </div>
        <div className="campaign-box" style={this.state.isActive ? this.state.highView.style : this.state.lowView.style}>
          {this.state.isActive ? null : <Form when={this.props.when} active={this.props.active} text={this.props.text} camp={this.props.camp} time={this.props.time} />}
        </div>
      </div>
    )
  }
}

export default CampaignBox;
