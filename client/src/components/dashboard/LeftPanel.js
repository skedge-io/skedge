import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LeftPanel extends Component {


  render() {

    return (
      <div className="left-panel">
        <p className="grayer">Sections</p>
        <Link className="sec-link" id={this.props.wambo} to="/dashboard"><i className="material-icons">event</i> Calendar</Link>
        <Link className="sec-link" id={this.props.index1} to="/dashboard/employees"><i className="material-icons">person</i> Employees</Link>
        <Link className="sec-link" id={this.props.index2} to="/dashboard/statistics"><i className="material-icons">assessment</i> Statistics</Link>
        <Link className="sec-link" id={this.props.index3} to="/dashboard/campaigns"><i className="material-icons">library_books</i> Campaigns</Link>
        <Link className="sec-link" id={this.props.index4} to="/dashboard/contacts"><i className="material-icons">contacts</i> Manage Contacts</Link>
      </div>
    )
  }
}

export default LeftPanel;
