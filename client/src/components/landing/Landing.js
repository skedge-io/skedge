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
          <a className="btn-large blue hoverable waves-effect waves-purple" href="./auth/google">Try For Free</a>
        </div>
      </div>



      <div className="whyWeDo">
        <div className="whyWeDoContent">
          <h3>What extra value does your Appointment scheduling software bring your business?</h3>
          <p>We invented Skedge because we believe in software that goes the <b><big>extra mile</big></b>. Skedge helps you schedule appointments and <b><big>grow your business</big></b> at the same time!</p>
        </div>
      </div>



      <div className="threeBenefits">
        <p>We help businesses grow by scheduling appointments,<br /> sending custom text reminders that combat no-shows, <br /> providing incentives to gain repeat business, <br />and by increasing their five star reviews.</p>
        <div className="threeBenefitItems">
          <div className="benefitItem">
            <h4>Icon</h4>
            <p className="b-p">lorem ipsem saler dalet</p>
          </div>
          <div className="benefitItem">
            <h4>Icon</h4>
            <p className="b-p">lorem ipsem saler dalet</p>
          </div>
          <div className="benefitItem">
            <h4>Icon</h4>
            <p className="b-p">lorem ipsem saler dalet</p>
          </div>
        </div>

        <div className="cta-cont">
          <a className="btn-large blue hoverable waves-effect waves-purple" href="./auth/google">Sign Up</a>
          <p>We'll cut whatever you're currently paying in half!</p>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default Landing;
