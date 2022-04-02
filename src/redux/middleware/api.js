/* eslint-disable consistent-return */
import { baseURL } from '../http-common';
import { apiCallBegan, apiCallSuccess, apiCallFailed } from '../books';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  const {
    url,
    method,
    body,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const response = await fetch(`${baseURL}${url}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => Object.entries(data));
    // General
    dispatch(apiCallSuccess(response));
    // specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response });
  } catch (error) {
    // General error
    dispatch(apiCallFailed(error.message));
    // Specific error
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
