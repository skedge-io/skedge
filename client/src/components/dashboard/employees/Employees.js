import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';



import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';


class Employees extends Component {



  render() {

    return (
      <div className="row-this">

      <LeftPanel index1="active-sec"/>


       <div className="dash-con">
         <TopBar header="Employees" btn={<Link to="/dashboard/employees/new" className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light">Invite Employees</Link>}/>

         <div className="cal-container">
          <h1>Employees</h1>
         </div>

       </div>

       <RightPanel />


       <div className="fixed-action-btn">
         <Link to="/dashboard/employees/new" data-tip="React-tooltip" className="btn-floating btn-large blue hoverable waves-effect waves-light">
           <i className="material-icons">add</i>
         </Link>
         <ReactTooltip place="left" type="dark" effect="solid">Invite employees</ReactTooltip>
       </div>



       </div>
    )
  }
}

export default Employees;
