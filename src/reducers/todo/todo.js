import { toDoActions } from '../../constants/actionNames';

const todo = (state, action) => {
    switch (action.type) {
        case toDoActions.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case toDoActions.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export default todo;