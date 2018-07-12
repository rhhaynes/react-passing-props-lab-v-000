import React from 'react';

const Filter = ({ filters, handleChange }) => {
  return (
    <select defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: null
};

export default Filter;
