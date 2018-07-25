import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const addLoggingToDispatch = (store) => {
  return (next) => {
    if (!console.group) {
      return next
    }
    return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray', store.getState());
      console.log('%c action', 'color: blue', action);
      const returnValue = next(action);
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
    }
  }
}

const promise = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};

const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action);


const configureStore = () => {
  const middlewares = [thunk];
  middlewares.push(promise);
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(addLoggingToDispatch);
  }

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}

export default configureStore


