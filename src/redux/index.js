import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './modules/app/app';
import token from './modules/token/token';

const rootReducer = combineReducers({
  app,
  token,
  form: formReducer
});

export default rootReducer;
