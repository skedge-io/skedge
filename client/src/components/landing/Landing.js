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
        <p>We help businesses grow by scheduling appointments,<br /> sending custom text reminders that combat no-shows, <br /> provide incentives to gain repeat business, <br />and by increasing their five star reviews.</p>
        <div className="threeBenefitItems">
          <div className="benefitItem">
            <h1 className="icon"><i className="material-icons">phone_iphone</i></h1>
            <h4 className="bene-text">Works anywhere</h4>
            <p className="b-p">On a phone? Browsing a tablet? Schedule appointments anywhere you go.</p>
          </div>
          <div className="benefitItem">
            <h1 className="icon"><i className="material-icons">flash_on</i></h1>
            <h4 className="bene-text">Fast and easy</h4>
            <p className="b-p">Skedge is almost twice as fast as it's competitors, and it's so easy you don't even have to train your employees on how to use it!</p>
          </div>
          <div className="benefitItem">
            <h1 className="icon"><i className="material-icons">exit_to_app</i></h1>
            <h4 className="bene-text">Cancel anytime</h4>
            <p className="b-p">If you decide Skedge isn't for you - no problem. No commitment. Cancel online anytime.</p>
          </div>
        </div>

        <div className="cta-cont">
          <a className="cfd-cta hoverable waves-effect waves-purple" href="./auth/google">Sign Up</a>
          <p>We cut prices in half!</p>
        </div>
      </div>


      <div className="clients">
        <div className="client-content">
          <p className="price-text">We want to save you money! Switch to us and pay 50% off whatever you are currently paying.</p>
        </div>
      </div>



      <div className="reminders">

        <div className="reminderText">
          <div>Send custom text reminders to combat no shows! A day before, an hour before, whatever you decide.</div>
          <a className="cfd-cta-2 hoverable waves-effect waves-purple" href="./auth/google">Get Started</a>
        </div>
        <div className="reminderImages">
          <img className="img-phone" src="https://preview.ibb.co/dKSwMy/imageedit_1_5925980519.png" />
        </div>

      </div>


      <div className="clients">
        <div className="client-content">
          <p className="price-text">We will convert your current appointments over to skedge free of cost</p>
        </div>
      </div>

      <div className="more-reviews">
        <div className="reviewImages">
          <img className="img-phone-2" src="https://preview.ibb.co/dKSwMy/imageedit_1_5925980519.png" />
        </div>
        <div className="reviewsText">
          <div>We give you more five star reviews by sending out a message sometime after an appointment.<br /><br /> We filter reviews so only positive reviews end up on Yelp, Nextdoor, etc.</div>
          <a className="cfd-cta-2 hoverable waves-effect waves-purple" href="./auth/google">Get More Reviews</a>
        </div>
      </div>


      <div className="repeat-business">
        <div className="reminderText">
          <div>Gain <b>repeat business</b> by offering customers <b>incentives</b> to keep scheduling appointments with you.</div>
          <a className="cfd-cta-2 hoverable waves-effect waves-purple" href="./auth/google">Try For Free</a>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Landing;
