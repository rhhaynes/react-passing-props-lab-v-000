import React from 'react';

const FruitBasket = () => {
  return <div className="fruit-basket"></div>
}

FruitBasket.defaultProps = {
  currentFilter: 'all',
  filters: [],
  fruit: [],
  updateFilterCallback: null
}

export default FruitBasket;
