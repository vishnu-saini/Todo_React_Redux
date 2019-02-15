import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';

const addLoggingToDispatch = store => {
    return next => {
        /* eslint-disable */
        if (!console.group) {
            return next;
        }
        return action => {
            console.group(action.type);
            console.log('%c prev state', 'color: gray', store.getState());
            console.log('%c action', 'color: blue', action);
            const returnValue = next(action);
            console.log('%c next state', 'color: green', store.getState());
            console.groupEnd(action.type);
            return returnValue;
        };
        /* eslint-enable */
    };
};

const promise = () => next => action => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }
    return next(action);
};

const thunk = store => next => action =>
    typeof action === 'function'
        ? action(store.dispatch, store.getState)
        : next(action);

const configureStore = () => {
    const middlewares = [thunk];
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    middlewares.push(promise);
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(addLoggingToDispatch);
    }

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );
};

export default configureStore;
