import { toDoActions } from '../../constants/actionNames';
import { filterPaths } from '../../constants/commonConstants';
import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case toDoActions.RECEIVE_TODOS: // eslint-disable-line no-case-declarations
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case toDoActions.RECEIVE_TODOS:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  if (action.filter !== filterPaths.ACTIVE) {
    return state;
  }
  switch (action.type) {
    case toDoActions.RECEIVE_TODOS:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  if (action.filter !== filterPaths.COMPLETED) {
    return state;
  }
  switch (action.type) {
    case toDoActions.RECEIVE_TODOS:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};


const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

const todoReducer = combineReducers({
  byId,
  idsByFilter
});

export default todoReducer;

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};






