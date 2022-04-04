import baseURL from '../data/commonEndpoints';

const apiCalls = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action); // If the action is not an apiCall, pass action to next middleware/reducer and dont execute rest of the code.

  // If action is an API call, handle async request structure (make call - if success - if rejected);

  const {
    url,
    method,
    body,
    onSuccess,
    onError,
  } = action.payload; // get call properties from action payload

  try {
    const apiResponse = await fetch(
      `${baseURL}${url}`,
      {
        method,
        body,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    )
      .then((res) => {
        if (method !== 'GET') return res.text();
        return res.json().then((data) => Object.entries(data));
      });
      // if success from promise response, dispatch the action passed as onSuccess with the response as payload
    dispatch({ type: onSuccess, payload: apiResponse.data });
  } catch (error) {
    // if rejected dispatch action passed as onError with error message as payload
    dispatch({ type: onError, payload: error.message });
  }
};

export default apiCalls;
