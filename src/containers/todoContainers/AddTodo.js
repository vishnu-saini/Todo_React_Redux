import React from 'react';
import {store} from '../../index'

let nextTodoId = 0;
export const AddTodo = (props) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text: input.value
        })
        input.value = '';
      }}>
        Add Todo
        </button>
    </div>
  );
};
