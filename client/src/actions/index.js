import axios from 'axios';

export const getCurrentUser = () => async dispatch => {
  const currentUser = await axios.get('/api/current_user');

  dispatch({ type: 'GET_CURRENT_USER', payload: currentUser.data });
};

export const handleToken = token => async dispatch => {
  const payment = await axios.post('/api/payment', token);

  dispatch({ type: 'GET_CURRENT_USER', payload: payment.data });
};

export const handleSubmitJournal = (data, history) => async dispatch => {
  const journal = await axios.post('/api/journals', data);

  history.push('/journals');
  dispatch({ type: 'GET_CURRENT_USER', payload: journal.data });
};
