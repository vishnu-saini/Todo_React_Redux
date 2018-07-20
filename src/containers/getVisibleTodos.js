import { filterPaths } from '../constants/commonConstants'

export const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case filterPaths.ALL:
            return todos;
        case filterPaths.COMPLETED:
            // Use the `Array.filter()` method
            return todos.filter(
                t => t.completed
            );
        case filterPaths.ACTIVE:
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
}