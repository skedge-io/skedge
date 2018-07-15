import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import './landing.css';

const Landing = () => {
  return (
    <div>
    <div className="landingHero" style={{ textAlign: 'center' }}>
      <div className="heroContent">
        <h1>Skedge</h1>
        <h5>Schedule Appointments, send reminders, gain repeat business, and increase your five star reviews!</h5>
        <Link className="btn-large blue hoverable waves-effect waves-purple" to="/dashboard">Try For Free</Link>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Landing;
