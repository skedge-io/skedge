import React, { Component } from 'react';

import MarketNav from './MarketNav'

class Login extends Component {
  render() {
    return (
      <div className="login-page" data-spy="scroll" data-target="#navbar" data-offset="98">

      <MarketNav />

        <div className="login-container">
          <div className="login-box">
            <h3 className="brand-blue">Discover skedge</h3>
            <h3 className="login-gray">Grow your business <br /> with us.</h3>
            <p className="login-gray sm-padding">Sign in with <span className="black-text">Google</span> or <span className="black-text">Outlook</span></p>
            <div className="login-boxes">
              <a href="/auth/google" className="login-with-google">Login With Google</a>
              <a href="/auth/outlook" className="login-with-outlook">Login With Outlook</a>
            </div>

            <p className="terms-text login-gray">By signing up, you agree to Skedges <span class="black-text">Terms & Conditions</span> and <span class="black-text">Privacy Policy</span>.</p>

          </div>
          <div className="login-photo"></div>
        </div>

      </div>
    )
  }
}

export default Login;
