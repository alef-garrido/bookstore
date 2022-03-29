import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
