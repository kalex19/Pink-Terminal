import React, { Component } from 'react';
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <nav className="navContainer">
        <h1>PINK ● TERMINAL</h1>
        <div className="menuOptions">
          <a className="link" href='#about'>ABOUT</a>
          <a className="link" href='#portfolio'>PORTFOLIO</a>
          <a className="link" href='#resume'>RESUME</a>
          <a className="link" href='#media'>MEDIA</a>
          <a className="link" href='#contact'>CONTACT</a>
        </div>
      </nav>
    )
  }
}

export default Nav
