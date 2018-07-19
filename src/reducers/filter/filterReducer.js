import { filterActions } from '../../constants/actionNames';
import { todoVisibility } from '../../constants/commonConstants';

export const visibilityFilterReducer = (state = todoVisibility.SHOW_ALL, action) => {
    switch (action.type) {
        case filterActions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};