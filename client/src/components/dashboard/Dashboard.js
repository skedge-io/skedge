import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import DashCalendar from './Calendar';

const Dashboard = () => {

  return (
    <div>
      <div className="dash-con">
        <h4 align="center">Dashboard</h4>

        <div className="cal-container">
          <DashCalendar />
        </div>
      </div>

      <div className="fixed-action-btn">
        <Link to="/appointments/new" data-tip="React-tooltip" className="btn-floating btn-large blue hoverable waves-effect waves-light">
          <i className="material-icons">add</i>
        </Link>
        <ReactTooltip place="left" type="dark" effect="solid">Create new appointment</ReactTooltip>
      </div>
    </div>
  );
};

export default Dashboard;
