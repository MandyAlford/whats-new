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
        <p onClick={this.props.updateCurrentCategory}>Local</p>
        <p onClick={this.props.updateCurrentCategory}>Technology</p>
        <p onClick={this.props.updateCurrentCategory}>Entertainment</p>
        <p onClick={this.props.updateCurrentCategory}>Science</p>
        <p onClick={this.props.updateCurrentCategory}>Health</p>
      </nav>
    )
  }
}

export default Menu;
