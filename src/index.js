import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import Root from './components/Root';
import { fetchTodos } from './api/index'

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
fetchTodos('all').then(todos =>
    console.log(todos)
);