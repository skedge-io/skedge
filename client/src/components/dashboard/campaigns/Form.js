import React, { Component } from "react";
import { Link } from 'react-router-dom';

import axios from "axios";

import "./styles.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleWhenChange = this.handleWhenChange.bind(this);

    this.handleEnabler = this.handleEnabler.bind(this);
    this.state = {
      checked: this.props.active,
      activeValue: this.props.active,
      enabled: this.props.active ? "Enabled" : "Disabled",
      value: this.props.text,
      whenValue: this.props.when
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleWhenChange(event) {
    this.setState({ whenValue: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault();
    const data = new FormData(event.target);

    fetch("/api/campaigns/update", {
      method: "POST",
      body: data
    });
  }

  handleEnabler() {
    if (this.state.checked) {
      this.setState({ checked: "" });
      this.setState({ enabled: "Disabled" });
      this.setState({ activeValue: "false" });

      axios.post("/api/campaigns/update", {
        active: false
      });
    } else {
      this.setState({ checked: "checked" });
      this.setState({ enabled: "Enabled" });
      this.setState({ activeValue: "true" });

      axios.post("/api/campaigns/update", {
        active: true
      });
    }
  }

  render() {
    return (
      <div className="FORM">
        <form
          method="POST"
          action="/api/campaigns/update"
          className="campaign-form"
        >
          <input name="name" hidden value={this.props.camp} />
          <div className="switch-enabler">
            <label>{this.state.enabled}</label>
            <div className="switch">
              <label>
                <input
                  name="active"
                  onClick={this.handleEnabler}
                  checked={this.state.checked}
                  value={this.state.activeValue}
                  type="checkbox"
                />
                <span className="lever" />
              </label>
            </div>
          </div>
          <div className="form-text-message">
            <label className="form-label">MESSAGE TEMPLATE</label>
            <textarea
              className="materialize-textarea text"
              style={{ padding: "0", width: "95%" }}
              name="text"
              value={this.state.value}
              onChange={this.handleChange}
              rows="1"
            />
          </div>
          <label className="form-label">WHEN</label>
          <div className="form-when">
            <input
              name="when"
              value={this.state.whenValue}
              onChange={this.handleWhenChange}
            />
            <label className="when-label">{this.props.time}</label>
          </div>
          {this.props.auth.plan === 'Premium' ? (
            <input
              className="btn-flat btn-small white-text blue"
              type="submit"
              value="update"
            />

          ) : (
            <div>
              <input
                disabled
                className="btn-flat btn-small white-text blue"
                type="submit"
                value="update"
              />
              <p>Your business must be on the <Link to="/upgrade">Premium plan.</Link> to enable this marketing campaign</p>
            </div>
          ) }
        </form>
      </div>
    );
  }
}

export default Form;
