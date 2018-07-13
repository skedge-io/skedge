//when you click a slot on the calander this will pop up
import React, { Component } from 'react';
import '../styles.css';




class CalendarEventView extends Component {

  render() {
    return (
      <div>
        <h1>{this.state.eventView.title}</h1>
        <p>{this.state.eventView.desc}</p>
        <button className="waves-effect waves-light btn red" onClick={() => this.setState({eventView : { style: {height: '0'} }})}>Hide</button>
      </div>
    );
  }
}

export default CalendarEventView;
