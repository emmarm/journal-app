import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

const theme = {
  default: {
    titleFont: {
      family: 'Muli, serif',
      lightWeight: '200',
      heavyWeight: '800'
    },
    bodyFont: {
      family: '"Cormorant Upright", sans-serif'
    },
    boxShadow: '0 0 3px 0 rgba(0,0,0,0.15), 1px 1px 5px 3px rgba(0,0,0,0.15)',
    grey100: '#E8E8E8',
    grey200: '#C9C9C9',
    grey300: '#ACACAC',
    grey400: '#8E8E8E',
    grey500: '#707070',
    grey600: '#585858',
    grey700: '#404040',
    grey800: '#292929',
    grey900: '#111111',
    primary100: '#F1E9FC',
    primary200: '#DFCCF9',
    primary300: '#CDAFF5',
    primary400: '#BB92F2',
    primary500: '#A976EF',
    primary600: '#855DBC',
    primary700: '#61448A',
    primary800: '#3E2B58',
    primary900: '#1B1226',
    secondary100: '#E7EBF6',
    secondary200: '#C9D0EA',
    secondary300: '#ABB7DF',
    secondary400: '#8C9DD4',
    secondary500: '#6E83C9',
    secondary600: '#56679E',
    secondary700: '#3F4B74',
    secondary800: '#28304A',
    secondary900: '#111420',
    accentGreen100: '#DAECEF',
    accentGreen200: '#AAD3DB',
    accentGreen300: '#7ABBC7',
    accentGreen400: '#4AA3B3',
    accentGreen500: '#1A8B9F',
    accentGreen600: '#146D7D',
    accentGreen700: '#0F505B',
    accentGreen800: '#09333B',
    accentGreen900: '#041619'
  }
};

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
