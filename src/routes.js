import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default (
  <div>
    <Switch>
      <Route path="/" component={ () => <h1>Test123</h1> }/>
    </Switch>
  </div>
);
