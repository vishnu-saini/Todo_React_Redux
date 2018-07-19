import React from 'react';
import { todoVisibility } from '../../constants/commonConstants';
import FilterLink from '../../components/filterComponent/FilterLink';

export const FilterContainer = () => (
    <p>Show:
        {' '}<FilterLink filter={todoVisibility.SHOW_ALL} >All</FilterLink>
        {' '}<FilterLink filter={todoVisibility.SHOW_ACTIVE}> Active </FilterLink>
        {' '}<FilterLink filter={todoVisibility.SHOW_COMPLETED} > Completed </FilterLink>
    </p>
);