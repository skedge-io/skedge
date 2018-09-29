import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { connect } from 'react-redux';

import './landing.css';

import Canvas from './Canvas';

const ScrollMagic = require('scrollmagic');

class Landing extends Component  {

//certainty, social proof, context, value, and urgency

  renderContent() {
      switch(this.props.auth) {
        case null:
          return <a className="cfd-cta-2 no-mobile-padding hoverable waves-effect waves-purple" href="./auth/google">Try For Free</a>
        case false:
          return <a className="cfd-cta-2 no-mobile-padding hoverable waves-effect waves-purple" href="./auth/google">Try For Free</a>
        default:
          return <Link  className="cfd-cta-2 no-mobile-padding hoverable waves-effect waves-purple" to="dashboard">Go To Dashboard</Link>

      }

  }

  componentDidMount() {
    /*
      Joe's explanation:
      The const smc is our controller where we need to store all of our scenes.
      When we create a scene, we target a specific element.

      When this element is in the middle of the page, the scene starts.
      The scene can reset after a specific duration, which is marked in pixels after the scene is started.

      Then we are able to toggle class changes and more. See http://scrollmagic.io/ for docs.

      At the end of each scene, we must add what we made to the Controller in order to store it.
    */
    const smc = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
      triggerElement: '.whyWeDo',
      duration: 600,
    })
    .setClassToggle('.grow', 'scrolled')
    .addTo(smc)

    // let scene2 = new ScrollMagic.Scene({
    //   triggerElement: '.whyWeDo',
    //   duration: 300
    // })
    // .setClassToggle('.skedge-brand', 'scrolled')
    // .addTo(smc)


  }

  render() {
    return (
      <div>
        <Canvas />
          <div className="heroContent" style={{ textAlign: 'center' }}>
            <h1 className="skedge-brand">Skedge</h1>
            <h5>{this.props.auth ? 'Welcome Back ' + this.props.auth.name : 'Schedule Appointments, send reminders, gain repeat business, and increase your five star reviews!'}</h5>
            {this.renderContent()}
            <div className="bottom-align container">
              <a href="#down"><i className="scroll-icon material-icons">keyboard_arrow_down</i></a>
            </div>
          </div>



        <div id="down" className="whyWeDo">
          <div className="whyWeDoContent">
            <h3 className="no-margin">What extra value does your Appointment scheduling software bring your business?</h3>
            <p>We invented Skedge because we believe in software that goes the <b><big>extra mile</big></b>. Skedge helps you schedule appointments and <b><big><div className="grow">grow</div> your business</big></b> at the same time!</p>
          </div>
        </div>



        <div className="threeBenefits">
          <p>We help businesses grow by scheduling appointments,<br /> sending custom text reminders that combat no-shows, <br /> providing incentives to gain repeat business, <br />and by increasing their five star reviews.</p>
          <div className="threeBenefitItems">
            <div className="benefitItem">
              <h1 className="icon"><i className="material-icons icon">phone_iphone</i></h1>
              <h4 className="bene-text">Works anywhere</h4>
              <p className="b-p">On a phone? Browsing a tablet? Schedule appointments anywhere you go.</p>
            </div>
            <div className="benefitItem">
              <h1 className="icon"><i className="material-icons icon">flash_on</i></h1>
              <h4 className="bene-text">Fast and easy</h4>
              <p className="b-p">Skedge is almost twice as fast as it's competitors, and it's so easy you don't even have to train your employees on how to use it!</p>
            </div>
            <div className="benefitItem">
              <h1 className="icon"><i className="material-icons icon">exit_to_app</i></h1>
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
            <a className="cfd-cta-2 no-mobile-padding hoverable waves-effect waves-purple" href="./auth/google">Get Started</a>
          </div>
          <div className="reminderImages">
            <img alt="skedge text campaign" className="img-phone" src="https://preview.ibb.co/dKSwMy/imageedit_1_5925980519.png" />
          </div>

        </div>


        <div className="clients">
          <div className="client-content">
            <p className="price-text">We will convert your current appointments over to skedge free of cost</p>
          </div>
        </div>

        <div className="more-reviews">
          <div className="reviewImages">
            <img alt="skedge review text campaign" className="img-phone-2" src="https://image.ibb.co/gMaVGy/imageedit_7_3488219439.png" />
          </div>
          <div className="reviewsText">
            <div>We give you more five star reviews by sending out a message sometime after an appointment.<br /><br /> We filter reviews so only positive reviews end up on Yelp, Nextdoor, etc.</div>
            <a className="cfd-cta-2 no-mobile-padding hoverable waves-effect waves-purple" href="./auth/google">Get More Reviews</a>
          </div>
        </div>


        <div className="repeat-business">
          <div className="reminderText">
            <div>Gain <b>repeat business</b> by offering customers <b>incentives</b> to keep scheduling appointments with you.</div>
            <a className="cfd-cta-2 no-mobile-padding hoverable waves-effect waves-purple" href="./auth/google">Try For Free</a>
            <h5 className="skedgememo">Skedge.io is currently in alpha stage development. Create an account to stay updated on our development process, and be the first to know when skedge is production ready.</h5>
          </div>
        </div>


        <Footer />
        <script>





        </script>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
