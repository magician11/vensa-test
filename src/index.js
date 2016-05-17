// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
// import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';

// styling
require('font-awesome/scss/font-awesome.scss');
require('./styles/style.scss');

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
