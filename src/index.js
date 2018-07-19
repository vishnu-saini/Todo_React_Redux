import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
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

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


const rootReducer = (state = {}, action) => {
    return {
        todos: todoReducer(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilterReducer(
            state.visibilityFilter,
            action
        )
    };
};

const store = createStore(rootReducer, composeWithDevTools());

let nextTodoId = 0;
class App extends Component {
    render() {
        console.log(this);
        return (
            <div>
                {/* add to do button */}
                <button onClick={() => {
                    this.props.dispatch({
                        type: 'ADD_TODO',
                        text: 'Test',
                        id: nextTodoId++
                    });
                }}>Add Todo</button>

                {/* add to do list */}
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>

                {/* add to do filters */}
                <p> Show:
          <a href='#'
                        onClick={e => {
                            e.preventDefault();
                            store.dispatch({
                                type: 'SET_VISIBILITY_FILTER',
                                filter: 'SHOW_ALL'
                            });
                        }}
                    > All </a>{' '}

                    <a href='#'
                        onClick={e => {
                            e.preventDefault();
                            store.dispatch({
                                type: 'SET_VISIBILITY_FILTER',
                                filter: 'SHOW_ACTIVE'
                            });
                        }} >  Active </a>{' '}


                    <a href='#'
                        onClick={e => {
                            e.preventDefault();
                            store.dispatch({
                                type: 'SET_VISIBILITY_FILTER',
                                filter: 'SHOW_COMPLETED'
                            });
                        }}  > Completed </a>

                </p>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <App todos={store.getState().todos} dispatch={store.dispatch} />
        , document.getElementById('root'));
}

registerServiceWorker();
store.subscribe(render);
render();















