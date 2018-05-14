import React from 'react';
import RenderDOM from 'react-dom';
import App from './src/app';
import 'rxjs';

import { Provider } from 'react-redux';
import { store } from './src/store/config';

RenderDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
