const apiCalls = ({dispatch}) => next => action => {
  if(action.type !== apiCallBegan.type) return next(action); // If the action is not an apiCall, pass action to next middleware/reducer

};

export default apiCalls;