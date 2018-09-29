import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';



import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';

import ContactList from './ContactList';

import './styles.css';



class Contacts extends Component {





  render() {

    return (
      <div className="row-this">

      <LeftPanel index4="active-sec"/>


       <div className="dash-con">
         <TopBar header="Contacts" />


            <ContactList />





       </div>

       <RightPanel />





       </div>
    )
  }
}

export default Contacts;
