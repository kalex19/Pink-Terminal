import React, { Component } from 'react';
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <nav className="navContainer">
        <h1>PINK ● TERMINAL</h1>
        <div className="menuOptions">
          <a>ABOUT</a>
          <a>PORTFOLIO</a>
          <a>RESUME</a>
          <a>MEDIA</a>
          <a>CONTACT</a>
        </div>
      </nav>
    )
  }
}

export default Nav
