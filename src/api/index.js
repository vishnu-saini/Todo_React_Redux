import uuidv4 from 'uuid/v4';
import { filterPaths } from '../constants/commonConstants';
// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
    todos: [
        {
            id: uuidv4(),
            text: 'hey',
            completed: true
        },
        {
            id: uuidv4(),
            text: 'ho',
            completed: true
        },
        {
            id: uuidv4(),
            text: 'let’s go',
            completed: false
        }
    ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
    delay(500).then(() => {
        if (Math.ceil(Math.random() * 10) % 2 === 1) throw new Error('Boom!!');
        switch (filter) {
            case filterPaths.ALL:
                return fakeDatabase.todos;
            case filterPaths.COMPLETED:
                // Use the `Array.filter()` method
                return fakeDatabase.todos.filter(t => t.completed);
            case filterPaths.ACTIVE:
                return fakeDatabase.todos.filter(t => !t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}.`);
        }
    });

export const addTodo = text =>
    delay(500).then(() => {
        const todo = {
            id: uuidv4(),
            text,
            completed: false
        };
        fakeDatabase.todos.push(todo);
        return todo;
    });

export const toggleTodo = id =>
    delay(500).then(() => {
        const todo = fakeDatabase.todos.find(t => t.id === id);
        todo.completed = !todo.completed;
        return todo;
    });
