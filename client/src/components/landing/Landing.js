import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { connect } from "react-redux";

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
          <div id="particles_js" className="particles-js-canvas-el" />
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
                    <a href="#" className="m-btn m-btn-white">
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

export default Landing;
