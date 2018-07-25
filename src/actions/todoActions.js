import { toDoActions } from '../constants/actionNames'
import { v4 } from 'node-uuid';
import * as api from '../api'

export const receiveTodos = (filter, response) => ({
    type: toDoActions.RECEIVE_TODOS,
    filter,
    response,
});

export const addTodo = text => ({
    type: toDoActions.ADD_TODO,
    id: v4(),
    text
});

export const toggleTodo = id => ({
    type: toDoActions.TOGGLE_TODO,
    id
});


export const fetchTodos = (filter) =>
    api.fetchTodos(filter).then(response =>
       receiveTodos(filter, response)
    );

