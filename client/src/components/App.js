import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";


import './react-transitions.css';

import "./styles.scss";

import Landing from "./landing/Landing";
import Team from "./landing/Team";
import Features from "./landing/Features"

import Dashboard from "./dashboard/Dashboard";
import AppointmentNew from "./appointments/AppointmentNew";
import AppointmentEdit from "./appointments/appointmentsEdit/AppointmentEdit";
import AccountSetUp from "./account/AccountSetUp";

import Employees from "./dashboard/employees/Employees";
import Statistics from "./dashboard/statistics/Statistics";
import Campaign from "./dashboard/campaigns/Campaign";
import Contacts from "./dashboard/contacts/Contacts";
import ContactEdit from "./dashboard/contacts/ContactsEdit";
import Login from './landing/Login';


import SettingsContainer from "./dashboard/settings/SettingsContainer";
import UpgradeAccountContainer from "./dashboard/upgrade/UpgradeAccountContainer";


import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchBusiness()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="bg transition-container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/features" component={Features} />

            <div className="container" />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/appointments/new" component={AppointmentNew} />
            <Route path="/appointments/edit/" component={AppointmentEdit} />
            <Route exact path="/dashboard/employees" component={Employees} />
            <Route exact path="/dashboard/statistics" component={Statistics} />
            <Route exact path="/dashboard/campaigns" component={Campaign} />
            <Route exact path="/dashboard/contacts" component={Contacts} />
            <Route exact path="/account/setup" component={AccountSetUp} />
            <Route path="/contacts/edit/" component={ContactEdit} />


            <Route exact path="/settings" component={SettingsContainer} />
            <Route exact path="/upgrade" component={UpgradeAccountContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth, apps, business }) {
  return { auth, apps, business };
}

export default connect(
  mapStateToProps,
  actions
)(App);

// export default connect(null, actions)(App);
