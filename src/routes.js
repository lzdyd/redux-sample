import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RouterService from './utils/routerService';

import Header from './containers/Header';
import Root from './components/Root';

const { REACT_APP_BASE_URL = '/' } = window.ENV;

const paths = new RouterService(REACT_APP_BASE_URL);

export default (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Root}/>
      <Route path={paths.articles} component={() => (<div>Articles</div>)}/>
    </Switch>
  </React.Fragment>
);
