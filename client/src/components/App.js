import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import { connect } from 'react-redux';
import * as actions from '../actions';

import axios from 'axios';

import './styles.css';

import Header from './Header';
import Landing from './landing/Landing';
import Dashboard from './dashboard/Dashboard';
import AppointmentNew from './appointments/AppointmentNew';
import AccountSetUp from './account/AccountSetUp';


class App extends Component {

  state = {
    auth : ''
  }

  componentDidMount() {
    this.props.fetchUser();

    axios.get('/api/current_user').then((res) => {
      if (res.data = null) {
        this.setState({auth: false})
      }
      this.setState({auth : true})
    })


  }

  render() {
    return (
        <BrowserRouter>
            <div>
              <Header />
              <div className="container">
              </div>
              <Route exact path="/" component={Landing} />
              <PrivateRoute authed={this.state.auth} redirectTo="/" exact path="/dashboard" component={Dashboard} />
              <PrivateRoute authed={this.state.auth} redirectTo="/" exact path="/appointments/new" component={AppointmentNew} />
              <PrivateRoute authed={this.state.auth} redirectTo="/" exact path="/account/setup" component={AccountSetUp} />
            </div>
        </BrowserRouter>
    );
  };
};




export default connect(null, actions)(App);
