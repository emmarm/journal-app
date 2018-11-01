import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = props => (
  <div>
    <h2>My Journal</h2>
    <Link to="/journal/new">Add Journal</Link>
  </div>
);

export default DashboardPage;
