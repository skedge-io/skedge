import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';



import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import MobileMenu from '../MobileMenu';


class Contacts extends Component {



  render() {

    return (
      <div className="row-this">
      <MobileMenu />

      <LeftPanel index4="active-sec"/>


       <div className="dash-con">
         <TopBar header="Contacts" btn={<Link to="/dashboard/contacts/new" className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light">New Contact</Link>}/>

         <div className="cal-container">
          <h1>Contacts</h1>
         </div>

       </div>

       <RightPanel />


       <div className="fixed-action-btn">
         <Link to="/dashboard/contacts/new" data-tip="React-tooltip" className="btn-floating btn-large blue hoverable waves-effect waves-light">
           <i className="material-icons">add</i>
         </Link>
         <ReactTooltip place="left" type="dark" effect="solid">New Contact</ReactTooltip>
       </div>



       </div>
    )
  }
}

export default Contacts;
