import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './styles.css';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
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
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/appointments/new" component={AppointmentNew} />
              <Route exact path="/account/setup" component={AccountSetUp} />
            </div>
        </BrowserRouter>
    );
  };
};


export default connect(null, actions)(App);
