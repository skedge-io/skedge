import React, { Component } from 'react';
import './styles.css';


class CampaignBox extends Component {
  constructor(props) {
      super(props);
      this.addActiveClass= this.addActiveClass.bind(this);
      this.state = {
        isActive: false,
        highView : { style: {height: '20rem'}},
        lowView : { style: {height: '0rem'}}
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
        <div onClick={this.addActiveClass} className="campaign-top-bar">{this.props.title}</div>
        <div className="campaign-box" style={this.state.isActive ? this.state.highView.style : this.state.lowView.style}>
        </div>
      </div>
    )
  }
}

export default CampaignBox;
