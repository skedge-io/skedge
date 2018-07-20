import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { connect } from 'react-redux';
import { fetchAppointments } from '../../../actions';
import axios from 'axios';
import events from './events';


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
      this.setState({events : res.data})
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
      console.log('startDate'); //shows the start time chosen
      console.log('endDate'); //shows the end time chosen
  }

  onEventClick(event) {
    this.setState({ eventView : {boolean: true, title: event.title, desc: event.desc, start: event.start, end: event.end, phone: event.phone,  style: {height: '100vh'}} })
  }


  onSelectSlot = ( event ) => {
    let idList = this.state.events.map((a) => a.id);
        let newId = Math.max(...idList) + 1;
       let hour = {
          id: newId,
          title: 'New Event',
          allDay: event.slots.length == 1,
          start: event.start,
          end: event.end,
        }
        this.setState({
          events: this.state.events.concat([hour])
       });
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
                      <p><b>Start</b>: {this.state.eventView.start} <b><br />End</b>: {this.state.eventView.end}</p>
                      <p><b>Phone</b>: {this.state.eventView.phone}</p>
                      <p><b>Notes</b>: {this.state.eventView.desc}</p>
                    </div>
                    <div className="card-action">
                      <a className="btn-floating waves-effect waves-light blue margin-right"><i className="material-icons">edit</i></a>
                      <a className="btn-floating waves-effect waves-light red margin-right"><i className="material-icons">delete</i></a>
                    </div>
                  </div>
                  <button className="waves-effect waves-light btn red" onClick={() => this.setState({eventView : { style: {height: '0'} }})}>Hide</button>

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
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          onSelectEvent={event => this.onEventClick(event)}
          onSelectSlot={this.onSelectSlot}
          resizable
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
