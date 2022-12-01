import React from 'react'

import Contact from './Contact'
import About from './About'
import Onofflight from './Onofflight'

function Header() {
  return (
    <>
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact{Contact}</li>
        <li>Onofflight</li>
       </ul>
    
      <Contact/>
      <About/>
      <Onofflight/>
    </>
  )
}

export default Header