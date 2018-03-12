import configureStore from './configureStore';

let initialState;
try {
  initialState = window.__INITIAL_STATE__; // eslint-disable-line no-underscore-dangle
} catch (err) {
  initialState = {};
}

export default configureStore(initialState);
