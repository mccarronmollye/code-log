import { combineReducers } from 'redux';
import logReducer from './logReducer';
import authReducer from './authReducer'

export default combineReducers({
  logReducer,
  authReducer
})
