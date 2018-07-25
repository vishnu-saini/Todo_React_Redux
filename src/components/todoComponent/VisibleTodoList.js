import React, { Component } from 'react';
import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../../reducers/rootReducer';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';
import { withRouter } from 'react-router-dom';
import { FetchError } from '../../containers/todoContainers/FetchError'

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter).then(() => console.log('done!'));
    }

    render() {
        const { isFetching, errorMessage, toggleTodo, todos } = this.props;

        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            );
        }

        if (isFetching && !todos.length) {
            return <p>Loading...</p>;
        }
        return (
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const filter = ownProps.match.params.filter || 'all';
    return {
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        todos: getVisibleTodos(state, filter),
        filter
    }
};

/* const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    },
    receiveTodos
}); */

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    /* mapDispatchToProps */
    todoActions
)(VisibleTodoList));

export default VisibleTodoList;