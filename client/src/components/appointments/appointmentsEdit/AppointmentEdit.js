import React, { Component } from 'react';
import axios from 'axios';

import { reduxForm } from 'redux-form';


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

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div className="row-this higher">
        <LeftPanel wambo="active-sec" />

        <div className="container formFlex">
        <TopBar style={{paddingTop: '1.5rem', paddingBottom: '1.5rem'}} header="Edit Appointment" />

          <div className="inside">

            <form method="POST" action={'/api/appointment/edit/' + theAptId}>
              <input type="text" placeholder="Client Name" name="clientName" onChange={(event) => {this.setState({appointments: {clientName: event.target.value}})}} value={this.state.appointments.clientName}></input>
              <input type="text" placeholder="Employee Name" name="employee" onChange={(event) => {this.setState({appointments: {employee: event.target.value}})}} value={this.state.appointments.employee}></input>
              <input type="text" name="phone" placeholder="Customer Phone Number" onChange={(event) => {this.setState({appointments: {phone: event.target.value}})}} value={this.state.appointments.phone}></input>
              <Input type="date" name="date" placeholder="Date" onChange={(event) => {this.setState({appointments: {start: event.target.value}})}} value={this.state.appointments.date}></Input>
              <Input type="time" name="startTime" placeholder="Start Time" onChange={(event) => {this.setState({appointments: {startTime: event.target.value}})}} value={this.state.appointments.startTime}></Input>
              <Input type="time" name="endTime" placeholder="End Time" onChange={(event) => {this.setState({appointments: {endTime: event.target.value}})}} value={this.state.appointments.endTime}></Input>
              <Input type="text" name="desc" placeholder="Additional Notes" onChange={(event) => {this.setState({appointments: {desc: event.target.value}})}} value={this.state.appointments.desc}></Input>
              <Link to="/dashboard" className="red btn-flat white-text hoverable waves-effect waves-light">
                Cancel
              </Link>
              <button type="submit" className="green white-text btn-flat right waves-effect waves-light">
                Save Appointment
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
