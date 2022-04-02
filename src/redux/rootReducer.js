import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books';
import categoriesReducer from './categories';

export default combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
