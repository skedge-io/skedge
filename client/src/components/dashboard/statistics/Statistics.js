import React, { Component } from "react";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import SkedgeStats from "./SkedgeStats";
import SkedgeGraphs from './SkedgeGraphs';

import { connect } from "react-redux";
import { fetchAppointments, fetchMonthlyData } from '../../../actions';


import "./styles.scss";

class Statistics extends Component {
  componentDidMount() {
    this.props.fetchAppointments()
    this.props.fetchMonthlyData()
  }

  render() {
    return (
      <div className="row-this">
        <LeftPanel index2="active-sec" />

        <div className="dash-con">
          <TopBar header="Statistics" btn="" />
          <div className="statistics-flex">
            <SkedgeStats apps={this.props.apps} monthly={this.props.monthly}/>
            <SkedgeGraphs apps={this.props.apps} monthly={this.props.monthly}/>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth, apps, monthly }) {
  return { auth, apps, monthly };
}

export default connect(mapStateToProps, { fetchAppointments, fetchMonthlyData })(Statistics);
