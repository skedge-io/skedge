import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import DashCalendar from './Calendar';
import TopBar from './TopBar';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import { connect } from 'react-redux';


class Dashboard extends Component {

  renderAuth() {
   return (
       <div className="row-this">

       <LeftPanel />


        <div className="dash-con">
          <TopBar />
          <div className="cal-container">
              <DashCalendar />
          </div>
        </div>

        <RightPanel />


        <div className="fixed-action-btn">
          <Link to="/appointments/new" data-tip="React-tooltip" className="btn-floating btn-large blue hoverable waves-effect waves-light">
            <i className="material-icons">add</i>
          </Link>
          <ReactTooltip place="left" type="dark" effect="solid">Create new appointment</ReactTooltip>
        </div>
      </div>
    )
  }


  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <div> <center><a className="cfd-cta-2 hoverable waves-effect waves-purple" href="./auth/google">Log In</a></center> </div>
      default:
        return <div>{this.renderAuth()}</div>
    }
  }





  render () {
    return (
      <div>{this.renderContent()}</div>
    );
  };
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
