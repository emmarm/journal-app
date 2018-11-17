import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

const theme = {
  titleFont: {
    family: 'Lora, serif',
    style: 'italic',
    weight: '400'
  },
  bodyFont: {
    family: 'Montserrat, sans-serif',
    weight: '300'
  },
  default: {
    grey100: '#dcdcdc',
    grey200: '#c3c3c3',
    grey300: '#aaaaaa',
    grey400: '#919191',
    grey500: '#787878',
    grey600: '#5f5f5f',
    grey700: '#464646',
    grey800: '#2d2d2d',
    grey900: '#141414'
  }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
