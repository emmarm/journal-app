import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as routes from '../constants/routes';
import LandingPage from './LandingPage';
import JournalPage from './JournalPage';
import NewJournalPage from './NewJournalPage';
import EditJournalPage from './EditJournalPage';
import SettingsPage from './SettingsPage';
import EditSettingsPage from './EditSettingsPage';
import Header from './Header';
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
            <Header />
            <Switch>
              <Route path={routes.LANDING} exact component={LandingPage} />
              <Route path={routes.DASHBOARD} exact component={DashboardPage} />
              <Route
                path={routes.NEW_JOURNAL}
                exact
                component={NewJournalPage}
              />
              <Route path={routes.JOURNAL} exact component={JournalPage} />
              <Route
                path={routes.EDIT_JOURNAL}
                exact
                component={EditJournalPage}
              />
              <Route path={routes.SETTINGS} exact component={SettingsPage} />
              <Route
                path={routes.EDIT_SETTINGS}
                exact
                component={EditSettingsPage}
              />
              <Route component={NotFoundPage} />
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
