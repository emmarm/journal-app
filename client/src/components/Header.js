import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import StripeButton from './StripeButton';

class Header extends React.Component {
  renderNav = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Log in</a>;
      default:
        return (
          <div>
            {this.props.auth.isPremium ? (
              <p>Premium Unlocked</p>
            ) : (
              <StripeButton />
            )}
            <a href="/api/logout">Log out</a>
          </div>
        );
    }
  };

  render() {
    return (
      <div>
        <Link to={this.props.auth ? routes.DASHBOARD : routes.LANDING}>
          <h1>Greatful Day</h1>
        </Link>
        {this.renderNav()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
