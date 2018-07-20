import { toDoActions } from '../../constants/actionNames';
import { filterPaths } from '../../constants/commonConstants';
import { combineReducers } from 'redux';
import todo from './todo';

const byId = (state = [], action) => {
  switch (action.type) {
    case toDoActions.ADD_TODO:
    case toDoActions.TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case toDoActions.ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  byId,
  allIds,
});

export default todoReducer;

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);


export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case filterPaths.ALL:
      return allTodos;
    case filterPaths.COMPLETED:
      // Use the `Array.filter()` method
      return allTodos.filter(
        t => t.completed
      );
    case filterPaths.ACTIVE:
      return allTodos.filter(
        t => !t.completed
      );
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
}






