import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMeView from './Views/aboutMeView'
import ProjectsView from './Views/projectsView'
import ContactMeView from './Views/contactMeView'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
           </li>
           <li>
             <Link to="/projects">Projects</Link>
            </li>
          <li>
            <Link to="/contactMe">Contact Me</Link>
          </li>
          </ul>

          <hr />

       
          <Route path="/about" component={AboutMeView} />
          <Route path="/projects" component={ProjectsView} />
          <Route path="/contactMe" component={ContactMeView} />
         
        </div>
    </Router>
  );
}

export default App;
