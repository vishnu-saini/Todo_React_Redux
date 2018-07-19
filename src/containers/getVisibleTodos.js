import { todoVisibility } from '../constants/commonConstants'

export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case todoVisibility.SHOW_ALL:
            return todos;
        case todoVisibility.SHOW_COMPLETED:
            // Use the `Array.filter()` method
            return todos.filter(
                t => t.completed
            );
        case todoVisibility.SHOW_ACTIVE:
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
}