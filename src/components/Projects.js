import React from 'react'
import './Projects.css'
import Pro1 from './pro1.jpeg'

export default function Projects() {
  return (
  <>
     
    <h3 className='h3pro'>These are my some lovely Projects ever.</h3>
    <div className='proj1'>
     
    <img src={Pro1} alt='prop'/>   <a  href='https://spotifyjay.netlify.app/' ><button className='btnprojects'>Link</button></a> <h3>Spotify Clone</h3>
 
    <p className='ppro'>This is a Spotify clone. Made by using HTML,CSS and Javascript.Here, you can listen one DJ Naggin Song</p>
    
     </div>
   

  </>
  )
}
