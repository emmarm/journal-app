import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import * as routes from '../constants/routes';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to={routes.LANDING} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth && !!state.auth._id
});

export default connect(mapStateToProps)(PrivateRoute);
