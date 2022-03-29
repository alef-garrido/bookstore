import { combineReducers, createStore } from '@reduxjs/toolkit';
import booksReducer from './books';

const rootReducer = combineReducers({
  booksReducer,
});

const store = createStore(rootReducer);

export default store;
