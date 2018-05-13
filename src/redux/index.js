import { combineReducers } from 'redux';
import app from './modules/app/app';
import token from './modules/token/token';

const rootReducer = combineReducers({
  app,
  token
});

export default rootReducer;
