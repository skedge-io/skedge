import React, { Component } from "react";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import Settings from "./Settings";

import { connect } from "react-redux";
import { fetchAppointments, fetchUser, fetchBusiness } from '../../../actions';


import "./styles.scss";

class SettingsContainer extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchAppointments();
    this.props.fetchBusiness();
  }

  render() {
    return (
      <div className="row-this">
        <LeftPanel />
        <div className="dash-con">
          <TopBar header="Settings" btn="" />
          <div className="settings-container">
            <Settings apps={this.props.apps} auth={this.props.auth} business={this.props.business}/>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth, apps, business }) {
  return { auth, apps, business };
}

export default connect(mapStateToProps, { fetchAppointments, fetchUser, fetchBusiness })(SettingsContainer);
