import React, { Component } from 'react';

import { Tab, Tabs } from "@blueprintjs/core";

import InviteBox from './InviteBox';
import JoinBox from './JoinBox';

class Settings extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
      <div className="cal-container container-campaigns">
        <Tabs
          id="campaigns-tabs"
          animate="true"
        >
          {/* <----- Business Settings ------> */}
          <Tab
            id="INVITE_TO_BUSINESS"
            title="INVITE TO BUSINESS"
            panel={
              <InviteBox
                apps={this.props.apps}
                auth={this.props.auth}
                business={this.props.business}
              />
            }
            />
            <Tab
              id="JOIN_BUSINESS"
              title="JOIN BUSINESS"
              panel={
                <JoinBox
                  apps={this.props.apps}
                  auth={this.props.auth}
                  business={this.props.business}
                />
              }

          />




          <Tabs.Expander />
        </Tabs>
      </div>
      </div>
    )
  }
}

export default Settings;
