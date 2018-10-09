import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MobileMenu from './dashboard/MobileMenu';


class LandingHeader extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a className="auth landing" href="/auth/google">Login With Google</a></li>
      default:
        return [
          <li key="2"><a className="auth landing" href="/api/logout">Logout</a></li>
        ]
    }
  }

renderMobile() {
  switch(this.props.auth) {
    case null:
      return;
    case false:
      return;
    default:
      return  (
        <MobileMenu />
      )
  }
}


  render() {
    return (
      <nav className="white">
        <div className="nav-wrapper landing">

        {this.renderMobile()}

          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className={this.props.auth ? 'left brand-logo landing' : 'left brand-logo landing logged-out-brand'}
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

export default connect(mapStateToProps)(LandingHeader);
