import { todoReducer } from './todo/todoReducer';
import { visibilityFilterReducer } from './filter/filterReducer';

export const rootReducer = (state = {}, action) => {
    return {
        todos: todoReducer(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilterReducer(
            state.visibilityFilter,
            action
        )
    };
};

/*

// alternate way for combining reducers

const { combineReducers } = Redux; // CDN Redux import

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
}); 

*/