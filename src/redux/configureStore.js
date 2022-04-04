import { createStore, applyMiddleware } from 'redux';
import booksReducer from './books';
import categoriesReducer from './categories/categories';
import apiCalls from './middleware/apiCalls';

const middleware = applyMiddleware(apiCalls, thunk);

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(rootReducer, middleware);

export default store;
