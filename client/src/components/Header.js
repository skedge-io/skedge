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
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <a className="nav-link" href="#feature">
                    Features
                  </a>
                </li>
                <li>
                  <Link className="nav-link" to="/team">
                    Team
                  </Link>
                </li>

                <li>
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link nav-link-btn theme-bg"
                    href="./auth/google"
                  >
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
