import { v4 } from 'node-uuid';
import { filterPaths } from '../constants/commonConstants';
// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'hey',
        completed: true,
    }, {
        id: v4(),
        text: 'ho',
        completed: true,
    }, {
        id: v4(),
        text: 'let’s go',
        completed: false,
    }],
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch (filter) {
            case filterPaths.ALL:
                return fakeDatabase.todos;
            case filterPaths.COMPLETED:
                // Use the `Array.filter()` method
                return fakeDatabase.todos.filter(
                    t => t.completed
                );
            case filterPaths.ACTIVE:
                return fakeDatabase.todos.filter(
                    t => !t.completed
                );
            default:
                throw new Error(`Unknown filter: ${filter}.`);
        }
    });