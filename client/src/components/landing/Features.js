import React, { Component } from 'react';

import Header from '../Header';

import './features.scss';
import DashCalendar from '../dashboard/calendar/Calendar'
import SkedgeStats from '../dashboard/statistics/SkedgeStats'
import SkedgeGraphs from '../dashboard/statistics/SkedgeGraphs'


class Features extends Component {
  render() {
    return (
      <div className="features-page">
        <div className="features-hero">
          <Header />
          <div className="features-inner-hero">
            <h1 className="white-text">Features page coming soon.</h1>
            <div className="features-dash">
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Features
