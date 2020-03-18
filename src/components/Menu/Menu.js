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
        <p>Local News</p>
        <p>Technology</p>
        <p>Entertainment</p>
        <p>Science</p>
        <p>Health</p>
      </nav>
    )
  }
}

export default Menu;
