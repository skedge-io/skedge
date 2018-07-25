import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';



import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import MobileMenu from '../MobileMenu';


class Campaign extends Component {



  render() {

    return (
      <div className="row-this">
      <MobileMenu />

      <LeftPanel index3="active-sec"/>


       <div className="dash-con">
         <TopBar header="Campaigns" btn={<Link to="/dashboard/campaigns/new" className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light">New Campaign</Link>}/>

         <div className="cal-container">
          <h1>Text Campaigns</h1>
         </div>

       </div>

       <RightPanel />


       <div className="fixed-action-btn">
         <Link to="/dashboard/campaigns/new" data-tip="React-tooltip" className="btn-floating btn-large blue hoverable waves-effect waves-light">
           <i className="material-icons">add</i>
         </Link>
         <ReactTooltip place="left" type="dark" effect="solid">New Campaign</ReactTooltip>
       </div>



       </div>
    )
  }
}

export default Campaign;
