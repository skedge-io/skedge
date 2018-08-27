import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MobileMenu from './dashboard/MobileMenu';


class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>
      default:
        return [
          <li key="2"><a href="/api/logout">Logout</a></li>
        ]
    }
  }



  render() {
    return (
      <nav className="blue">
        <div className="nav-wrapper">
        <MobileMenu />

          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
          >
            Skedge
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>

        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
