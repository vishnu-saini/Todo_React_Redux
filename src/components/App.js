// library imports
import React from 'react';

// component imports
import AddTodo from '../containers/todoContainers/AddTodo';
import { FilterContainer } from '../containers/filterContainers/FilterContainer';

import { VisibleTodoList } from './todoComponent/VisibleTodoList';

const App = ({ match }) => (
  <div>
    <AddTodo />
    <FilterContainer />
    <VisibleTodoList filter={match.params.filter || 'all'} />
  </div >
);

export default App;