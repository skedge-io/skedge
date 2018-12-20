import React, { Component } from "react";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import SkedgeStats from "./SkedgeStats";
import SkedgeGraphs from './SkedgeGraphs';

import "./styles.scss";

class Statistics extends Component {
  render() {
    return (
      <div className="row-this">
        <LeftPanel index2="active-sec" />

        <div className="dash-con">
          <TopBar header="Statistics" btn="" />
          <div className="statistics-flex">
            <SkedgeStats />
            <SkedgeGraphs />
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
