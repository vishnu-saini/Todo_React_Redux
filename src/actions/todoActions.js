import { toDoActions } from '../constants/actionNames';
import { getIsFetching } from '../reducers/rootReducer';
import * as api from '../api';
import { normalize } from 'normalizr';
import * as schema from '../schema';

export const addTodo = (text) => (dispatch) =>
    api.addTodo(text).then(response => {
        console.log(response)
        console.log(
            'normalized response',
            normalize(response, schema.todo)
        )
        dispatch({
            type: toDoActions.ADD_TODO_SUCCESS,
            response,
        });
    });

export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(response => {
        dispatch({
            type: toDoActions.TOGGLE_TODO_SUCCESS,
            response
        });
    });



export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }
    dispatch({
        type: toDoActions.FETCH_TODOS_REQUEST,
        filter,
    });

    return api.fetchTodos(filter).then(response => {
        console.log(response)
        console.log(
            'normalized response',
            normalize(response, schema.arrayOfTodos)
        )
        dispatch({
            type: toDoActions.FETCH_TODOS_SUCCESS,
            filter,
            response,
        });
    }, error => {
        dispatch({
            type: toDoActions.FETCH_TODOS_FAILURE,
            filter,
            message: error.message || 'Something went wrong.',
        });
    });
};
