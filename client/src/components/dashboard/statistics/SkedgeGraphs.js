//https://github.com/ankane/react-chartkick

import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAppointments } from "../../../actions";


import axios from 'axios';

import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class SkedgeGraphs extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="graphs-container">
        <p className="statistics-label">Monthly Appointments Over Time</p>
        <LineChart height="500px" width="70vw" download={true} data={{"2018-06": 10, "2018-07": 16, "2018-08": 27, "2018-09": 18, "2018-10": 31, "2018-11": 29, "2018-12": 32, "2019-01": this.props.apps.length}} />
        <br />
        <p>More statistics are currently under construction.</p>
      </div>
    )
  }
}


export default SkedgeGraphs
