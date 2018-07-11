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
        start: new Date(),
        end: new Date(moment().add(0, "days")),
        title: "Jan <> Joe"
      },
      {
        start: new Date(moment().add(6, "days")),
        end: new Date(moment().add(6, "days")),
        title: "Rick <> Joe"
      },
      {
        start: new Date(moment().add(10, "days")),
        end: new Date(moment().add(10, "days")),
        title: "Aleisha <> Joe"
      },
      {
        start: new Date(moment().add(2, "days")),
        end: new Date(moment().add(2, "days")),
        title: "Maddie <> James"
      }

    ]
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

  onSelectEvent = ( event ) => {
    this.setState.eventTitle = event.title;
    return alert(event.title)
  }

  onSelectSlot = ( slotInfo ) => {
    alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
        )
  }

  render() {
    return (
      <div className="cal-out">
        <DnDCalendar
          selectable
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          onSelectEvent={this.onSelectEvent}
          onSelectSlot={this.onSelectSlot}
          resizable
          popup
          style={{ height: "95%" }}
        />
      </div>
    );
  }
}

export default DashCalendar;
