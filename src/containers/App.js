// library imports
import React from 'react';

// component imports
import AddTodo from '../components/todo/AddTodo';
import FilterContainer from '../components/filter/FilterComponent';

import VisibleTodoList from './todo/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <FilterContainer />
        <VisibleTodoList />
    </div>
);

export default App;
