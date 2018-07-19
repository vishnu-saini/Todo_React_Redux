import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { rootReducer } from './reducers/rootReducer';
import { loadState, saveState } from './localStorage';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(rootReducer, persistedState, composeWithDevTools())

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

export default configureStore