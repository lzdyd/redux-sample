import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../';

const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

const middlewares = [
  thunk,
  !__PRODUCTION__ && createLogger()
].filter(Boolean);

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares
)(createStore);

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    !__PRODUCTION__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../', () => {
      const nextRootReducer = require('../index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
