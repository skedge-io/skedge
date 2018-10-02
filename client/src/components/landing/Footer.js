import React, { Component } from 'react';


class Footer extends Component {
  render() {

    return (
      <div className="margin footer-extension">
      <footer className="page-footer blue darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Skedge.io</h5>
              <p className="grey-text text-lighten-4">Schedule Appointments, send reminders, gain repeat business, and increase your five star reviews</p>
            </div>
            <div className="col l4 offset-l2 s12">
            <div className="align-left">
              <h5 className="white-text">Links</h5>
              <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Pricing</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">About the Team</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2018 Copyright by Skedge.io
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default Footer;
