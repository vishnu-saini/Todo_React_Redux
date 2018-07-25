import { combineReducers } from 'redux';

import { filterPaths } from '../constants/commonConstants';

import createList, * as fromList from './todo/createList';
import byId, * as fromById from './todo/byid';

const listByFilter = combineReducers({
    all: createList(filterPaths.ALL),
    active: createList(filterPaths.ACTIVE),
    completed: createList(filterPaths.COMPLETED),
});

export const rootReducer = combineReducers({
    byId,
    listByFilter
});


export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
};

export const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage = (state, filter) =>
    fromList.getErrorMessage(state.listByFilter[filter]);