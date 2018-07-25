import { combineReducers } from 'redux';
import { toDoActions } from '../../constants/actionNames';




const createList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case toDoActions.FETCH_TODOS_SUCCESS:
        return filter === action.filter ?
          action.response.map(todo => todo.id) :
          state;
      case toDoActions.ADD_TODO_SUCCESS:
        return filter !== 'completed' ?
          [...state, action.response.id] :
          state;
      case toDoActions.TOGGLE_TODO_SUCCESS:
        return handleToggle(state, action);
      default:
        return state;
    }
  };


  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case toDoActions.FETCH_TODOS_REQUEST:
        return true;
      case toDoActions.FETCH_TODOS_SUCCESS:
      case toDoActions.FETCH_TODOS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case toDoActions.FETCH_TODOS_FAILURE:
        return action.message;
      case toDoActions.FETCH_TODOS_REQUEST:
      case toDoActions.FETCH_TODOS_SUCCESS:
        return null;
      default:
        return state;
    }
  };


  const handleToggle = (state, action) => {
    const { id : toggledId } = action.response;
    const { completed } = action.response;
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    );
    return shouldRemove ?
      state.filter(id => id !== toggledId) :
      state;
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });

};
export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;