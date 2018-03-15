import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import routes from './routes';

const Root = () => (
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
);

export default Root;
