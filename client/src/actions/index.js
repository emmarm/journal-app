import axios from 'axios';

export const getCurrentUser = () => async dispatch => {
  const currentUser = await axios.get('/api/current_user');

  dispatch({ type: 'GET_CURRENT_USER', payload: currentUser.data });
};
