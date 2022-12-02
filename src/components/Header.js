import React from 'react'
import './Header.css'
import Contact from './Contact'
import About from './About'
import Onofflight from './Onofflight'

function Header() {
  return (
    <>
       <ul>    <li><a href='<Onofflight/>'>Onofflight</a></li>
       
        <li><a href='<About/>'>About</a></li>
        <li> <a href='<Contact/>'>Contact</a></li>
     <li><a href='<Home/>'>Home</a></li>
       </ul>
    
    
  
    </>
  )
}

export default Header