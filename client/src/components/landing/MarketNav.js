import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MarketNav extends Component {
  render() {
    return (
      <div className="login-nav">
        <a className="navbar-brand brand-dark" href="/">
          <img height="50" src="https://i.ibb.co/v4Z8V3p/Group.png" />
        </a>

        <Link className="nav-link white-text" to="/">
        </Link>
        <Link className="nav-link white-text" to="/features">
          Features
        </Link>
        <Link className="nav-link white-text" to="/team">
          Team
        </Link>

        <a className="nav-link white-text" href="#contact">
          Contact Us
        </a>
      </div>

    )
  }
}

export default MarketNav;
