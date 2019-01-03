import React, { Component } from "react";

import "./styles.scss";

class EmployeeListItem extends Component {
  render() {
    return (
      <div className="employee-list-item">
        <div className="list-item-info name">{this.props.name}</div>
        <div className="list-item-info">{this.props.phone}</div>
        <div className="list-item-info calander">
        {this.props.email}
        </div>
      </div>
    );
  }
}

export default EmployeeListItem;
