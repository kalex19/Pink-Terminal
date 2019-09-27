import React from 'react';
import "./About.css";

export default function About() {
  return (
    <section>
      <article id="about" className="profile">
      </article>
      <article class="content">
        <h3 className="aboutTitle">About Katie Lewis</h3>
        <p className="bioContent">My bio which is all about me and how I am uniquely similar to everyone else. </p>
      </article>
      <article className="socialMedia">
      <a id="icon" href=""><i class="fab fa-twitter"></i></a>
      <a id="icon" href=""><i class="fab fa-linkedin-in"></i></a>
      <a id="icon" href=""><i class="fab fa-github"></i></a>
      </article>
    </section>
  )
}
