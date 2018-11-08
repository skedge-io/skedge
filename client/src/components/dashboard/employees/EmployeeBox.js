import React, { Component } from "react";
import EmployeeListItem from "./EmployeeListItem";

import "./styles.scss";

class EmployeeBox extends Component {
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
