import React, { Component } from "react";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import SkedgeStats from "./SkedgeStats";

import "./styles.scss";

class Statistics extends Component {
  render() {
    return (
      <div className="row-this">
        <LeftPanel index2="active-sec" />

        <div className="dash-con">
          <TopBar header="Statistics" btn="" />

          <SkedgeStats />
        </div>
      </div>
    );
  }
}

export default Statistics;
