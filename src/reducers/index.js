import { combineReducers } from 'redux';
import bookStore from './books';
import filter from './filter';

export default combineReducers({
  bookStore,
  filter,
});
