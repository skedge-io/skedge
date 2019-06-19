import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import { connect } from "react-redux";
import { fetchEmployees } from '../../../actions';


import EmployeeBox from "./EmployeeBox";

class Employees extends Component {

  componentDidMount() {
    this.props.fetchEmployees()
  }

  render() {
    return (
      <div className="row-this">
        <LeftPanel index1="active-sec" />

        <div className="dash-con">
          <TopBar
            header="Staff"
            btn={
              <Link
                to="/dashboard/employees/new"
                className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light"
              >
                Invite Employees
              </Link>
            }
          />
          <EmployeeBox employee={this.props.employee}/>
        </div>

        <div className="fixed-action-btn">
          <Link
            to="/settings"
            data-tip="React-tooltip"
            className="btn-floating btn-large blue hoverable waves-effect waves-light"
          >
            <i className="material-icons">add</i>
          </Link>
          <ReactTooltip place="left" type="dark" effect="solid">
            Invite employees
          </ReactTooltip>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ employee }) {
  return { employee };
}

export default connect(mapStateToProps, { fetchEmployees })(Employees);
