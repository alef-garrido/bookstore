const api = store => next => action => {
  if(action.type !== 'apiCallBegan') next(action);

  
}