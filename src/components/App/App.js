import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <NewsContainer localArticles={this.state.local}/>
      </div>
    );
  }
}

export default App;
