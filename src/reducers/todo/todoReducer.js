import { toDoActions } from '../../constants/actionNames';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case toDoActions.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case toDoActions.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};


const todo = (state, action) => {
  switch (action.type) {
    case toDoActions.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case toDoActions.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}