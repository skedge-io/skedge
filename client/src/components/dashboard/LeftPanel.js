import React, { Component } from 'react';

class LeftPanel extends Component {
  render() {
    return (
      <div className="left-panel">
        <p className="grayer">Sections</p>
        <a className="sec-link active-sec" href="#"><i className="material-icons">event</i> Events</a>
        <a className="sec-link" href="#"><i className="material-icons">person</i> Employees</a>
        <a className="sec-link" href="#"><i className="material-icons">assessment</i> Statistics</a>
        <a className="sec-link" href="#"><i className="material-icons">library_books</i> Campaigns</a>
        <a className="sec-link" href="#"><i className="material-icons">contacts</i> Manage Contacts</a>
      </div>
    )
  }
}

export default LeftPanel;
