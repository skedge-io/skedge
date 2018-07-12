import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import CalendarEventView from './CalendarEventView';

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles.css';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);


class DashCalendar extends Component {



  state = {
    events: [
      {
        id: 1,
        start: new Date(),
        number: '',
        end: new Date(moment().add(0, "days")),
        title: "Jan <> Joe",
        desc: 'Big conference for important people'
      },
      {
        id: 2,
        start: new Date(moment().add(6, "days")),
        end: new Date(moment().add(6, "days")),
        title: "Rick <> Joe",
        desc: 'Big conference for important people'
      },
      {
        id: 3,
        start: new Date(moment().add(10, "days")),
        end: new Date(moment().add(10, "days")),
        title: "Aleisha <> Joe",
        desc: 'Big conference for important people'
      },
      {
        id: 4,
        start: new Date(moment().add(2, "days")),
        end: new Date(moment().add(2, "days")),
        title: "Maddie <> James",
        desc: 'Big conference for important people'
      }

    ],
    eventView: {
      boolean: false,
      title: '',
      desc: '',
      start: '',
      end: '',
      style: {}
    }
  };

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
    this.setState({ eventView : {boolean: true, title: event.title, desc: event.desc, start: event.start, end: event.end, style: {height: '100%'}} })
  }


  onSelectSlot = ( slotInfo ) => {
    alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
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
            <h1>{this.state.eventView.title}</h1>
            <p>{this.state.eventView.desc}</p>
            <button onClick={() => this.setState({eventView : { style: {height: '0'} }})}>Hide</button>
          </div>
      )
      default:
        return
    }
  }



  render() {
    return (
      <div className="cal-out">
      <div class="eventView" style={this.state.eventView.style}>
        {this.renderEventView()}
      </div>

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
    <em style={{ color: 'magenta'}}>{event.title}</em>   <p>{ event.desc }</p>
  </span>
}


export default DashCalendar;
