import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import Particles from "react-particles-js";
import Footer from "./Footer";

import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div className="react-transition fade-in" data-spy="scroll" data-target="#navbar" data-offset="98">
        {/* Loading */}
        <div id="loading">
          <div className="load-circle">
            <span className="one" />
          </div>
        </div>
        {/* end */}
        <Header />
        {/* Home Banner Start */}
        <section id="home" className="home-banner gray-bg">
          <Particles
            className="particles-js-canvas-el"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.2,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 0,
                  color: "#ffffff",
                  opacity: 0,
                  width: 0
                },
                move: {
                  enable: true,
                  speed: 9,
                  direction: "top",
                  random: true,
                  straight: true,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true,
              config_demo: {
                hide_card: false,
                background_color: "#b61924",
                background_image: "",
                background_position: "50% 50%",
                background_repeat: "no-repeat",
                background_size: "cover"
              }
            }}
          />
          <div className="container">
            <div className="row p-100px-t justify-content-center">
              <div className="col-md-10 col-lg-8 text-center p-60px-tb sm-p-30px-tb">
                <div className="home-text-center">
                  <h1 className="font-alt">{this.props.auth ? 'Welcome Back!' : 'Simple, flexible, powerful'}</h1>
                  <p>
                    Skedge helps you schedule appointments, increase your five star reviews, send reminders and promotions, eliminate no shows, and gain repeat business, all at the same time.
                  </p>
                  <div className="app-btn-set">
                    {this.props.auth ?<Link className="m-btn m-btn-white" to="/dashboard">Go to Dashboard</Link>  : <Link to="/login" className="m-btn m-btn-white">
                      Try for free
                    </Link> }
                  </div>
                </div>
                {/* home-text-center */}
              </div>
              {/* col */}
              <div className="col-md-8 home-right text-center">
                <img
                  className="up-down"
                  src="images/desktop.png"
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* container */}
        </section>

        {/* Featre */}
        <section id="about" className="section gray-bg border-bottom">
          <div className="container">
            <div className="row justify-content-center m-45px-b md-m-25px-b">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="section-title">
                  <h2 className="theme-after-bg">
                    Help your <span className="theme-color">business </span> grow
                  </h2>
                  <p>
                    Gain repeatable business by increasing five star reviews.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 m-15px-tb">
                <div className="feature-box">
                  <div className="icon">
                    <i className="ti-package theme-color" />
                  </div>
                  <h3 className="font-alt">Works anywhere</h3>
                  <p>Phone or tablet, schedule appointments anywhere you go.</p>
                </div>
              </div>
              {/* col */}
              <div className="col-md-6 col-lg-3 m-15px-tb">
                <div className="feature-box">
                  <div className="icon">
                    <i className="ti-blackboard theme-color" />
                  </div>
                  <h3 className="font-alt">Fast and easy</h3>
                  <p>
                    Skedge is lightning fast, and simple to learn.
                  </p>
                </div>
              </div>
              {/* col */}
              <div className="col-md-6 col-lg-3 m-15px-tb">
                <div className="feature-box">
                  <div className="icon">
                    <i className="ti-crown theme-color" />
                  </div>
                  <h3 className="font-alt">Free</h3>
                  <p>Free updates, free business growth, free smiles</p>
                </div>
              </div>
              {/* col */}
              <div className="col-md-6 col-lg-3 m-15px-tb">
                <div className="feature-box">
                  <div className="icon">
                    <i className="ti-heart theme-color" />
                  </div>
                  <h3 className="font-alt">Continuous Support</h3>
                  <p>
                    Have a question or looking for a new feature? Message us and
                    we'll get back with you as soon as possible!
                  </p>
                </div>
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
        {/* <-- / --> */}
        <Footer />
        {/* end */}
      </div>
    );
  }
}



function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, {})(Landing);
