import React from 'react';
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <article className="profile">
      </article>
      <article class="content">
        <h3  className="aboutTitle">About Katie Lewis</h3>
        <h4 className="bioContentHeader">My bio: which is all about me and how I am uniquely similar to everyone else... </h4>
        <p className="bioContent">Passionate about education, social justice, and diversity in tech, I am a software engineer and a Teach For America alum. I run a nonprofit that provides programming for at-risk high school students, teaching them skills in business, leadership, social justice, and personal relations. I also love to give back by tutoring young children in reading and math and as a coding instructor for the Kode With Klossy summer camps.</p>
        <p className="bioContent">Additionally, I have a background in strategic management and marketing. I love rowing, snowboarding, and mushroom hunting. My favorite ice cream is cookie dough and I love to read nonfiction books. My biggest goal in life is to grow deeper into my potential & empower others to do the same. </p>
        <h4>We need each other to succeed. Treat others nicely. Say your sorry. Be responsible enough to admit when you are having a bad day. Know that <span className="spanStyle">you are good enough!</span></h4>
      </article>
      <article className="socialMedia">
      <a id="icon" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
      <a id="icon" href="https://linkedin.com/in/klewis8/"><i class="fab fa-linkedin-in"></i></a>
      <a id="icon" href="https://github.com/kalex19"><i class="fab fa-github"></i></a>
      </article>
    </section>
  )
}
