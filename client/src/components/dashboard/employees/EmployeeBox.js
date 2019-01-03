import React, { Component } from "react";
import EmployeeListItem from "./EmployeeListItem";

import "./styles.scss";

class EmployeeBox extends Component {
  constructor(props) {
    super(props)

    this.renderEmployees = this.renderEmployees.bind(this);
  }

  renderEmployees() {
    this.props.employee.map((data, index) => (
      <EmployeeListItem key={index} name={data.name} appointments="6" />
    ))
  }

  render() {
    return (
      <div className="outer-employee">
        <div className="employee-box">
          <div className="employee-list">
            <div className="employee-list-item key">
              <div className="list-item-info name">NAME</div>
              <div className="list-item-info">APTS</div>
              <div className="list-item-info">CALENDAR</div>
              <div className="list-item-info">INFO</div>
              <div className="list-item-info">EDIT</div>
              <div className="list-item-info delete">DELETE</div>
            </div>
            {this.props.employee.map((data, index) => (
              <EmployeeListItem key={index} name={data.name} appointments="6" />
            ))}
            {this.renderEmployees()}
            {console.log(this.props.employee)}
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeBox;
