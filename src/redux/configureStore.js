import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import booksReducer from './books';
import categoriesReducer from './categories/categories';
import apiCalls from './middleware/apiCalls';

//enable communication with devtools browser extension
const devtools = devToolsEnhancer({ trace: true });
const middleware = applyMiddleware(thunk, apiCalls);
const bundleEnhancer = compose(
  middleware,
  devtools,
);

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(
  rootReducer,
  bundleEnhancer,  
);

export default store;
