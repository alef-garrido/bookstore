// Action types
const GET_STATUS = 'getStatus';

// Action Creators
export const getStatus = (payload) => ({
  type: GET_STATUS,
  payload,
});

// REDUCER

export default function categoriesReducer(action, state = []) {
  switch (action.type) {
    case GET_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
