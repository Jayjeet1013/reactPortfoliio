import React from 'react'
import { Routes, Route } from "react-router-dom"

import './Header.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'


function Header() {
  return (
    <>
       <ul>  
        <li><a href='<Onofflight/>'>Onofflight</a></li>
       
        <li><a href='./About.js'>About</a></li>
        <li><a href='<Projects/>' >Projects</a></li>
        <li> <a href='<Contact/>'>Contact</a></li>
     <li><a href='<Home/>'>Home</a></li>
       </ul>
    
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="projects" element={ <Projects/> } />
      </Routes>
  
    </>
  )
}

export default Header