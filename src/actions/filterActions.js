import { filterActions } from '../constants/actionNames'

export const setVisibilityFilter = filter => ({
    type: filterActions.SET_VISIBILITY_FILTER,
    filter
});