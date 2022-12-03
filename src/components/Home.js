import React from 'react'
import Image from './1.jpeg'
import Header from './Header'
import './Home.css'

export default function Home() {
  return (
<>
   
    <Header />
   <div className='intro'>
   <img className='img' src={Image} />
    <h1>Jayjeet Kumar But, Call me Jay</h1>
    <p>Hi, I am a web3 developer</p>
    </div> 
</>
  )
}
