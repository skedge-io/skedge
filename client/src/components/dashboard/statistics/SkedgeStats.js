import React, { Component } from 'react';

class SkedgeStats extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  compponentDidMount() {

  }


  render() {
    return (
      <div className="stats-page">

        <div className="stats-box">
          <div className="stat-counter">14</div>
          <div className="bottom-stats">Appointments this month</div>
        </div>

        <div className="stats-box">
          <div className="stat-counter">76</div>
          <div className="bottom-stats">Text Messages Sent</div>
        </div>

        <div className="stats-box">
          <div className="stat-counter">4</div>
          <div className="bottom-stats">Repeat Business (3 month period)</div>
        </div>


      </div>
    )
  }
}

export default SkedgeStats;
