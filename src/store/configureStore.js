import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
