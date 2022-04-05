import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import apiCalls from './middleware/apiCalls';
import rootReducer from './rootReducer';

// enable communication with devtools browser extension
const devtools = devToolsEnhancer({ trace: true });
const middleware = applyMiddleware(thunk, apiCalls);
const bundleEnhancer = compose(
  middleware,
  devtools,
);

const store = createStore(
  rootReducer,
  bundleEnhancer,
);

export default store;
