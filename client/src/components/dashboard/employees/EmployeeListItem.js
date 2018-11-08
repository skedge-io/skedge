import React, { Component } from "react";

import "./styles.scss";

class EmployeeListItem extends Component {
  render() {
    return (
      <div className="employee-list-item">
        <div className="list-item-info name">{this.props.name}</div>
        <div className="list-item-info">{this.props.appointments}</div>
        <div className="list-item-info calander">
          <a href="/calander/employeeId">Calander</a>
        </div>
        <div className="list-item-info info">
          <span className="clickable">Info</span>
        </div>
        <div className="list-item-info edit">
          <span className="clickable">Edit</span>
        </div>
        <div className="list-item-info delete">
          <span className="clickable">Delete</span>
        </div>
      </div>
    );
  }
}

export default EmployeeListItem;
