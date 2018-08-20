import React, { Component } from 'react';

import './styles.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.handleEnabler= this.handleEnabler.bind(this);
    this.state = {
      checked : 'checked',
      enabled: 'Enabled'
    }
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
          <div class="switch">
            <label>

              <input onClick={this.handleEnabler} checked={this.state.checked} type="checkbox" />
              <span className="lever"></span>

            </label>
          </div>
        </div>

        <form className="campaign-form">
          <div className="form-text-message">
            <label>Text Message</label>
            <textarea rows="1" class="materialize-textarea"></textarea>
          </div>
          <label>When</label>
          <div className="form-when">
            <input />
            <div>{this.props.when}</div>
          </div>
          <input className="btn-flat btn-small white-text blue hoverable waves-effect waves-light" type="submit" value="update"/>
        </form>
      </div>
    )
  }

}

export default Form
