import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class UpgradeAccount extends Component {

  state = {
    plan: this.props.auth ? this.props.auth.plan : 'Free',
    success: false
  }

  onToken = (token) => {
    fetch('/api/stripe', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      this.props.fetchUser();
      this.setState({success: true, plan: this.props.auth.plan});
    });
  }

  render() {
    return (
      <div>
        Upgrade Account

        <StripeCheckout
          name="Skedge.io"
          description="Upgrade Your Account"
          image="https://avatars0.githubusercontent.com/u/41029863?s=200&v=4"
          ComponentClass="div"
          panelLabel="Upgrade Account"
          amount={1995}
          currency="USD"
          token={this.onToken}
          stripeKey="pk_test_crtKSHcAQUsq0CsXf9zUqqv6"
        />

        {this.state.success ? (
          <div>
            <h1>Your account has been upgraded!</h1>
          </div>
        ) : ''}

      </div>
    )
  }
}

export default UpgradeAccount;
