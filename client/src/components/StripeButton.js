import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = () => (
  <StripeCheckout
    allowRememberMe={false}
    amount={999}
    currency="USD"
    description="Upgrade for More Features"
    name="Greatful Days"
    panelLabel="Go Premium for"
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    token={token => console.log(token)}
  >
    <button>Get Premium</button>
  </StripeCheckout>
);

export default StripeButton;