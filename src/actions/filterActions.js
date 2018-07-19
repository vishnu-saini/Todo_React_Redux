import { filterActions } from '../constants/actionNames'

export const setVisibilityFilter = (filter) => {
    return {
        type: filterActions.SET_VISIBILITY_FILTER,
        filter
    };
};