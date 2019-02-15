// library imports
import React from 'react';

// component imports
import AddTodo from '../containers/todoContainers/AddTodo';
import FilterContainer from '../containers/filterContainers/FilterContainer';

import VisibleTodoList from './todoComponent/VisibleTodoList';

const App = () => (
    <div>
        <AddTodo />
        <FilterContainer />
        <VisibleTodoList />
    </div>
);

export default App;
