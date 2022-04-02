/* eslint-disable consistent-return */
import axios from 'axios';
import { baseURL } from '../http-common';
import { apiCallBegan, apiCallSuccess, apiCallFailed } from '../books';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  const {
    url,
    method,
    data,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      baseURL,
      url,
      method,
      data,
    });
    // General
    dispatch(apiCallSuccess(response.data));
    // specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General error
    dispatch(apiCallFailed(error.message));
    // Specific error
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
