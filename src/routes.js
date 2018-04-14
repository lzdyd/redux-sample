import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Root from './components/Root';

export default (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Root}/>
      <Route path="/articles" component={() => (<div>Articles</div>)}/>
    </Switch>
  </div>
);
