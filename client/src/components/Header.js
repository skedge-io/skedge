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
      <nav className="blue">
        <div className="nav-wrapper">

        {this.renderMobile()}

          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className={this.props.auth ? 'left brand-logo' : 'left brand-logo logged-out-brand'}
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
