import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchAppointments, fetchUser, fetchBusiness } from '../../../actions';


import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import UpgradeAccount from "./UpgradeAccount";



import "./styles.scss";

class UpgradeAccountContainer extends Component {
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
          <TopBar header="Upgrade Account" btn="" />
          <div className="settings-container">
            <UpgradeAccount apps={this.props.apps} auth={this.props.auth} business={this.props.business} fetchUser={this.props.fetchUser}/>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth, apps, business }) {
  return { auth, apps, business };
}

export default connect(mapStateToProps, { fetchAppointments, fetchUser, fetchBusiness })(UpgradeAccountContainer);
