import { toDoActions } from '../constants/actionNames'

let nextTodoId = 0;
export const addTodo = text => ({
    type: toDoActions.ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo = id => ({
    type: toDoActions.TOGGLE_TODO,
    id
});