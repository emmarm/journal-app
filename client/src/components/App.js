import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as routes from '../constants/routes';
import PublicRoute from '../routers/PublicRoute';
import PrivateRoute from '../routers/PrivateRoute';
import LandingPage from './LandingPage';
import JournalPage from './JournalPage';
import NewJournalPage from './NewJournalPage';
import EditJournalPage from './EditJournalPage';
import SettingsPage from './SettingsPage';
import EditSettingsPage from './EditSettingsPage';
import NotFoundPage from './NotFoundPage';
import DashboardPage from './DashboardPage';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <PublicRoute
                path={routes.LANDING}
                exact
                component={LandingPage}
              />
              <PrivateRoute
                path={routes.DASHBOARD}
                exact
                component={DashboardPage}
              />
              <PrivateRoute
                path={routes.NEW_JOURNAL}
                exact
                component={NewJournalPage}
              />
              <PrivateRoute
                path={routes.JOURNAL}
                exact
                component={JournalPage}
              />
              <PrivateRoute
                path={routes.EDIT_JOURNAL}
                exact
                component={EditJournalPage}
              />
              <PrivateRoute
                path={routes.SETTINGS}
                exact
                component={SettingsPage}
              />
              <PrivateRoute
                path={routes.EDIT_SETTINGS}
                exact
                component={EditSettingsPage}
              />
              <PublicRoute component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
