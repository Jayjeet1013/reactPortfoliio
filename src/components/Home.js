import React from 'react'
import Image from './1.jpeg'
import Header from './Header'
import './Home.css'

export default function Home() {
  return (
<>
   
    <Header />
    <img className='img' src={Image} />
</>
  )
}
