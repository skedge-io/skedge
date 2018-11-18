//when you click a slot on the calander this will pop up
import React, { Component } from 'react';
import '../../styles.css';




class CalendarEventView extends Component {

  render() {
    return (
      <div>
        <div className="col s12 m6">
          <div className="card darken-1">
            <div className="card-content">
              <span className="card-title">
                {this.props.title}
              </span>
              <p>
                <b>Start</b>: {this.props.start}{" "}
                <b>
                  <br />
                  End
                </b>
                : {this.props.end}
              </p>
              <p>
                <b>Phone</b>: {this.props.phone}
              </p>
              <p>
                <b>Notes</b>: {this.props.desc}
              </p>
            </div>
            <div className="card-action">
              <div className="form-in-row">
                <a
                  href={"/appointments/edit/" + this.props.id}
                  className="btn-floating waves-effect waves-light blue margin-right"
                >
                  <i className="material-icons">edit</i>
                </a>
                <button
                  className="waves-effect waves-light btn red darken-2"
                  onClick={() =>
                    this.setState({ eventView: { style: { height: "0" } } })
                  }
                >
                  Close
                </button>

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
    );
  }
}

export default CalendarEventView;
