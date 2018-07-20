import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const FilterLink = ({ filter, children }) => (
    <NavLink
        exact
        to={'/' + (filter === 'all' ? '' : filter)}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
        {children}
    </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
};