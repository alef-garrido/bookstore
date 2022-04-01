import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './rootReducer';
import api from './middleware/api';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk, 
    logger,
    api  
  ),
);

export default store;
