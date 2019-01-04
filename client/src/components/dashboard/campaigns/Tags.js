import React, { Component } from "react";

class Tags extends Component {
  state = {};
  render() {
    return (
      <div className="tag-container hide-on-mobile">
        <div className="tag-col">
          <h5>Available tags</h5>
          <div className="tag-content">
            <p>
              Campaign tags setup here will be automatically sent to clients.
              All messages generated can be easily accessed on the messages page
              (in your main menu).
            </p>
            <p>
              Adjust the settings for how and when messages are sent, and edit
              the templates to personalise the text.
            </p>
            <p>
              Use the below tags to include appointment details inside messages:
            </p>
          </div>

          <p>
            <b>*name*</b>: Name of Client
          </p>

          <p>
            <b>*employee*</b>: Name of Employee
          </p>

          <p>
            <b>*business*</b>: Name of Business
          </p>

          <p>
            <b>*time*</b>: Time of appointment
          </p>

          <p>
            <b>*notes*</b>: Notes of appointment
          </p>
        </div>
      </div>
    );
  }
}

export default Tags;
