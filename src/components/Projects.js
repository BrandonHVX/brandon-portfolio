import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project.js'



export default class Projects extends Component{
  render(){
    
    return (
      <div class="project-header">
      <h1>Projects</h1>
      <section id="projects">
      {projects.allProjects.map((project, element) =>{
      return <div>
      <Project title={project.title} imgName = {project.imgName} description = {project.description} />
          
        
        </div>
        })
        }
     </section></div>
    )
  }
}