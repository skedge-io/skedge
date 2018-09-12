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

    this.state = {renderInfo : false}

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
          <CampaignBox text={this.state.campaigns[0].text} active={this.state.campaigns[0].active} camp={this.state.campaigns[0].name} when={this.state.campaigns[0].when} title="Reminders" time="Hours before appointment"/>
          <CampaignBox text={this.state.campaigns[1].text} active={this.state.campaigns[1].active} camp={this.state.campaigns[1].name} when={this.state.campaigns[1].when} title="Reviews" time="Hours after appointment"/>
          <CampaignBox text={this.state.campaigns[2].text} active={this.state.campaigns[2].active} camp={this.state.campaigns[2].name} when={this.state.campaigns[2].when} title="Revisits" time="Days after last appointment"/>
          <CampaignBox text={this.state.campaigns[3].text} active={this.state.campaigns[3].active} camp={this.state.campaigns[3].name} when={this.state.campaigns[3].when} title="Promotions" time="Hours from now"/>


          <div className="key-box">
          <div className="key-top-bar">
            <div>Key</div>
              <ReactTooltip id="key-info" place="top" type="dark" effect="solid">Use these in your campaign messages</ReactTooltip>
              <i data-tip="key-info" data-for='key-info' className="material-icons keyname-info">info</i>
            </div>
            <div className="key-table">

              <div className="key-titles">
                <p className="key-word"><b>*name*</b>:</p>
                <p className="key-word"><b>*employee*</b>:</p>
                <p className="key-word"><b>*business*</b>:</p>
                <p className="key-word"><b>*time*</b>:</p>
              </div>

              <div className="key-descriptions">
                <p className="key-word"> Name of Client</p>
                <p className="key-word">Name of Employee</p>
                <p className="key-word">Name of Business</p>
                <p className="key-word">Time of appointment</p>
              </div>

            </div>
          </div>

        </div>
      )
    } else {
      return <div><img height="100px" src="https://image.ibb.co/j1eKCp/blue_loading.gif" /></div>
    }
  }

  render() {
      return (

        <div className="row-this">

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
