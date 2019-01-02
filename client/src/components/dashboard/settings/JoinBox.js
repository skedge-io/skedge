import React, { Component } from "react";
import axios from 'axios';

class JoinBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      success: false
    }

    this.updateBusiness = this.updateBusiness.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  updateBusiness() {
    axios.post('/api/business/' + this.state.value + '/join').then(res => {
      this.setState({success: true})
    })
  }

  render() {
    return (
      <div className="settings-box">
        <div className="join-business-box">
          <h3>Join New Business</h3>
          <p>Ask your manager to send you the ID of the business you are attempting to join.</p>
          <input onChange={this.handleChange} className="copy-input-imp" value={this.state.value} />
          <button onClick={() => this.updateBusiness()} className="copy-button-imp">{this.state.success ? <span>Success</span> : <span>Join</span>}</button>
          <p>{this.state.success ? <span style={{color: 'green'}}>You have joined this business.</span> : <span></span>}</p>
        </div>
      </div>
    );
  }
}

export default JoinBox;
