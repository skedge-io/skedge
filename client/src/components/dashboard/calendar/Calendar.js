import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import { connect } from "react-redux";
import { fetchAppointments } from "../../../actions";
import axios from "axios";
import events from "./events";

import { Link } from "react-router-dom";

import CalendarEventView from "./CalendarEventView";
import Toolbar from "react-big-calendar/lib/Toolbar";

import { Button, IconName, Popover, Switch } from "@blueprintjs/core";
import { Input } from 'react-materialize'


import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);

let defaultDate = new Date();
defaultDate.setHours(9, 0, 0, 0);

class DashCalendar extends Component {
  constructor(props) {
    super(props)

    this.newAppointmentForm = this.newAppointmentForm.bind(this);
  }

  state = {
    events: [],
    eventView: {
      boolean: false,
      title: "",
      desc: "",
      start: "",
      end: "",
      startTime: "",
      endTime: "",
      style: {}
    },
    lastEvent: {}
  };

  componentDidMount() {
    axios.get("/api/appointments").then(res => {
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
          desc: appointment.desc
        });
      });
      this.setState({ events: events });
    });







  }

  componentDidUpdate() {
    axios.get("/api/appointments").then(res => {
      let events = [];
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
          desc: appointment.desc,
          startTime: appointment.startTime,
          endTime: appointment.endTime,
          employee: appointment.employee
        });
      });
      this.setState({ events: events });
    });


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
      .then(res => {});
  };

  onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format(
      "YYYY-MM-DDm:ss"
    );
    var endDate = moment(slotInfo.end.toLocaleString()).format(
      "YYYY-MM-DDm:ss"
    );
  }

  onEventClick(event) {
    this.setState({
      eventView: {
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
    });
  }

  onSelectSlot = event => {
    console.log(event);

    const newEvent = {
      title: "New Event",
      phone: "",
      startTime: moment(event.start).format("hh:mm A"),
      clientName: "New Contact",
      employee: "",
      endTime: moment(event.end).format("hh:mm A"),
      desc: "none",
      date: moment(event.start).format("D MMMM, YYYY"),
      start: "",
      end: ""
    };



    //don't create new events when exiting out of the event view
    if (this.state.eventView.boolean) {
      return
    }

    axios.post("/api/appointment/new", newEvent).then(res => {
      axios.get("/api/appointments").then(res => {
        console.log(res.data);
        let events = [];
        res.data.forEach(appointment => {
          events.push({
            title: appointment.title,
            clientName: appointment.clientName,
            desc: appointment.desc,
            start: new Date(appointment.start),
            end: new Date(appointment.end),
            id: appointment._id,
            phone: appointment.phone
          });
          // window.location = "/appointments/edit/" + appointment._id;
        });
        this.setState({ events: events });

      });

        //      this.newAppointmentForm()

    })

    this.newAppointmentForm()


  };

  newAppointmentForm() {

    console.log('new apt form')

    axios.get("/api/appointments").then(res => {
      let events = [];
      res.data.forEach(appointment => {
        events.push({
          title: appointment.title,
          clientName: appointment.clientName,
          desc: appointment.desc,
          start: new Date(appointment.start),
          end: new Date(appointment.end),
          id: appointment._id,
          phone: appointment.phone
        });
        // window.location = "/appointments/edit/" + appointment._id;
      });
      let lastEvent = res.data[res.data.length -1]
      lastEvent.id = lastEvent._id
      this.onEventClick(lastEvent)
      console.log(res.data[res.data.length -1])
      this.setState({ events: events });
    })

    console.log('hheeeerrrreeee')


  }


  renderEventView() {
    switch (this.state.eventView.boolean) {
      case null:
        return;
      case false:
        return;
      case true:
        return (
          <CalendarEventView
           date={this.state.eventView.date}
           title={this.state.eventView.title}
           startTime={this.state.eventView.startTime}
           endTime={this.state.eventView.endTime}
           clientName={this.state.eventView.clientName}
           employee={this.state.eventView.employee}
           start={this.state.eventView.start}
           end={this.state.eventView.end.toString()}
           phone={this.state.eventView.phone}
           id={this.state.eventView.id}
           desc={this.state.eventView.desc}
           setStateFunc={() => this.setState({ eventView: { boolean: false } })}
           />
        );
      default:
        return;
    }
  }

  render() {
    return (
      <div className="cal-out">
        <div id="calendarInfo" className={this.state.eventView.boolean ? 'eventView eventEnter' : ''} style={this.state.eventView.style}>
          {this.renderEventView()}
        </div>
        <p align="center" />

        <DnDCalendar
          selectable
          defaultDate={defaultDate}
          scrollToTime={defaultDate}
          defaultView="week"
          views={"month" | "week"}
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={this.onSelectSlot}
          popup
          timeslots={4}
          components={{
            event: Event,
            toolbar: CustomToolbar,
            agenda: {
              event: EventAgenda
            }
          }}
          style={{ height: "95%" }}
        />
      </div>
    );
  }
}

class CustomToolbar extends Toolbar {
  render() {
    return (
      <div className="rbc-toolbar calendar-toolbar">
        <span className="rbc-btn-group">
          <Button
            className="no-shadow"
            text="Default"
            large="true"
            rightIcon="caret-down"
          />
        </span>
        <span className="rbc-btn-group middle">
          <button
            className="material-icons"
            type="button"
            onClick={() => this.navigate("TODAY")}
          >
            refresh
          </button>
          <button
            class="material-icons"
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
            class="material-icons"
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
            className="calendar-text-btn calendar-view-btn right"
            type="button"
            onClick={this.view.bind(null, "week")}
          >
            Week
          </button>
        </span>
      </div>
    );
  }

  navigate = action => {
    console.log(action);

    this.props.onNavigate(action);
  };
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
      <em style={{ color: "magenta" }}>{event.title}</em> <p>{event.phone}</p>{" "}
      <p>{event.desc}</p>
    </span>
  );
}

function mapStateToProps({ appointments }) {
  return { appointments };
}

export default connect(
  mapStateToProps,
  { fetchAppointments }
)(DashCalendar);
