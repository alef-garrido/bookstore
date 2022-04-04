import { combineReducers } from 'redux';
import booksReducer from './books-dux';
import categoriesReducer from './categories-dux';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

export default rootReducer;