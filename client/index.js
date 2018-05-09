import React from 'react';
import RenderDOM from 'react-dom';
import App from './src/app';

import { CreateStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = CreateStore(applyMiddleware(thunk));

RenderDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
