//when you click a slot on the calander this will pop up
import React, { Component } from 'react';
import ClickOutHandler from 'react-onclickout';


import '../../styles.css';




class CalendarEventView extends Component {
  constructor(props) {
    super(props)



    this.state = {
      title: this.props.title,
      start: this.props.start,
      end: this.props.end,
      phone: this.props.phone,
      notes: this.props.desc
    };


    this.handleTitle = this.handleTitle.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
  }


  onClickOut() {
    // return this.props.setState
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
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

  handleNotes(event) {
    this.setState({ notes: event.target.value });
  }

  renderButton() {
    if (this.props.title != this.state.title || this.props.start != this.state.start || this.props.end != this.state.end || this.props.phone != this.state.phone || this.props.desc != this.state.notes) {
      return (
        <button
          className="waves-effect waves-light btn green darken-2"
          onClick={this.props.setState}
        >
          Update
        </button>
      )
    }
    return (
      <button
        className="waves-effect waves-light btn red darken-2"
        onClick={this.props.setState}
      >
        Close
      </button>

    )
  }

  render() {
    return (
      <ClickOutHandler onClickOut={this.props.setState}>
        <div className="eventViewer">
          <div className="col s12 m6">
            <div className="card darken-1">
              <div className="card-content">
                <span className="card-title">
                  Edit Appointment
                </span>
                    <label>Title</label>
                    <input className="card-input-imp" value={this.state.title} onChange={this.handleTitle} />
                    <label>Start</label>
                    <input className="card-input-imp" value={this.state.start + " "} onChange={this.handleStart} />
                    <label>End</label>
                    <input className="card-input-imp" value={this.state.end} onChange={this.handleEnd}/>
                    <label>Phone</label>
                    <input className="card-input-imp" value={this.state.phone} onChange={this.handlePhone}/>
                    <label>Notes</label>
                    <input className="card-input-imp" value={this.state.notes} onChange={this.handleNotes}/>
              </div>
              <div className="card-action">
                <div className="form-in-row">
                  <a
                    href={"/appointments/edit/" + this.props.id}
                    className="btn-floating waves-effect waves-light blue margin-right"
                  >
                    <i className="material-icons">edit</i>
                  </a>


                  {this.renderButton()}


                  <form
                    method="POST"
                    action={
                      "/api/appointment/delete/" + this.props.id
                    }
                  >
                    <button
                      type="submit"
                      className="btn-floating waves-effect waves-light red margin-right"
                    >
                      <i className="material-icons">delete</i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickOutHandler>
    );
  }
}

export default CalendarEventView;
