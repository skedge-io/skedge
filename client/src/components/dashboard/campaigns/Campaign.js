import React, { Component } from "react";

import axios from "axios";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";
import { Tab, Tabs } from "@blueprintjs/core";

import CampaignBox from "./CampaignBox";
import Tags from "./Tags";

import "./styles.scss";

class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderInfo: false
    };
  }

  componentDidMount() {
    axios.get("/api/current_business").then(res => {
      this.setState({ campaigns: res.data.business.campaigns });
    });
  }

  renderFields() {
    if (this.state.campaigns) {
      return (
        <div className="cal-container container-campaigns">
          <Tabs
            id="campaigns-tabs"
            onChange={this.handleNavbarTabChange}
            selectedTabId={this.state.navbarTabId}
            animate="true"
          >
            {/* <----- Reminders ------> */}
            <Tab
              id="reminders"
              title="REMINDERS"
              panel={
                <CampaignBox
                  text={this.state.campaigns[0].text}
                  active={this.state.campaigns[0].active}
                  camp={this.state.campaigns[0].name}
                  when={this.state.campaigns[0].when}
                  title="Reminders"
                  time="Hours before appointment"
                  toolTipMsg="Send a text reminder to help prevent no-shows"
                />
              }
            />

            {/* <----- Reviews ------> */}
            <Tab
              id="reviews"
              title="REVIEWS"
              panel={
                <CampaignBox
                  text={this.state.campaigns[1].text}
                  active={this.state.campaigns[1].active}
                  camp={this.state.campaigns[1].name}
                  when={this.state.campaigns[1].when}
                  title="Reviews"
                  time="Hours after appointment"
                  toolTipMsg="Send a text to encourage your clients to leave a review"
                />
              }
            />

            {/* <----- Revisits ------> */}
            <Tab
              id="revisits"
              title="REVISITS"
              panel={
                <CampaignBox
                  text={this.state.campaigns[2].text}
                  active={this.state.campaigns[2].active}
                  camp={this.state.campaigns[2].name}
                  when={this.state.campaigns[2].when}
                  title="Revisits"
                  time="Days after last appointment"
                  toolTipMsg="Send a text to get clients back who haven't scheduled in a speccified time period"
                />
              }
            />

            {/* <----- Promotions ------> */}
            <Tab
              id="promotions"
              title="PROMOTIONS"
              panel={
                <CampaignBox
                  text={this.state.campaigns[3].text}
                  active={this.state.campaigns[3].active}
                  camp={this.state.campaigns[3].name}
                  when={this.state.campaigns[3].when}
                  title="Promotions"
                  time="Hours from now"
                  toolTipMsg="Send a general promotional text"
                />
              }
            />
            <Tabs.Expander />
          </Tabs>
        </div>
      );
    } else {
      return <div className="campaign-loading">Loading</div>;
    }
  }

  render() {
    return (
      <div className="row-this">
        <LeftPanel index3="active-sec" />

        <div className="dash-con">
          <TopBar className="" header="Campaigns" />
          <div className="campaign-view-container">
            {this.renderFields()}
            {this.state.campaigns ? <Tags /> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default Campaign;
