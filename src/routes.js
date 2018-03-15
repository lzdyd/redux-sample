import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Root from './components/Root';

export default (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={Root}/>
    </Switch>
  </div>
);
