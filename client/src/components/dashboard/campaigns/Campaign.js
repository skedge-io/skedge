import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import axios from 'axios';

import TopBar from '../TopBar';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import MobileMenu from '../MobileMenu';

import CampaignBox from './CampaignBox';

import './styles.css';

class Campaign extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  componentDidMount() {
    axios.get('/api/current_business').then((res) => {
      this.setState({campaigns : res.data.campaigns})
    })
  }

  renderFields() {
    if (this.state.campaigns) {
      return (
        <div className="cal-container container-campaigns">
          <CampaignBox text={this.state.campaigns[0].text} title="Reminders" when="Hours before appointment"/>
          <CampaignBox text={this.state.campaigns[1].text} title="Reviews" when="Hours after appointment"/>
          <CampaignBox text={this.state.campaigns[2].text} title="Revisits" when="Days after last appointment"/>
          <CampaignBox text={this.state.campaigns[3].text} title="Promotions" when="Hours from now"/>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }

  render() {
      return (

        <div className="row-this">
        <MobileMenu />

        <LeftPanel index3="active-sec"/>


         <div className="dash-con">
           <TopBar header="Campaigns" btn={<Link to="/dashboard/campaigns/new" className="btn-flat right btn-small white-text blue hoverable waves-effect waves-light">New Campaign</Link>}/>
            {this.renderFields()}

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
