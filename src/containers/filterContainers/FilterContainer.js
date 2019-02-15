import React from 'react';
import { filterPaths } from '../../constants/commonConstants';
import FilterLink from '../../components/filterComponent/FilterLink';

const FilterContainer = () => (
    <p>
        Show: <FilterLink filter={filterPaths.ALL}>All</FilterLink>{' '}
        <FilterLink filter={filterPaths.ACTIVE}> Active </FilterLink>{' '}
        <FilterLink filter={filterPaths.COMPLETED}> Completed </FilterLink>
    </p>
);

export default FilterContainer;
