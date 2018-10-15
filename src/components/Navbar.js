import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './Main.js';
import Projects from './Projects.js';
import Home from './Home.js';
import Resume from './Resume.js';
import Contact from './Contact.js';

class Navbar extends Component {
  render() {


    return(
      <BrowserRouter>
      <div>
      <nav>
          <ul>
          <li><Link to='/home'>Home</Link></li>
           <li><Link to='/main'>About</Link></li>
           <li><Link to='/projects'>Portfolio</Link></li>
           <li><Link to='/resume'>Resume</Link></li>
           <li><Link to='/contact'>Contact</Link></li>
          
       </ul>
       </nav>
       <Route path="/home" component={ Home } />
       <Route path="/main" component={ Main } />
       <Route path="/projects" component={ Projects } />
       <Route path="/resume" component={ Resume} />
       <Route path="/contact" component={ Contact} />
     
      </div>
      </BrowserRouter>
    )
  }
}

export default Navbar;