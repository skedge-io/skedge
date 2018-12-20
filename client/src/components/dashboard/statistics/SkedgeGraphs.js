//https://github.com/ankane/react-chartkick

import React, { Component } from 'react';

import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class SkedgeGraphs extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="graphs-container">
        <p className="statistics-label">Monthly Appointments Over Time</p>
        <LineChart height="500px" width="70vw" download={true} data={{"2018-06-01": 10, "2018-07-01": 16, "2018-08-01": 27, "2018-09-01": 18, "2018-10-01": 31, "2018-11-1": 29, "2018-12-01": 36}} />
        <br />
        <p>More statistics are currently under construction.</p>
      </div>
    )
  }
}

export default SkedgeGraphs;
