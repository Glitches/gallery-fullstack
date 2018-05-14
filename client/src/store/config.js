import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';

import { fetchReducer } from './reducers';
import rootEpic from './epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const reduxMiddleware = [epicMiddleware];
//eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  reduxMiddleware.unshift(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  fetchReducer,
  composeEnhancers(applyMiddleware(...reduxMiddleware))
);
