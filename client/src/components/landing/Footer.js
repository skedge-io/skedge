import React, { Component } from "react";
import FooterSections from "./FooterSections";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <section class="footer-section">
          <div class="container">
            <FooterSections />
            <div class="footer-copy">
              <div class="row">
                <div class="col-12">
                  <p>All © Copyright by Skedge.io All Rights Reserved.</p>
                </div>
                {/* col */}
              </div>
              {/* row */}
            </div>
            {/* footer-copy */}
          </div>
          {/* container */}
        </section>
      </footer>
    );
  }
}

export default Footer;
