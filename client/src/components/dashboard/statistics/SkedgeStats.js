import React, { Component } from "react";

class SkedgeStats extends Component {

  render() {
    return (
      <div className="stats-page">
        <div className="stats-box">
          <div className="title-stats">Total Appointments</div>
          <div className="stat-counter">{this.props.apps.length}</div>
          <div className="bottom-stats">All Time</div>
        </div>

        <div className="stats-box">
          <div className="title-stats">Text Messages Sent</div>
          <div className="stat-counter">76</div>
          <div className="bottom-stats" />
        </div>

        <div className="stats-box">
          <div className="title-stats">Repeat Business</div>
          <div className="stat-counter">4</div>
          <div className="bottom-stats">3 month period</div>
        </div>
      </div>
    );
  }
}

export default SkedgeStats
