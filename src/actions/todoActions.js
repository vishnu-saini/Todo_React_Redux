import { toDoActions } from '../constants/actionNames'
import { v4 } from 'node-uuid';

export const addTodo = text => ({
    type: toDoActions.ADD_TODO,
    id: v4(),
    text
});

export const toggleTodo = id => ({
    type: toDoActions.TOGGLE_TODO,
    id
});