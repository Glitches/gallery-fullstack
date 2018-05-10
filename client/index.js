import React from 'react';
import RenderDOM from 'react-dom';
import App from './src/app';
import 'rxjs';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchReducer } from './src/store/reducers';
import { fetchThumbnailsEpic } from './src/store/epics';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(fetchThumbnailsEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  fetchReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

RenderDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
