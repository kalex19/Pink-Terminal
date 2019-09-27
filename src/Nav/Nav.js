import React, { Component } from 'react';
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <nav className="navContainer">
        <h1>PINK ● TERMINAL</h1>
        <div className="menuOptions">
          <a href='#about'>ABOUT</a>
          <a href='#portfolio'>PORTFOLIO</a>
          <a href='#resume'>RESUME</a>
          <a href='#media'>MEDIA</a>
          <a href='#contact'>CONTACT</a>
        </div>
      </nav>
    )
  }
}

export default Nav
