import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div onClick={this.props.clicky} className="contact">
        <div>{this.props.name}</div> <div className="hide-on-mobile">View Details</div>
      </div>
    )
  }
}

export default Contact;
