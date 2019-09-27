import React from 'react'
import Project from '../Project/Project';
import projectData from './projectData';

const Portfolio = () => {

const createProject = () => {
    return projectData.map(project => {
      return <Project {...project} key={project.id} className="project"/>
    })
  }
  
    return (
      <main id="portfolio" >
        <section className="projectContainer">
          {createProject()}
        </section>
      </main>
    )
}

export default Portfolio;


