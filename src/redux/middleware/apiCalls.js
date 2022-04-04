import baseURL from '../data/commonEndpoints';
import { apiRequestBegan, apiReqestSucced, apiRequestFailed } from '../books';

const apiCalls = ({ dispatch }) => (next) => async (action) => {
  // If the action is not an apiCall, pass action to next middleware/reducer and dont execute rest of the code.
  if (action.type !== apiRequestBegan.type) return next(action); 

  next(action); // allows apiRequest to be visible while debbuging with devtools

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
    // General succes dispatch: if promise succeed, dispatch apiRequestSuccedd action with response as payload
    dispatch(apiCallSuccess(apiResponse.data)); 
    // Specific success dipacth: if success from promise response, dispatch the action passed as onSuccess with the response as payload
    if(onSuccess === 'books/booksReceived') dispatch({ type: onSuccess, payload: apiResponse.data });
    else return dispatch({ type: onSuccess, payload: action.payload.body });  
  } catch (error) {
    // General error dispatch: if rejected dispatch apiRequest action with error message as payload
    dispatch(apiRequestFailed(error.message))
    // Specific errpr dispatch: if rejected dipacth specified action passed as onError with error message as payload
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default apiCalls;
