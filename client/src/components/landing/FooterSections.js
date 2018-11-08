import React, { Component } from "react";

class FooterSections extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
          <h4 class="font-alt">About Us</h4>
          <p class="footer-text">
            We invented Skedge because we believe in software that goes the
            extra mile. Skedge helps you schedule appointments and grow your
            business at the same time!
          </p>
          <ul class="social-icons">
            <li>
              <a class="facebook" href="#">
                <i class="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a class="google" href="#">
                <i class="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a class="linkedin" href="#">
                <i class="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
        {/* col */}
        <div class="col-6 col-md-4 col-lg-2 sm-m-15px-tb">
          <h4 class="font-alt">Product</h4>
          <ul class="fot-link">
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
        {/* col */}
        <div class="col-6 col-md-4 col-lg-2 sm-m-15px-tb" />
        <div class="col-md-4 col-lg-4 sm-m-15px-tb">
          <h4 class="font-alt">Subscribe</h4>
          <p>Signup for our news letter!</p>
          <div class="subscribe-box m-20px-t">
            <input
              placeholder="Enter Email"
              class="form-control"
              type="text"
              name="demo"
            />
            <button class="m-btn m-btn-theme">
              <i class="ti-arrow-right" />
            </button>
          </div>
        </div>
        {/* col */}
      </div>
    );
  }
}

export default FooterSections;
