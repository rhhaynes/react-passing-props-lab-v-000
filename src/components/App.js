import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';
import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchFilters();
  }

  fetchFilters(){
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleChange(event){
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <div class="fruit-basket">
        <Filter filters={this.state.filters} handleChange={this.handleChange} />
        <FilteredFruitList filter={this.state.currentFilter} fruit={this.state.fruit} />;
      </div>
    );
  }
}
