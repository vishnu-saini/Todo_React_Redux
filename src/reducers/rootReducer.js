import todoReducer, * as fromTodoReducer from './todo/todoReducer';

export const rootReducer = (state = {}, action) => ({
    todos: todoReducer(
        state.todos,
        action
    )
});

/*

// alternate way for combining reducers

const { combineReducers } = Redux; // CDN Redux import

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
}); 

*/

export const getVisibleTodos = (state, filter) =>
    fromTodoReducer.getVisibleTodos(state.todos, filter);
