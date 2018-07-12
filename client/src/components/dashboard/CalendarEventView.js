//when you click a slot on the calander this will pop up
import React, { Component } from 'react';
import '../styles.css';




class CalendarEventView extends Component {

  render() {
    return (
      <div>
        <h1>title: {this.state.title}</h1>
      </div>
    );
  }
}

export default CalendarEventView;
