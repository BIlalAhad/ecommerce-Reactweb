import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Login from './Login'
import { BsFillCartFill } from "react-icons/bs";
import Count from '../Context/Count'


export default function Header() {
  const token=localStorage.getItem('email');
  const [Add,setAdd]=useContext(Count);
 function hamburger(){
  const navitems=document.getElementById('navbar')
  navitems.classList.toggle('hidden');
 }
  return (
    <div className=' mb-20 '>
      <section className='sm:flex  justify-between items-center px-12 py-4 bg-blue-950 text-white relative '>
        <img className=' -mt-4 sm:mt-0 -ml-10 sm:ml-0 w-40 rounded-full ' src="logo.png" alt=""></img>
      
        <div className='sm:flex items-center sm:gap-8 hidden ' id='navbar'>
            <nav className='text-lg font-normal text-center grid grid-flow-row sm:grid-flow-col  py-7 sm:py-0 space-y-[5px] items-center gap-8 uppercase'>
                <NavLink to='/' className='hover:border-b-4 border-white'>Home</NavLink>
                <NavLink to='/Products' className='hover:border-b-4 border-white'>Products</NavLink>
                <NavLink to='/About' className='hover:border-b-4 border-white'>About</NavLink>
                <NavLink to='/Contact' className='hover:border-b-4 border-white'>Contact</NavLink>
                {(() => {
              if (token == ''){
                  return (
                    <NavLink to='/Login' className='hover:border-b-4 border-white'><button className='p-3 bg-blue-800 text-white hover:bg-blue-700'>Log In</button></NavLink>
                  )
              }
              
              return <NavLink to='#' className='hover:border-b-4 border-white'><button className='p-3 bg-blue-800 text-white hover:bg-blue-700'>Log Out</button></NavLink>              ;
            })()}
            </nav>
        <div className='relative'>
        <NavLink className=''  to='/cart'><BsFillCartFill className='text-3xl hover:text-blue-700  '/><p className='absolute -top-3 -right-3'>{Add.length}</p></NavLink>
        </div>
        </div>
        <button className='sm:hidden grid gap-2 border border-white p-2 absolute top-5 right-5'onClick={hamburger}>
          <div className='h-1 w-10 rounded-full bg-white'></div>
          <div className='h-1 w-10 rounded-full bg-white'></div>
          <div className='h-1 w-10 rounded-full bg-white'></div>
        </button>
      </section>
    </div>
  )
}
