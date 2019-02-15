import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input
                ref={node => {
                    input = node;
                }}
            />
            <button
                type="button"
                onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

/* 
//alternate solutions

Why subscribe to the store if we aren't going to calculate props from the state? Because we don't need to subcribe to the store, we can call connect() without mapStateToProps as an argument, instead passing in null. What this does is tell connect that there is no need to subscribe to the store.

It's a common pattern to inject just the dispatch function, so if connect() sees that the second argument is null (or any falsey value), you'll get dispatch injected as a prop.

What this means is that we can accomplish the same effect as the above code by removing the arguments from the connect function:

AddTodo = connect(
  state => {
    return {};
  },
  dispatch => {
    return { dispatch };
  }
)(AddTodo); 

*/

// Now the default behavior to not subscribe to the store, and inject dispatch as a prop.

export default connect()(AddTodo);
