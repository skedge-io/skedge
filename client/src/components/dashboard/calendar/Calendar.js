import React, { Component } from "react";
import Calendar from "react-big-calendar";
import ClickOutHandler from 'react-onclickout';
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import { connect } from "react-redux";
import { fetchAppointments, changeDefaultView } from "../../../actions";
import axios from "axios";

import CalendarEventView from "./CalendarEventView";
import Toolbar from "react-big-calendar/lib/Toolbar";

import { Button } from "@blueprintjs/core";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CalendarAlert from './CalendarAlert';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);

let defaultDate = new Date();
defaultDate.setHours(9, 0, 0, 0);

const allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k])


class DashCalendar extends Component {
  constructor(props) {
    super(props)

    this.newAppointmentForm = this.newAppointmentForm.bind(this);
    this.changeDefaultView = this.changeDefaultView.bind(this);
    this.updateAppointments = this.updateAppointments.bind(this);
    this.setEvents = this.setEvents.bind(this);
    this.onSelectSlot = this.onSelectSlot.bind(this);
    this.toggleAlert = this.toggleAlert.bind(this);
    this.setCalApi = this.setCalApi.bind(this);
  }

  state = {
    events: [],
    boolean: false,
    title: "",
    desc: "",
    start: "",
    end: "",
    startTime: "",
    endTime: "",
    style: {},
    lastEvent: {},
    defaultView: "week",
    showAlert: false,
    alertType: "",
    alertMessage: "",
    appointmentUrl: '/api/appointments'
  };

  componentDidMount() {
    axios.get(this.state.appointmentUrl).then(res => {
      let events = [];
      res.data.forEach(appointment => {
        events.push({
          title: appointment.title,
          desc: appointment.desc,
          date: appointment.date,
          start: new Date(appointment.start),
          end: new Date(appointment.end),
          id: appointment._id,
          phone: appointment.phone,
        });
      });
      this.setState({ events: events });
    });



    this.updateAppointments()




  }

  updateAppointments(callback = function() {}) {
    console.log('yeet')
    let events = [];

    axios.get(this.state.appointmentUrl).then(res => {
      console.log(res)
      res.data.forEach(appointment => {
        events.push({
          title: appointment.title,
          desc: appointment.desc,
          start: new Date(appointment.start),
          date: appointment.date,
          clientName: appointment.clientName,
          end: new Date(appointment.end),
          id: appointment._id,
          phone: appointment.phone,
          startTime: appointment.startTime,
          endTime: appointment.endTime,
          employee: appointment.employee
        });
      });

    }).then(() => {
      this.setEvents(events);
      callback = callback.bind(this);
      callback()
      console.log('events: ', this.state.events)
    });


  }

  setEvents(events) {
    console.log('wow')
    this.setState({ events: events });
  }

  changeDefaultView(action) {
    this.setState({defaultView: action})
  }

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };
    updatedEvent.startTime = moment(start).format("hh:mm A");
    updatedEvent.endTime = moment(end).format("hh:mm A");
    updatedEvent.date = moment(start).format("D MMMM, YYYY");
    updatedEvent.clientName = event.clientName;

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });

    let theAptId = updatedEvent.id;
    axios
      .post(`/api/appointment/edit/${theAptId}`, updatedEvent)
      .then(res => {
            this.updateAppointments()
          });

  };


  onEventClick(event) {
    this.updateAppointments(function() {
      this.setState({
        boolean: true,
        id: event.id,
        title: event.title,
        clientName: event.clientName,
        employee: event.employee,
        desc: event.desc,
        date: event.date,
        start: moment(event.start).format("D MMMM, YYYY hh:mm A"),
        end: moment(event.end).format("D MMMM, YYYY hh:mm A"),
        phone: event.phone,
        startTime: event.startTime,
        endTime: event.endTime,
        style: {}
      }
    )}
  )}



  onSelectSlot = event => {
    console.log(event);
    let events = [];
    const newEvent = {
      title: "New Event",
      phone: "",
      startTime: moment(event.start).format("hh:mm A"),
      clientName: "New Contact",
      employee: "",
      endTime: moment(event.end).format("hh:mm A"),
      desc: "",
      date: moment(event.start).format("D MMMM, YYYY"),
      start: "",
      end: ""
    };



    //don't create new events when exiting out of the event view
    if (this.state.boolean) {
      return
    }

    axios.post("/api/appointment/new", newEvent).then(res => {
      axios.get(this.state.appointmentUrl).then(res => {
        console.log(res.data);
        res.data.forEach(appointment => {
          events.push({
            title: appointment.title,
            clientName: appointment.clientName,
            desc: appointment.desc,
            employee: appointment.employee,
            start: new Date(appointment.start),
            end: new Date(appointment.end),
            id: appointment._id,
            phone: appointment.phone
          });
          // window.location = "/appointments/edit/" + appointment._id;
        });
        this.setEvents(events)
        this.updateAppointments()
        this.newAppointmentForm()

      });
    })
  };

  newAppointmentForm() {
    axios.get("/api/appointments").then(res => {
      let events = [];
      res.data.forEach(appointment => {
        events.push({
          title: appointment.title,
          clientName: appointment.clientName,
          employee: appointment.employee,
          desc: appointment.desc,
          start: new Date(appointment.start),
          end: new Date(appointment.end),
          id: appointment._id,
          phone: appointment.phone
        });
      });
      let lastEvent = res.data[res.data.length -1]
      lastEvent.id = lastEvent._id
      this.onEventClick(lastEvent)
      console.log(res.data[res.data.length -1])
      this.setState({ events: events });
      this.updateAppointments()
    })
  }


  renderEventView() {
    switch (this.state.boolean) {
      case null:
        return;
      case false:
        return;
      case true:
        return (
          <CalendarEventView
           date={this.state.date}
           title={this.state.title}
           startTime={this.state.startTime}
           endTime={this.state.endTime}
           clientName={this.state.clientName}
           employeeProp={this.state.employee}
           start={this.state.start}
           end={this.state.end.toString()}
           phone={this.state.phone}
           toggleAlert={this.toggleAlert}
           id={this.state.id}
           desc={this.state.desc}
           updateApps={() => this.updateAppointments()}
           setStateFunc={() => {this.setState({  boolean: false  }); this.updateAppointments()}}
           />
        );
      default:
        return;
    }
  }

  toggleAlert(alertType, alertMessage) {
    window.setTimeout(() => {
      this.setState({showAlert: false})
    }, 3000)
    this.setState({showAlert: !this.state.showAlert, alertType, alertMessage})
  }

  changeUrl = (id) => {
    this.setState({appointmentUrl: '/api/appointments/' + id})
  }

  setCalApi(id) {
    this.changeUrl(id);
    this.updateAppointments();
  }


  render() {
    const setCalApi = this.setCalApi
    return (
      <div className="cal-out">
        {this.state.showAlert ? <CalendarAlert alertType={this.state.alertType} alertMessage={this.state.alertMessage} toggleAlert={this.toggleAlert} /> : ''}

        <div id="calendarInfo" className={this.state.boolean ? 'eventView eventEnter' : ''} style={this.state.style}>
          {this.renderEventView()}
        </div>
        <p align="center" />

        <DnDCalendar
          selectable
          defaultDate={defaultDate}
          scrollToTime={defaultDate}
          defaultView={this.state.defaultView}
          views={allViews}
          longPressThreshold={250}
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={this.onSelectSlot}
          popup
          onCalSwitch={this.setCalApi}
          timeslots={2}
          components={{
            event: Event,
            toolbar: NewToolbar({setCalApi}),
            agenda: {
              event: EventAgenda
            }
          }}
          style={{ height: "99%" }}
        />
      </div>
    );
  }
}


const NewToolbar = ({setCalApi}) => {
  return class CustomToolbar extends Toolbar { 
    state = {
      user: '',
      business: '',
      employees: [],
      showList: false,
      displayName: ''
    }
  
    componentDidMount() {
  
      axios.get('/api/current_user').then((user) => {
        this.setState({user: user.data.name});
      })
  
      axios.get('/api/current_business').then((business) => {
        this.setState({business: business.data.business.name, displayName: business.data.business.name});
      })
  
      axios.get('/api/current_business/employees').then((employees) => {
        this.setState({employees: employees.data});
      })
    }
  
    render() {
  
      return (
        <div className="rbc-toolbar calendar-toolbar">
          <span className="rbc-btn-group">
            <Button
              className="no-shadow hide-on-mobile"
              text={
                // eslint-disable-next-line
                `${this.state.displayName}\'s Calendar`}
              onClick={() => this.setState({showList: !this.state.showList})}
              large="true"
              rightIcon="caret-down"
            />
          </span>
          {this.state.showList ? (
            <ClickOutHandler onClickOut={() => this.setState({showList: !this.state.showList})}>
              <div className="employee-cal-drop-down">
                {this.state.employees.map((emp) => {
                  return (<p key={emp._id} onClick={() => this.switchCalendar(emp._id, emp.name)}>{emp.name}</p>)
                })}
              </div>
              </ClickOutHandler>
            ) : ''
          }
  
          <span className="rbc-btn-group middle mobile-top-cal-btns">
            <button
              className="material-icons mobile-cal-refresh"
              type="button"
              onClick={() => this.navigate("TODAY")}
            >
              refresh
            </button>
            <button
              className="material-icons"
              type="button"
              onClick={() => this.navigate("PREV")}
            >
              chevron_left
            </button>
            {/* <----- calendar date range -----> */}
            <button>
              <span className="rbc-toolbar-label calendar-text-btn">
                {this.props.label}
              </span>
            </button>
            <button
              className="material-icons"
              type="button"
              onClick={() => this.navigate("NEXT")}
            >
              chevron_right
            </button>
          </span>
          <span className="rbc-btn-group">
            <button
              className="calendar-text-btn calendar-view-btn left"
              type="button"
              onClick={this.view.bind(null, "month")}
            >
              Month
            </button>
            <button
              className="calendar-text-btn calendar-view-btn"
              type="button"
              onClick={this.view.bind(null, "week")}
            >
              Week
            </button>
            <button
              className="calendar-text-btn calendar-view-btn right"
              type="button"
              onClick={this.view.bind(null, "agenda")}
            >
              List
            </button>
  
          </span>
        </div>
      );
    }
  
    navigate = action => {
      console.log(action);
  
      this.props.onNavigate(action);
    };
  
    switchCalendar = (action, name) => {
      setCalApi(action);
      this.setState=({displayName: name})
    }
  
   }
  }






function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
}

function EventAgenda({ event }) {
  return (
    <span>
      <em>{event.title}</em> <p>{event.phone}</p>{" "}
      <p>{event.desc}</p>
    </span>
  );
}

function mapStateToProps({ appointments }) {
  return { appointments };
}

export default connect(
  mapStateToProps,
  { fetchAppointments, changeDefaultView }
)(DashCalendar);
