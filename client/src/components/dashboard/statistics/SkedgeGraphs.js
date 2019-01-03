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
        <LineChart height="500px" width="70vw" download={true} data={this.props.monthly} />
        <br />
        <p>More statistics are currently under construction.</p>
        {console.log(this.props.apps)}
      </div>
    )
  }
}


export default SkedgeGraphs
