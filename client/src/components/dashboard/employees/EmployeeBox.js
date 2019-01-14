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
              <div className="list-item-info">PHONE</div>
              <div className="list-item-info">EMAIL</div>
            </div>
            {this.props.employee.map((data, index) => (
              <EmployeeListItem key={index} name={data.name} phone={data.phone} email={data.email} />
            ))}
            {this.renderEmployees()}
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeBox;
