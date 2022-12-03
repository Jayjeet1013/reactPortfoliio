import React from 'react'
import Image from './1.jpeg'
import Header from './Header'
import './Home.css'

export default function Home() {
  return (

   <>
    <Header />  
    <img className='img' src={Image} />
  
    <div class="wrapper">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts">
      <li><span>YouTuber</span></li>
      <li><span>Designer</span></li>
      <li><span>Developer</span></li>
      <li><span>Freelancer</span></li>
    </ul>
  </div>

</>
  )
}
