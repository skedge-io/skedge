import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar header-nav fixed-top navbar-expand-lg">
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand" href="/auth/google">
              Skedge
            </a>
            {/* end */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            {/* end */}
            {/* Top Menu */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbar"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <a className="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#feature">
                    Feature
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#price">
                    Price
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#team">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="nav-link nav-link-btn theme-bg" href="#">
                    Login with Google
                  </a>
                </li>
              </ul>
            </div>
            {/* end */}
          </div>
          {/* Container */}
        </div>
        {/* Navbar */}
      </header>
    );
  }
}

export default Header;
