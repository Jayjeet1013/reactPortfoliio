import React from 'react'
import Image from './Photo/1.jpeg'
import Footer from './Footer'
import Header from './Header'
import './Home.css'



import Projects from './Projects'
import Contact from './Contact'
import About from './About'

export default function Home() {
  return (

   <>
    <Header  />  
    <img className='img' alt='prop' src={Image} />
 <h2>I am Jayjeet Kumar </h2>
 <h3>But, Call me Jay.</h3>
 <p>Trying to learn and explore web3</p>
 

 <Projects/>
 <About/>
 <Contact/>
<Footer/>


</> 


  )
}
