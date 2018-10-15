import React, { Component } from 'react';

class Project extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;
    
    return(
      <section id="projects">
      <div class="projects">
      <div>
        <p>{ this.props.title}</p>
        <div className={ classes } ></div>
        <p>{ this.props.description }</p>
      </div></div></section>
    )
  }
}

export default Project;
