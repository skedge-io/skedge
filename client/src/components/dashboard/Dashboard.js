import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import DashCalendar from "./calendar/Calendar";

import TopBar from "./TopBar";
import LeftPanel from "./LeftPanel";

import { connect } from "react-redux";

class Dashboard extends Component {
  employeeClick() {
    this.setState({ section: "Employees" });
  }

  renderAuth() {
    return (
      <div className="row-this">
        <LeftPanel wambo="active-sec" />

        <div className="dash-con">
          <TopBar
            header="Calendar"
            btn={
              <Link
                to="/appointments/new"
                className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light"
              >
                New Appointment
              </Link>
            }
          />

          <div className="cal-container">
            <DashCalendar />
          </div>
        </div>

        <div className="fixed-action-btn">
          <Link
            to="/appointments/new"
            data-tip="React-tooltip"
            className="btn-floating btn-large blue hoverable waves-effect waves-light"
          >
            <i className="material-icons">add</i>
          </Link>
          <ReactTooltip place="left" type="dark" effect="solid">
            Create new appointment
          </ReactTooltip>
        </div>
      </div>
    );
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <center>
              <a
                className="cfd-cta-2 hoverable waves-effect waves-purple"
                href="./auth/google"
              >
                Log In
              </a>
            </center>
          </div>
        );
      default:
        return <div>{this.renderAuth()}</div>;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
