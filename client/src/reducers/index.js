import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import journalsReducer from './journalsReducer';

export default combineReducers({
  auth: authReducer,
  journals: journalsReducer,
  form: reduxForm
});
