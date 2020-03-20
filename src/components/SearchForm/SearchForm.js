import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
  }

  render (){
    return (
      <form>
    <input
      id='search-input'
      type='text'
      placeholder='Search Articles'
    />
    <button className='search-button'
      onClick={this.props.articleSearch}
    >
      Search
    </button>
  </form>
    )
  }
}

export default SearchForm;
