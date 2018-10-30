import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../actions';

const StripeButton = ({ handleToken }) => (
  <StripeCheckout
    allowRememberMe={false}
    amount={999}
    currency="USD"
    description="Upgrade for More Features"
    name="Greatful Days"
    panelLabel="Go Premium for"
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    token={token => handleToken(token)}
  >
    <button>Get Premium</button>
  </StripeCheckout>
);

export default connect(
  null,
  actions
)(StripeButton);
