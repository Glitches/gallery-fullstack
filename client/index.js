import React from 'react';
import RenderDOM from 'react-dom';
import App from './src/app';
import 'rxjs';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { fetchReducer } from './src/store/reducers';
import rootEpic from './src/store/epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  fetchReducer,
  composeEnhancers(applyMiddleware(logger, epicMiddleware))
);

RenderDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
