import axios from 'axios';

import * as routes from '../constants/routes';

export const getCurrentUser = () => async dispatch => {
  const currentUser = await axios.get('/api/current_user');

  dispatch({ type: 'GET_CURRENT_USER', payload: currentUser.data });
};

export const handleToken = token => async dispatch => {
  const payment = await axios.post('/api/payment', token);

  dispatch({ type: 'GET_CURRENT_USER', payload: payment.data });
};

export const handleAddJournal = (data, history) => async dispatch => {
  const journal = await axios.post('/api/journals', data);

  history.push(routes.DASHBOARD);
  dispatch({ type: 'ADD_JOURNAL', payload: journal.data });
};
