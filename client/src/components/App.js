import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import JournalPage from './JournalPage';
import NewJournalPage from './NewJournalPage';
import EditJournalPage from './EditJournalPage';
import SettingsPage from './SettingsPage';
import EditSettingsPage from './EditSettingsPage';
import Header from './Header';
import NotFoundPage from './NotFoundPage';
import DashboardPage from './DashboardPage';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/journal" exact component={DashboardPage} />
          <Route path="/journal/new" exact component={NewJournalPage} />
          <Route path="/journal/:id" exact component={JournalPage} />
          <Route path="/journal/:id/edit" exact component={EditJournalPage} />
          <Route path="/settings" exact component={SettingsPage} />
          <Route path="/settings/edit" exact component={EditSettingsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
