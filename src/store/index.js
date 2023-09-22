import { combineReducers, createStore, applyMiddleware } from 'redux';
import usersReducer from './reducer/usersReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));