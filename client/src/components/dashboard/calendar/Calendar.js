import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { connect } from 'react-redux';
import { fetchAppointments } from '../../../actions';
import axios from 'axios';
import events from './events';

import { Link } from 'react-router-dom';

import CalendarEventView from './CalendarEventView';

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../styles.css';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);






class DashCalendar extends Component {

  state = {
    events: [],
    eventView: {
      boolean: false,
      title: '',
      desc: '',
      start: '',
      end: '',
      style: {}
    }
  };

  componentDidMount() {
    axios.get('/api/appointments').then((res) => {
      let events = []
      res.data.forEach((appointment) => {
        events.push({
          title : appointment.title,
          desc : appointment.desc,
          start : new Date(appointment.start),
          end : new Date(appointment.end),
          id : appointment._id,
          phone : appointment.phone,
          desc : appointment.desc
        });
      })
      this.setState({events : events})
    })
  }


  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    const { events } = this.state

    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })
  };



  onSlotChange(slotInfo) {
      var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
      var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
  }

  onEventClick(event) {
    console.log(event);
    this.setState({
      eventView : {
        boolean: true,
        id: event.id,
        title: event.title,
        desc: event.desc,
        start: moment(event.start).format("D MMMM, YYYY hh:mm A"),
        end: moment(event.end).format("D MMMM, YYYY hh:mm A"),
        phone: event.phone,
        style: {height: '100vh'}
      }
    })
  }


  onSelectSlot = ( event ) => {
    console.log(event);

     const newEvent = {
       "title" : "New Event",
       "phone" : "",
       "startTime" : moment(event.start).format("hh:mm A"),
       "name": '',
       "employee": '',
       "endTime" : moment(event.end).format("hh:mm A"),
       "desc" : "none",
       "date" : moment(event.start).format("D MMMM, YYYY"),
       "start" : "",
       "end" : "",
       "desc": ''
     }

     axios.post('/api/appointment/new', newEvent).then(res => {
       axios.get('/api/appointments').then((res) => {
         console.log(res.data);
         let events = []
         res.data.forEach((appointment) => {
           events.push({
             title : appointment.title,
             desc : appointment.desc,
             start : new Date(appointment.start),
             end : new Date(appointment.end),
             id : appointment._id,
             phone : appointment.phone,
             desc : appointment.desc
           });
         })
         this.setState({events : events})
       })
     })
  }


  renderEventView() {
    switch(this.state.eventView.boolean) {
      case null:
        return;
      case false:
        return
      case true:
        return (
          <div>
            <div className="col s12 m6">
              <div className="card darken-1">
                <div className="card-content">
                  <span className="card-title">{this.state.eventView.title}</span>
                  <p><b>Start</b>: {this.state.eventView.start} <b><br />End</b>: {this.state.eventView.end.toString()}</p>
                  <p><b>Phone</b>: {this.state.eventView.phone}</p>
                  <p><b>Notes</b>: {this.state.eventView.desc}</p>
                </div>
                <div className="card-action">
                  <div className="form-in-row">
                    <a href={"/appointments/edit/" + this.state.eventView.id} className="btn-floating waves-effect waves-light blue margin-right"><i className="material-icons">edit</i></a>
                    <form method="POST" action={'/api/appointment/delete/' + this.state.eventView.id}>
                      <button type="submit" className="btn-floating waves-effect waves-light red margin-right"><i className="material-icons">delete</i></button>
                    </form>
                  </div>
                </div>
              </div>
              <button className="waves-effect waves-light btn blue darken-2" onClick={() => this.setState({eventView : { style: {height: '0'} }})}>Back to Calendar</button>
            </div>
          </div>
      )
      default:
        return
    }
  }



  render() {


    return (
      <div className="cal-out">
        <div className="eventView" style={this.state.eventView.style}>
          {this.renderEventView()}
        </div>
        <p align="center"></p>

        <DnDCalendar
          selectable
          onEventResize={this.onEventResize}
          resizable
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          scrollToTime
          onEventDrop={this.onEventDrop}
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={this.onSelectSlot}
          popup
          components={{
                       event: Event,
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




function Event({ event }) {
    return (
        <span>
      <strong>
      {event.title}
      </strong>
            { event.desc && (':  ' + event.desc)}
    </span>
    )
}

function EventAgenda({ event }) {
    return <span>
    <em style={{ color: 'magenta'}}>{event.title}</em> <p>{event.phone}</p>  <p>{ event.desc }</p>

  </span>
}

function mapStateToProps({ appointments }) {
  return { appointments };
}


export default connect(mapStateToProps, {  fetchAppointments })(DashCalendar);
