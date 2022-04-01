/* eslint-disable consistent-return */
import axios from 'axios';
import { baseURL } from '../http-common';
import { apiCallBegan, apiCallSuccess, apiCallFailed } from '../books';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  next(action);

  const {
    url,
    method,
    data,
    onSucces,
    onError,
  } = action.payload;

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
    if (onSucces) dispatch({ type: onSucces, payload: response.data });
  } catch (error) {
    // General error
    dispatch(apiCallFailed(error));
    // Specific error
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
