import React, { Component } from 'react';

import Navbar from './components/Navbar.js';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './components/Main.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js'

class App extends Component {
  render() {
    return (
    
     
      <div>
        <Navbar />
       
        
      
      </div>
    );
  }
}

export default App;
