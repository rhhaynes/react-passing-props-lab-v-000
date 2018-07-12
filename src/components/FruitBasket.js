import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = ({ currentFilter, filters, fruit, updateFilterCallback }) => {
  return (
    <div className="fruit-basket">
      < />
      < />
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
