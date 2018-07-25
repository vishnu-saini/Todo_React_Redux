import React, { Component } from 'react';
import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos, getIsFetching } from '../../reducers/rootReducer';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';
import { withRouter } from 'react-router-dom';


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
        const { isFetching, toggleTodo, todos } = this.props;
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