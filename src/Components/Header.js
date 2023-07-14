import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Navigate, redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Categories from './Categories'
import Login from './Login'
import { BsFillCartFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Count from '../Context/Count'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../Context/Searchbar';
import Items from '../Context/Items'
import Searchitem from '../Context/Searchitem'




export default function Header() {

  const Navigate = useNavigate();
  const token = localStorage.getItem('email');
  const [showModal, setShowModal] = React.useState(false);
  const [Add, setAdd] = useContext(Count);
  const [newsearch, setNewsearch] = useState([])
  const [searchdata, setSearchdata] = useContext(Searchbar);
  const [users,setUsers]=useContext(Searchitem);



  const Search = () => {
    fetch('data.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setUsers(data)
      })
  }
 

useEffect(()=>{
  Search()
},[])


  function hamburger() {
    const navitems = document.getElementById('navbar')
    navitems.classList.toggle('hidden');
  }
  function Dropdown() {
    const dropdownitem = document.getElementById('dropdownitem');
    dropdownitem.classList.toggle('hidden');
  }
  // const navigate = useNavigate();
  // const handleSubmit=(event)=>{
  //   event.preventDefault();
  //   navigate('/Search');
  // }


  const search = () => {
    Navigate('Products')
  }
  return (
    <section>
      <div className=' mb-20  sm:sticky top-0 z-10 opacity-95' >
        <section className='sm:flex  justify-between items-center px-12 py-4 bg-blue-950 text-white relative '>
          <img className=' -mt-4 sm:mt-0 -ml-10 sm:ml-0 w-40 rounded-full ' src="logo.png" alt=""></img>
          <div className='w-full sm:w-1/3 flex gap-2 items-center'><form className='w-full'><input className='w-full p-2 rounded-3xl text-center text-blue-900' type='text' name='search' placeholder='search here ...' onChange={(e) => setSearchdata(e.target.value)} /></form><button className='text-3xl'  > <NavLink to='Search' className=''><BiSearchAlt /></NavLink></button></div>
          <div className='sm:flex items-center sm:gap-8 hidden ' id='navbar'>
            <nav className='text-lg font-normal text-center grid grid-flow-row sm:grid-flow-col  py-7 sm:py-0 space-y-[5px] items-center gap-8 uppercase'>
              <NavLink to='/' className='hover:border-b-4 border-white'>Home</NavLink>
              <NavLink to='/Products' className='hover:border-b-4 border-white'>Products</NavLink>

              <section>
                <div className='flex gap-2'>
                  <NavLink to='/Categories' className='hover:border-b-4 border-white'>Categories</NavLink>
                  <button className='text-amber-600' id='drop' onClick={() => Dropdown()}><AiFillCaretDown /></button>
                </div>
                <div className='hidden absolute w-36 mt-2 ' id='dropdownitem'>
                  <div className='bg-amber-600 w-full ring-2 ring-blue-900 p-2'>
                    <NavLink to='#' className=''>Shirts</NavLink>
                  </div>
                  <div className='bg-amber-600 w-full ring-2 ring-blue-900 p-2'>
                    <NavLink to='#' className=''>Bags</NavLink>
                  </div>
                  <div className='bg-amber-600 w-full ring-2 ring-blue-900 p-2'>
                    <NavLink to='#' className=''>Watches</NavLink>
                  </div>
                  <div className='bg-amber-600 w-full ring-2 ring-blue-900 p-2'>
                    <NavLink to='#' className=''>Machines</NavLink>
                  </div>
                </div>
              </section>

              <NavLink to='/About' className='hover:border-b-4 border-white'>About</NavLink>
              <NavLink to='/Contact' className='hover:border-b-4 border-white'>Contact</NavLink>
              {(() => {
                if (token == '') {
                  return (
                    <NavLink to='/Login' className=' border-white'><button className='p-3 bg-amber-500 text-white bg-amber-600 hover:border-b-4 rounded-md'>Log In</button></NavLink>
                  )
                }

                return <NavLink to='#' className=' border-white'><button className='p-3 bg-amber-500 text-white hover:border-b-4 bg-amber-600 rounded-md'>Log Out</button></NavLink>;
              })()}
            </nav>
            <div className='relative'>
              <NavLink className='' to='/cart'><BsFillCartFill className='text-3xl hover:text-blue-700  ' /><p className='absolute -top-3 -right-3'>{Add.length}</p></NavLink>
            </div>
          </div>
          <button className='sm:hidden grid gap-2 border border-white p-2 absolute top-5 right-5' onClick={hamburger}>
            <div className='h-1 w-10 rounded-full bg-white'></div>
            <div className='h-1 w-10 rounded-full bg-white'></div>
            <div className='h-1 w-10 rounded-full bg-white'></div>
          </button>
        </section>
      </div>
      <div id='searchsection' className=''>

    
      </div>
     
    </section>
  )
}
