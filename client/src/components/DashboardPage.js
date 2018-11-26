import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const DashboardPage = props => (
  <div>
    <h2>My Journal!</h2>
    <Link to={routes.NEW_JOURNAL}>Add Journal</Link>
  </div>
);

export default DashboardPage;
