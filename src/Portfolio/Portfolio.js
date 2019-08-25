import React, { Component } from 'react'
import Project from '../Project/Project';
import projectData from './projectData';



export default class Portfolio extends Component {

  componentDidMount = () => {
    this.createProject()
  }
  
  createProject = () => {
    projectData.forEach(project => {
      console.log(project)
      //what goes here?
    })
  }

  render() {
    return (
      <main>
        <Project/>
      </main>
    )
  }
}

