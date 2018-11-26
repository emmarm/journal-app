import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'react-emotion';

import * as actions from '../actions';

const Button = styled('button')`
  background-color: ${({ theme }) => theme.default.accentGreen400};
  border: none;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.default.boxShadow};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  color: white;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
`;

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
    <Button>Get Premium</Button>
  </StripeCheckout>
);

export default connect(
  null,
  actions
)(StripeButton);
