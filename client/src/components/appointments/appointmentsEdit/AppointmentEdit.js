import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import TopBar from '../../dashboard/TopBar';
import LeftPanel from '../../dashboard/LeftPanel';
import RightPanel from '../../dashboard/RightPanel';


class AppointmentEdit extends Component {

  state = {
    appointments: []
  }

  componentDidMount() {
    axios.get('/api/appointments').then((res) => {
      this.setState({ appointments : res.data })
    })
  }


  render() {
    return (
      <div className="row-this higher">
        <LeftPanel wambo="active-sec" />
        <div className="container formFlex">
          <TopBar header="Edit Appointment" />
          <div className="inside">

            <form method="POST" action={'/api/appointment/edit/' + this.state.appointments.id}>
              <input></input>
              <input></input>
              <input></input>
              <input></input>
              <input></input>
              <input></input>
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
