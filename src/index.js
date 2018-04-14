import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import WebFont from 'webfontloader';

import 'semantic-ui-css/semantic.min.css';
import './common/index.css';

import Root from './Root';

/*WebFont.load({
  google: {
    families: ['PT Sans:300,400,700', 'sans-serif']
  }
});*/

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Root);

if (module.hot) {
  module.hot.accept('./Root', () => { render(Root); });
}
