import React, { Component } from "react";
import EmployeeListItem from "./EmployeeListItem";

import "./styles.css";

class EmployeeBox extends Component {
  render() {
    return (
      <div className="outer-employee">
        <div className="employee-box">
          <div className="employee-top-bar">Manage Employees</div>
          <div className="employee-list">
            <div className="employee-list-item key">
              <div className="list-item-info name">Name</div>
              <div className="list-item-info">Apts</div>
              <div className="list-item-info">Calander</div>
              <div className="list-item-info">Info</div>
              <div className="list-item-info">Edit</div>
              <div className="list-item-info delete">Delete</div>
            </div>

            <EmployeeListItem name="Jessica Dobbie" appointments="6" />
            <EmployeeListItem name="Rick Astley" appointments="2" />
            <EmployeeListItem name="Samson Farris" appointments="9" />
            <EmployeeListItem name="Jeff Harrison" appointments="3" />
            <EmployeeListItem name="John H. Epson" appointments="6" />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeBox;
