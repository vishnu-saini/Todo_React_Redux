import { toDoActions } from '../../constants/actionNames';

const byId = (state = {}, action) => {
  switch (action.type) {
    case toDoActions.FETCH_TODOS_SUCCESS: // eslint-disable-line no-case-declarations
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case toDoActions.ADD_TODO_SUCCESS: // Our new case
      return {
        ...state,
        [action.response.id]: action.response,
      };
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];