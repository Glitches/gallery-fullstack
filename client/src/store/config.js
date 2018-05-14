import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';

import { fetchReducer } from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  fetchReducer,
  composeEnhancers(applyMiddleware(logger, epicMiddleware))
);
