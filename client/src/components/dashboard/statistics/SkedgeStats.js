import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppointments } from '../../../actions';


import axios from 'axios';


class SkedgeStats extends Component {
  constructor(props) {
    super(props)

    this.state = {events: [], boo: 'yes'}
  }

  componentDidMount() {
    axios.get('/api/appointments').then((res) => {
      let events = []
      res.data.forEach((appointment) => {
        console.log(appointment)
        events.push({
          title : appointment.title,
          desc : appointment.desc,
          start : new Date(appointment.start),
          end : new Date(appointment.end),
          id : appointment._id,
          phone : appointment.phone,
        });
      })
      this.setState({events : events})
    })
  }


  render() {
    return (
      <div className="stats-page">

        <div className="stats-box">
          <div className="stat-counter">{this.state.events.length}</div>
          <div className="bottom-stats">Appointments this month</div>
        </div>

        <div className="stats-box">
          <div className="stat-counter">76</div>
          <div className="bottom-stats">Text Messages Sent</div>
        </div>

        <div className="stats-box">
          <div className="stat-counter">4</div>
          <div className="bottom-stats">Repeat Business (3 month period)</div>
        </div>


      </div>
    )
  }
}

function mapStateToProps({ appointments, auth }) {
  return { appointments, auth };
}


export default connect(mapStateToProps, {  fetchAppointments })(SkedgeStats);
