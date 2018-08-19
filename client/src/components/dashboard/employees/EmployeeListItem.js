import React, { Component } from 'react';

import './styles.css';

class EmployeeListItem extends Component {
  render() {
    return (
      <div className="employee-list-item">
        <div className="list-item-info name">{this.props.name}</div>
        <div className="list-item-info">{this.props.appointments}</div>
        <div className="list-item-info calander"><a href="#">Calander</a></div>
        <div className="list-item-info info"><span class="clickable">Info</span></div>
        <div className="list-item-info edit"><span class="clickable">Edit</span></div>
        <div className="list-item-info delete"><span class="clickable">Delete</span></div>
      </div>
    )
  }
}

export default EmployeeListItem
