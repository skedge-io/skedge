import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        Events
        <div className="right">
          <Link to="/appointments/new" className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light">
            New Appointment
          </Link>
        </div>
      </div>
    )
  }
}

export default TopBar;
