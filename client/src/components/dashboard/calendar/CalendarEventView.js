//when you click a slot on the calander this will pop up
import React, { Component } from 'react';
import ClickOutHandler from 'react-onclickout';
import axios from 'axios';

import { connect } from "react-redux";
import { fetchEmployees } from '../../../actions';


import '../../styles.css';


class CalendarEventView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clientName: this.props.clientName,
      employee: this.props.employeeProp,
      startTime: this.props.startTime,
      endTime: this.props.endTime,
      phone: this.props.phone,
      desc: this.props.desc,
      date: this.props.date,
      start: this.props.start,
      end: this.props.end,
      showEmployees: false
    };


    this.handleClientName = this.handleClientName.bind(this);
    this.handleEmployee = this.handleEmployee.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleDesc = this.handleDesc.bind(this);

    this.updateAppointment = this.updateAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.renderEmployees = this.renderEmployees.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmployees()
  }


  handleClientName(event) {
    this.setState({ clientName: event.target.value });
  }

  handleEmployee(event) {

    let newEmp = event.target.value;
    console.log(newEmp)

    this.setState({ employee: newEmp });
    console.log(this.state)
  }

  handleStartTime(event) {
    this.setState({ startTime: event.target.value });
  }

  handleEndTime(event) {
    this.setState({ endTime: event.target.value });
  }


  handleStart(event) {
    this.setState({ start: event.target.value });
  }

  handleEnd(event) {
    this.setState({ end: event.target.value });
  }

  handlePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleDesc(event) {
    this.setState({ desc: event.target.value });
  }

  renderButton() {
    if (this.props.clientName !== this.state.clientName || this.props.employeeProp !== this.state.employee || this.props.startTime !== this.state.startTime  || this.props.endTime !== this.state.endTime || this.props.phone !== this.state.phone || this.props.desc !== this.state.desc) {
      return (
        <button
          className="waves-effect waves-light btn green darken-2"
          onClick={this.updateAppointment}
        >
          Update
        </button>
      )
    }
    return (
      <button
        className="waves-effect waves-light btn red darken-2"
        onClick={this.props.setStateFunc}
      >
        Close
      </button>

    )
  }


  updateAppointment = () => {

    let appointment = this.state;

    axios.post('/api/appointment/edit/' + this.props.id, appointment).then(res => {
    }).catch((err) => {
      console.log(err);
    })
    this.props.updateApps()
    this.props.setStateFunc()


  }

  deleteAppointment = () => {

    axios.post('/api/appointment/delete/' + this.props.id).then(res => {
      console.log('deleted');
    })

    this.props.setStateFunc()
    this.props.updateApps()

  }

  renderEmployees() {
    this.props.employee.map((data, index) => (
      <option key={index} value={data.name}>{data.name}</option>
    ))
  }


  render() {
    return (
      <ClickOutHandler onClickOut={this.props.setStateFunc}>
        <div className="eventViewer">
          <div className="col s12 m6">
            <div className="card darken-1">
              <div className="card-content edit-form">
                <span className="card-title">
                  Edit Appointment
                </span>

                <label>Client Name</label>
                <input className="card-input-imp" value={this.state.clientName} placeholder="John Smith" onChange={this.handleClientName} />

                <label>Employee Name</label>
                <div onClick={() => this.setState({showEmployees: !this.state.showEmployees})} className="card-input-imp select-employee-form">{this.state.employee ? this.state.employee : 'Select Employee'}</div>
                  { this.state.showEmployees ? (
                    <ClickOutHandler onClickOut={() => this.setState({showEmployees: !this.state.showEmployees})}>
                      <div className="employee-cal-drop-down on-edit">
                        {this.props.employee.map((data, index) => (
                          <p onClick={() => this.setState({employee: data.name, showEmployees: !this.state.showEmployees})}>{data.name}</p>
                        ))}
                      </div>
                    </ClickOutHandler>
                  ) : '' }
                    

                <label>Start Time</label>
                <input className="card-input-imp" value={this.state.startTime} onChange={this.handleStartTime} />
                <label>End Time</label>
                <input className="card-input-imp" value={this.state.endTime} onChange={this.handleEndTime}/>
                <label>Phone</label>
                <input className="card-input-imp" value={this.state.phone} placeholder="1234567890" onChange={this.handlePhone}/>
                <label>desc</label>
                <input className="card-input-imp" value={this.state.desc} placeholder="Dye hair red" onChange={this.handleDesc}/>

              </div>
              <div className="card-action">
                <div className="form-in-row">
                  <button
                    onClick={this.updateAppointment}
                    className="btn-floating waves-effect waves-light blue margin-right"
                  >
                    <i className="material-icons">edit</i>
                  </button>


                  {this.renderButton()}


                  <button
                    className="btn-floating waves-effect waves-light red margin-right"
                    onClick={this.deleteAppointment}
                  >
                    <i className="material-icons">delete</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickOutHandler>
    );
  }
}

function mapStateToProps({ employee }) {
  return { employee };
}

export default connect(mapStateToProps, { fetchEmployees })(CalendarEventView);
