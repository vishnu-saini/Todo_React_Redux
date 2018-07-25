import { toDoActions } from '../constants/actionNames';
import { getIsFetching } from '../reducers/rootReducer';
import { v4 } from 'node-uuid';
import * as api from '../api'

export const receiveTodos = (filter, response) => ({
    type: toDoActions.RECEIVE_TODOS,
    filter,
    response,
});

export const requestTodos = (filter) => ({
    type: toDoActions.REQUEST_TODOS,
    filter,
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



export const fetchTodos = (filter) => (dispatch , getState ) => {
     if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    } 
    dispatch(requestTodos(filter));

    return api.fetchTodos(filter).then(response => {
        dispatch(receiveTodos(filter, response));
    });
};
