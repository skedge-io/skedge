import React, { Component } from 'react';

import axios from 'axios';

import './styles.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleWhenChange= this.handleWhenChange.bind(this);

    this.handleEnabler= this.handleEnabler.bind(this);
    this.state = {
      checked : this.props.active,
      enabled: this.props.active ? 'Enabled' : 'Disabled',
      value: this.props.text,
      eventValue: this.props.when
    }
  }



  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleWhenChange(event) {
    this.setState({whenValue: event.target.value});
  }


  handleEnabler() {
    if (this.state.checked) {
      this.setState({checked: ''})
      this.setState({enabled: 'Disabled'})
      this.setState({activeValue: false})

      axios.post('/campaigns/update')
    } else {
      this.setState({checked: 'checked'})
      this.setState({enabled: 'Enabled'})
      this.setState({activeValue: true})
      axios.post('/campaigns/update')
    }
  }

  render() {
      return (
        <div className="FORM">

          <form method="POST" action="/api/campaigns/update" className="campaign-form">
            <div className="switch-enabler">
              <label>{this.state.enabled}</label>
              <div className="switch">
                <label>
                  <input name="active" onClick={this.handleEnabler} checked={this.state.checked} value={this.state.activeValue} type="checkbox" />
                  <span className="lever"></span>

                </label>
              </div>
            </div>
            <input name="name" hidden value={this.props.camp} />

            <div className="form-text-message">
              <label>Text Message</label>
              <textarea style={{padding: '0', width: '95%'}} name="text" value={this.state.value} onChange={this.handleChange} rows="1" class="materialize-textarea"></textarea>
            </div>
            <label>When</label>
            <div className="form-when">
              <input name="when" value={this.state.whenValue} onChange={this.handleWhenChange}/>
              <label>{this.props.time}</label>
            </div>
            <input className="btn-flat btn-small white-text blue hoverable waves-effect waves-light" type="submit" value="update"/>
          </form>
        </div>
      )
    }


}

export default Form
