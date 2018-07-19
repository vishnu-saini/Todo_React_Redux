import React, { Component } from 'react';
import { Link } from '../../containers/filterContainers/Link';
import { filterActions } from '../../constants/actionNames'
import PropTypes from 'prop-types'; 

export default class FilterLink extends Component {

    render() {
        const props = this.props;
        const { store } = this.context;
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

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }


    componentWillUnmount() {
        this.unsubscribe(); // return value of `store.subscribe()`
    }
}

FilterLink.contextTypes = {
    store: PropTypes.object
  }
