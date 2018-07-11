import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'


const Dashboard = () => {



  return (
    <div>
      <h1 align="center">Dashboard</h1>
      <div className="fixed-action-btn">
        <Link to="/appointments/new" data-tip="React-tooltip" className="btn-floating btn-large red hoverable waves-effect waves-light">
          <i className="material-icons">add</i>
        </Link>
        <ReactTooltip place="left" type="dark" effect="solid">Create new appointment</ReactTooltip>
      </div>
    </div>
  );
};

export default Dashboard;
