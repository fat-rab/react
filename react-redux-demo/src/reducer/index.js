import { combineReducers } from 'redux';
import homeReducer from './home';
import reSelectReducer from './reselect';
import immutableReducer from './immutable';
import reduxActionsReducer from './redux-actions';

// console.log(reSelectReducer());

export default combineReducers({
  homeReducer,
  reSelectReducer,
  immutableReducer,
  reduxActionsReducer,
});
