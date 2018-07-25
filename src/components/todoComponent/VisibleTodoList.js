import React, { Component } from 'react';
import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos } from '../../reducers/rootReducer';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';
import { withRouter } from 'react-router-dom';
import { fetchTodos } from '../../api/index';


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
        fetchTodos(this.props.filter).then(todos => {
            console.log(this.props.filter, todos)
            this.props.receiveTodos(todos)
        }
        );
    }


    fetchData() {
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
      }

    render() {
        const { toggleTodo, ...rest } = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    const filter = ownProps.match.params.filter || 'all';
    return {
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