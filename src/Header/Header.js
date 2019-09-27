import React from 'react';
import "./Header.css";
import { Slide } from 'react-slideshow-image';

export default function Header() {

  return (
    <header>
      <main className="gallery">
        <h2 className="header">Dear Kate,</h2>
        <h3 className="message">Be unapologetically proud of who you are!</h3>
        <p  className="icon"><a className="iconStyle">◮</a></p>
      </main>
    </header>
  )
}