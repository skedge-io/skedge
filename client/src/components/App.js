import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './styles.css';

import Header from './Header';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import AppointmentNew from './appointments/AppointmentNew';
import AccountSetUp from './account/AccountSetUp';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
            <div>
              <Header />
              <div className="container">
              </div>
              <Route exact path="/" component={Landing} />
              <PrivateRoute authed={true} redirectTo="/" exact path="/dashboard" component={Dashboard} />
              <PrivateRoute authed={true} redirectTo="/" exact path="/appointments/new" component={AppointmentNew} />
              <PrivateRoute authed={true} redirectTo="/" exact path="/account/setup" component={AccountSetUp} />
            </div>
        </BrowserRouter>
    );
  };
};


export default connect(null, actions)(App);
