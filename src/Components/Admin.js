import React from 'react'
import { NavLink } from 'react-router-dom'

export default function admin() {
  return (
    <>
        <section className='relative'>
        <aside className='bg-blue-950 space-y-3 p-8 text-white text-lg w-[22%] h-[70vh] -mt-20'>
           <div className='border-b-4 border-white'>
                <NavLink to='/'>Home</NavLink>
           </div>
           <div className='border-b-4 border-white'>
                <NavLink to='./home'>Profile</NavLink>
           </div>
           <div className='border-b-4 border-white'>
                <NavLink to='./home'>Settings</NavLink>
           </div>
        </aside>
        
        <section className='absolute top-10 right-10 w-[73%] '>
            <div className='w-[100%] grid grid-cols-3  gap-10 text-center'>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                <h3 className='text-xl font-bold '>Users</h3>
                <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                <h3 className='text-xl font-bold '>Orders</h3>
                <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                <h3 className='text-xl font-bold '>Total Products</h3>
                <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                <h3 className='text-xl font-bold '>Available Products</h3>
                <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                 <h3 className='text-xl font-bold '>Today sale</h3>
                 <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                 <h3 className='text-xl font-bold '>Today sale</h3>
                 <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                 <h3 className='text-xl font-bold '>Today sale</h3>
                 <span>2000</span>
            </div>
            <div className='p-10 w-full  top-0  bg-gray-200 rounded-2xl border-b-4 border-blue-950'>
                 <h3 className='text-xl font-bold '>Today sale</h3>
                 <span>2000</span>
            </div>
            </div>
            
        </section>
        </section>
    </>
  )
}
