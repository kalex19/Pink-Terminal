import React, { Component } from 'react';
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <nav className="navContainer">
        <h1>PINK TERMINAL</h1>
        <div className="menuOptions">
          <button>ABOUT</button>
          <button>PORTFOLIO</button>
          <button>RESUME</button>
          <button>MEDIA</button>
          <button>CONTACT</button>
        </div>
      </nav>
    )
  }
}

export default Nav
