import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: 'local',
      local,
      entertainment,
      health,
      science,
      technology,
    }
  }

  render () {
    return (
      <div className="app">
        <Menu updateCurrentCategory={this.updateCurrentArticles}/>
        <NewsContainer currentArticles={this.state[this.state.currentCategory]}/>
      </div>
    );
  }

  updateCurrentArticles = (event) => {
    this.setState({currentCategory: event.target.textContent.toLowerCase()})
  }
}

export default App;
