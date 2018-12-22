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

    this.state = { events: [] };
  }


  componentDidMount() {
    axios.get("/api/appointments").then(res => {
      let events = [];
      res.data.forEach(appointment => {
        events.push({
          title: appointment.title,
          desc: appointment.desc,
          start: new Date(appointment.start),
          end: new Date(appointment.end),
          id: appointment._id,
          phone: appointment.phone
        });
      });
      this.setState({ events: events });
    });
  }

  render() {
    return (
      <div className="graphs-container">
        <p className="statistics-label">Monthly Appointments Over Time</p>
        <LineChart height="500px" width="70vw" download={true} data={{"2018-06-01": 10, "2018-07-01": 16, "2018-08-01": 27, "2018-09-01": 18, "2018-10-01": 31, "2018-11-1": 29, "2018-12-01": this.state.events.length}} />
        <br />
        <p>More statistics are currently under construction.</p>
      </div>
    )
  }
}


function mapStateToProps({ appointments, auth }) {
  return { appointments, auth };
}

export default connect(
  mapStateToProps,
  { fetchAppointments }
)(SkedgeGraphs);
