import React, { Component } from 'react';

import axios from 'axios';

import './styles.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);

    this.handleEnabler= this.handleEnabler.bind(this);
    this.state = {
      checked : 'checked',
      enabled: 'Enabled',
      value: this.props.text
    }
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }



  handleEnabler() {
    if (this.state.checked) {
      this.setState({checked: ''})
      this.setState({enabled: 'Disabled'})
    } else {
      this.setState({checked: 'checked'})
      this.setState({enabled: 'Enabled'})
    }
  }

  render() {
      return (
        <div className="FORM">
          <div className="switch-enabler">
            <label>{this.state.enabled}</label>
            <div className="switch">
              <label>
                <input onClick={this.handleEnabler} checked={this.state.checked} type="checkbox" />
                <span className="lever"></span>

              </label>
            </div>
          </div>

          <form className="campaign-form">
            <div className="form-text-message">
              <label>Text Message</label>
              <textarea style={{padding: '0', width: '95%'}} value={this.state.value} onChange={this.handleChange} rows="1" class="materialize-textarea"></textarea>
            </div>
            <label>When</label>
            <div className="form-when">
              <input />
              <label>{this.props.when}</label>
            </div>
            <input className="btn-flat btn-small white-text blue hoverable waves-effect waves-light" type="submit" value="update"/>
          </form>
        </div>
      )
    }


}

export default Form
