import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = ({ currentFilter, filters, fruit, updateFilterCallback }) => {
  return (
    <div className="fruit-basket">
      <Filter filters={filters} handleChange={updateFilterCallback} />
      <FilteredFruitList filter={currentFilter} fruit={fruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  currentFilter: 'all',
  filters: [],
  fruit: [],
  updateFilterCallback: null
}

export default FruitBasket;
