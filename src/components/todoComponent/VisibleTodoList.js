import React, { Component } from 'react';
import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos } from '../../containers/getVisibleTodos';
import PropTypes from 'prop-types';
export default class VisibleTodoList extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();
        return (
            <TodoList
                todos={
                    getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick={id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
        );
    }
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
  }