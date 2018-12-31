import React, { Component } from "react";

import TopBar from "../TopBar";
import LeftPanel from "../LeftPanel";

import SkedgeStats from "./SkedgeStats";
import SkedgeGraphs from './SkedgeGraphs';

import { connect } from "react-redux";
import { fetchAppointments } from '../../../actions';


import "./styles.scss";

class Statistics extends Component {
  componentDidMount() {
    this.props.fetchAppointments()
  }

  render() {
    return (
      <div className="row-this">
        <LeftPanel index2="active-sec" />

        <div className="dash-con">
          <TopBar header="Statistics" btn="" />
          <div className="statistics-flex">
            <SkedgeStats apps={this.props.apps}/>
            <SkedgeGraphs apps={this.props.apps}/>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth, apps }) {
  return { auth, apps };
}

export default connect(mapStateToProps, { fetchAppointments })(Statistics);
