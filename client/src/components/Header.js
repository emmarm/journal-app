import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

import * as routes from '../constants/routes';
import StripeButton from './StripeButton';

const HeaderContainer = styled('div')`
  background: ${({ theme }) => theme.default.primary800};
  margin: 0;
`;

const Title = styled('h1')`
  color: ${({ theme }) => theme.default.primary400};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-weight: ${({ theme }) => theme.default.titleFont.lightWeight};
  margin: 0;
  text-decoration: none;
`;

const TitleSpan = styled('span')`
  color: ${({ theme }) => theme.default.accentGreen300};
`;

const NavItem = styled('a')`
  color: ${({ theme }) => theme.default.secondary200};
  font-family: ${({ theme }) => theme.default.titleFont.family};
  font-weight: ${({ theme }) => theme.default.titleFont.lightWeight};
  text-decoration: none;
`;

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
            <NavItem href="/api/logout">Log out</NavItem>
          </div>
        );
    }
  };

  render() {
    return (
      <HeaderContainer>
        <Link to={this.props.auth ? routes.DASHBOARD : routes.LANDING}>
          <Title>
            <TitleSpan>Great</TitleSpan>
            fulness
          </Title>
        </Link>
        {this.renderNav()}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
