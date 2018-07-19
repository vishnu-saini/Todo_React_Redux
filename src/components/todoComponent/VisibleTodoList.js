import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos } from '../../containers/getVisibleTodos';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/todoActions';

const mapStateToProps = state => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    )
});

const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
});

export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)