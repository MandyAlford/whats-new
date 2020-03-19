import React, { Component } from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
class Menu extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <nav className='nav-menu'>
        <h1>What's<span>New</span></h1>
        <h2 onClick={this.props.updateCurrentCategory}>Local</h2>
        <h2 onClick={this.props.updateCurrentCategory}>Technology</h2>
        <h2 onClick={this.props.updateCurrentCategory}>Entertainment</h2>
        <h2 onClick={this.props.updateCurrentCategory}>Science</h2>
        <h2 onClick={this.props.updateCurrentCategory}>Health</h2>
      </nav>
    )
  }
}

export default Menu;
