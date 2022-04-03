import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import api from './middleware/api';

const devtools = devToolsEnhancer({ trace: true });
const middleware = applyMiddleware(
  api,
  thunk,
);

const composedEnhancer = compose(
  middleware,
  devtools,
);

const store = createStore(
  rootReducer,
  composedEnhancer,
);

export default store;
