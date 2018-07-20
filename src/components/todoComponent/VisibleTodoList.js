import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos } from '../../containers/getVisibleTodos';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/todoActions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return ({
        todos: getVisibleTodos(
            state.todos,
            ownProps.match.params.filter || 'all'
        )
    })

};

const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
});

export const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList))