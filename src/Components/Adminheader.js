import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Adminheader() {
  return (
    <div className='flex justify-between p-3 px-8 bg-amber-500 '>
      <NavLink to='./admin'><button className='text-3xl'>Dashboard</button></NavLink>
      <div className='flex gap-7 items-center'>
        <p>Bilal Ahad</p>
        <img className='w-12 rounded-full' src='khan.jpg' alt='img'/>
      </div>
    </div>
  )
}
