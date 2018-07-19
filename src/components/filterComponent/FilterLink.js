import React, { Component } from 'react';
import { Link } from '../../containers/filterContainers/Link';
import { filterActions } from '../../constants/actionNames'
import { store } from '../../index';
export default class FilterLink extends Component {

    render() {
        const props = this.props;
        const state = store.getState();

        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() =>
                    store.dispatch({
                        type: filterActions.SET_VISIBILITY_FILTER,
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        );

    }
}
