import React from 'react'
import Hero from './Hero'
import Trusted from './Trusted'
import Trust from './Trust'
import FeaturedProducts from './FeaturedProducts'
import { useContext } from 'react'
import App from '../App'


export default function Home() {
  
  return (
    <div className=''>
      <div>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="/home.avif" alt="img" />
        <h2 className="absolute text-6xl  sm:top-56 w-full text-white font-serif mt-28 text-center ">Home</h2>
      </div>
      <div className='p-3'>
      <Hero/>
      <FeaturedProducts/>
      <Trust/>
      </div>
      <Trusted />
      
    </div>
  )
}
