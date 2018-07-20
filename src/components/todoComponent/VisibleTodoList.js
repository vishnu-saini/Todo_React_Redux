import { TodoList } from '../../containers/todoContainers/TodoList';
import { getVisibleTodos } from '../../reducers/rootReducer';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/todoActions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(
        state,
        ownProps.match.params.filter || 'all'
    )
});

const mapDispatchToProps = dispatch => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
});

export const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList))