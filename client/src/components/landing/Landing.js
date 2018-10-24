import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import Particles from "react-particles-js";

class Landing extends Component {
  render() {
    return (
      <div data-spy="scroll" data-target="#navbar" data-offset="98">
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
                  <h1 className="font-alt">Simple, flexible, powerful</h1>
                  <p>
                    We invented Skedge because we believe in software that goes
                    the extra mile. Skedge helps you schedule appointments and
                    grow your business at the same time!
                  </p>
                  <div className="app-btn-set">
                    <a href="./auth/google" className="m-btn m-btn-white">
                      Try for free
                    </a>
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
        {/* end */}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
