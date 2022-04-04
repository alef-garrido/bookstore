/* eslint-disable default-param-last  */

// Action types
const GET_STATUS = 'bookstore/categories/getStatus';

// Action Creators
export const getStatus = (payload) => ({
  type: GET_STATUS,
  payload,
});

// REDUCER

export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
