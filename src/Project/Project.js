import React from 'react';

const Project = (props) => {

  const showSkills = () => {
    const skills = props.skillsUsed
    return skills.map(skill => {
      return <li className="skilItem">{skill}</li>
    })
  }

  return (
    <section>
      <h2>{props.title}</h2>
      <img src={props.image}/>
      <p>{props.description}</p>
      <ul>{showSkills()}</ul>
      <i class="fab fa-github"><a href={props.url}></a></i>
    </section>
  )
}

export default Project;
