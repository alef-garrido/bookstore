import axios from "axios";
import endpoints from "../http-common";

const action = {
  type: 'apiCallBegan',
  payload: {
    url: '/books',
    method: 'get',
    data: {},
    onSucces: 'booksReceived',
    onError: 'apiRequestFailed'
  }
}

const api = ({dispatch}) => next => async action => {
  if(action.type === 'apiCallBegan') next(action)

  const {
    url,
    method,
    data,
    onSucces,
    onError
  } = action.payload;
  try {
    const response = await axios.request({
      baseURL: endpoints.baseUrl,
      url,
      method,
      data
    });
    dispatch({ type: onSucces, payload: response.data });

  } catch(error) {
    dispatch({ type: onError, payload: error })
  }

};

export default api;