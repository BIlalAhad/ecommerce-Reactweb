import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Profile from './Profile'



export default function admin() {
//     const [data,setData]=useState([]);
    
//       useEffect(() => {
//     fetch("https://ecommerce-24384-default-rtdb.firebaseio.com/ecommercecontact.json")
//       .then(response => {
//         return response.json()
//       })
//       .then(res => {
//         setData(res)
//       })
//   }, [])
//   for(var key in data) {
//     console.log(data[key].name);
//   }
  
  return (
    <>
        <section className='relative'>
        <aside className='bg-blue-950 space-y-3 p-8 text-white text-lg sm:w-[22%] sm:h-[70vh] -mt-20'>
           <div className='border-b-4 border-white'>
                <NavLink to='/'>Home</NavLink>
           </div>
           <div className='border-b-4 border-white'>
           <NavLink to='/Profile'>Profile</NavLink>
           </div>
           <div className='border-b-4 border-white'>
                <NavLink to='./home'>Settings</NavLink>
           </div>
        </aside>
        
        <section className='sm:absolute sm:top-10 sm:right-10 sm:w-[73%] p-8 sm:p-0'>
            <div className='w-[100%] grid grid-cols-2 sm:grid-cols-3  gap-10 text-center'>
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
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </thead>

        </table>
        </section>
    </>
  )
}
