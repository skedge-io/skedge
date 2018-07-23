import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import TopBar from '../../dashboard/TopBar';
import LeftPanel from '../../dashboard/LeftPanel';
import RightPanel from '../../dashboard/RightPanel';

import { Input } from 'react-materialize'


let theAptId = window.location.href.split('').reverse().join('');
const aptI = theAptId.indexOf('/');

theAptId = theAptId.substring(0, aptI);
theAptId = theAptId.split('').reverse().join('');

const axiosUrl = '/api/appointment/' + theAptId;


class AppointmentEdit extends Component {


  state = {
    appointments: []
  }

  componentDidMount() {
    axios.get(axiosUrl).then((res) => {
      this.setState({ appointments : res.data })
      console.log(res.data);
    })
  }


  render() {
    return (
      <div className="row-this higher">
        <LeftPanel wambo="active-sec" />
        <div className="container formFlex">
          <TopBar header="Edit Appointment" />
          <div className="inside">

            <form method="POST" action={'/api/appointment/edit/' + theAptId}>

              <input type="text" name="customer" value={this.state.appointments.customer}></input>
              <input type="text" name="employee" value={this.state.appointments.employee}></input>
              <input type="text" name="phone" value={this.state.appointments.phone}></input>
              <Input type="date" name="start" value={this.state.appointments.start}></Input>
              <Input type="time" name="startTime" value={this.state.appointments.startTime}></Input>
              <Input type="time" name="endTime" value={this.state.appointments.endTime}></Input>
              <Input type="text" name="desc" value={this.state.appointments.desc}></Input>
              <Link to="/dashboard" className="red btn-flat white-text hoverable waves-effect waves-light">
                Cancel
              </Link>
              <button className="green white-text btn-flat right waves-effect waves-light">
                Edit Appointment
                <i className="material-icons right">event_available</i>
              </button>

            </form>

          </div>

        </div>
        <RightPanel />
      </div>
    );
  }
}

export default AppointmentEdit
