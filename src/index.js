import 'bootstrap/dist/css/bootstrap.min.css';

import { applyMiddleware, createStore } from 'redux';

import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/api';

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

/**
 * If REM API is down use the following approach
 * // axios.defaults.withCredentials = true;
 * axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
