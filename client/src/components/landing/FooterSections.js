import React, { Component } from "react";
import { Link } from 'react-router-dom';

class FooterSections extends Component {
  render() {
    return (
      <div className="row">

        <div className="col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
          <h4 className="font-alt">About Us</h4>
          <p className="footer-text">
            We invented Skedge because we believe in software that goes the
            extra mile. Skedge helps you schedule appointments and grow your
            business at the same time!
          </p>
          <ul className="social-icons">
            <li>
              <a className="facebook" href="/#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a className="twitter" href="/#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a className="google" href="/#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="/#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
        {/* col */}
        <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
          <h4 className="font-alt">Product</h4>
          <ul className="fot-link">
            <li>
              <a href="/#">Features</a>
              <br />
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </div>
        {/* col */}
        <div className="col-6 col-md-4 col-lg-2 sm-m-15px-tb" />
        <div className="col-md-4 col-lg-4 sm-m-15px-tb">
          <h4 className="font-alt">Subscribe</h4>
          <p>Signup for our news letter!</p>
          <div className="subscribe-box m-20px-t">
            <input
              placeholder="Enter Email"
              className="form-control"
              type="text"
              name="demo"
            />
            <button className="m-btn m-btn-theme">
              <i className="ti-arrow-right" />
            </button>
          </div>
        </div>
        {/* col */}
      </div>
    );
  }
}

export default FooterSections;
