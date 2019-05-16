import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class UpgradeAccount extends Component {

  state = {
    plan: this.props.auth ? this.props.auth.plan : 'Free',
    success: false,
    loading: false
  }

  onToken = (token) => {

    this.toggleLoader();

    axios.post('/api/stripe', token).then((response) => {
      this.props.fetchUser();
      this.setState({success: true, plan: this.props.auth.plan, loading: !this.state.loading});
    })

    // fetch('/api/stripe', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   this.props.fetchUser();
    //   this.setState({success: true, plan: this.props.auth.plan});
    // });
  }

  toggleLoader() {
    this.setState({loading: !this.state.loading});
  }

  render() {
    return (
      <div className="upgrade-card">
        <h2>Upgrade to Enterprise</h2>
        <p>Empower your business with additional features</p>
        <img width="400px" alt="checkout cartoon" src="https://embedwistia-a.akamaihd.net/deliveries/890c08e8393baa51aa9ced55f002ce7a83d383a3.jpg?image_crop_resized=640x375" />
        <div>
          <StripeCheckout
            name="Skedge.io"
            description="Upgrade Your Account"
            image="https://avatars0.githubusercontent.com/u/41029863?s=200&v=4"
            ComponentClass="checkout-btn"
            panelLabel="Upgrade Account"
            amount={1995}
            currency="USD"
            token={this.onToken}
            stripeKey="pk_test_crtKSHcAQUsq0CsXf9zUqqv6"
          />
        </div>
        {this.state.success ? (
          <div>
            <h1>Your account has been upgraded!</h1>
          </div>
        ) : ''}

        {this.state.loading ? (
          <div>
            <h1>Loading</h1>
          </div>
        ) : ''

        }

      </div>
    )
  }
}

export default UpgradeAccount;
