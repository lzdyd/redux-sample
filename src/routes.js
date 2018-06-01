import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Auth,
  Header,
  Root
} from './components';

import RouterPathsService from './utils/RouterPathsService';

const { REACT_APP_BASE_URL = '/' } = window.ENV;

const paths = new RouterPathsService(REACT_APP_BASE_URL);

export default (
  <React.Fragment>
    <Header paths={paths} />
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path={paths.auth} component={Auth} />
      <Route path={paths.articles} component={() => (<div>Articles</div>)} />
    </Switch>
  </React.Fragment>
);
