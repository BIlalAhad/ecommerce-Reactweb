import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Count from '../Context/Count';
import '../App.css'
import { NavLink } from "react-router-dom";
export default function Products() {
 
  const [allproducts,setAllproducts]=useState([]);
  const fetchUserData = () => {
      fetch("data.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setAllproducts(data)
        })
    }
    useEffect(()=>{
      fetchUserData()
    },[]);
    const [Add,setAdd]=useContext(Count);
    function additem(items){
      setAdd([...Add,items]);  

    }
    const [page,setPage] =useState(1);
    function handlepagination(selected){
      setPage(selected+1);
    }
    const [detail,setDetail]=useState('');
    const details=(item)=>{
      setDetail(item);  
     const productsdetails= document.getElementById('details')
     productsdetails.classList.toggle('hidden');
  
    }
    const unhide=()=>{
      const productsdetails= document.getElementById('details')
     productsdetails.classList.toggle('hidden');
    }

  return (
    <>
      <div id='#scrolltcard'>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="products.avif" alt="img" />
        <h2 className="absolute text-6xl sm:top-56 w-full text-white font-serif text-center ">All Products</h2>
      </div>
    <section  className='p-3 grid gap-2 sm:gap-10 grid-cols-2 sm:grid-cols-5 py-20 max-w-7xl mx-auto'> 
        {
            allproducts.slice(page*5-5,page*5).map((items,index)=>{
                return(
                    <div className='border-2 shadow-xl border-gray-300 p-3 bg-gray-50 card'>
                        <img className='w-[150px] h-[150px]' src={items.image} alt='img' />
                        <h2 className='sm:font-bold text-lg text-blue-800 py-2 h-[120px]'>{items.title}</h2>
                        <span className='text-right '>Rs:-{items.price}</span>
                        <p className='h-10'>{items.category}</p>
                        <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800'onClick={()=>{additem(items)}}>Add To Cart</button>
                        <NavLink to="#scrolltocard" ><button className='text-end text-sm font-bold text-blue-900 w-full' onClick={()=>details(items)}>
                more
              </button></NavLink>
                    </div>
                )
            })
        }
    </section>
    <section id='scrolltocard' className='w-full h-[100vh] -top-2 absolute  bg-gray-100 top-44 hidden rounded-2xl fixed top-0 left-0 right-0' id='details'>
        <section className='max-w-xl mx-auto text-white p-5 '>
        <div className='w-full bg-blue-900 p-8 space-y-4'>
        <button className=' text-blue-950' onClick={()=>unhide()}>❌</button>
          <h2 className='text-center p-5 text-xl font-bold font-serif border-b-2 border-black font-2xl'>{detail.title}</h2>
            <div className='mb-8'><img className='w-80 ' src={detail.image} alt=''/></div>
            <span className=''><span className=' font-lg font-bold'>Price:{detail.price}</span></span>
            <p><span className=' font-lg font-bold'>Description:{detail.description}</span></p>
            <p><span className=' font-lg font-bold'>category:{detail.category}</span></p>
            
        </div>
        </section>
        </section>
    
    
    {
      <section className='text-center p-5 space-x-4'>
        <span className='text-4xl hover:cursor-pointer font-bold '>↩</span>
        {[...Array(allproducts.length/5)].map((_,i)=>{
          return (<span className='hover:cursor-pointer' onClick={()=>handlepagination(i)}>{i+1}</span>)
        })}
        <span className='text-4xl hover:cursor-pointer font-bold '>↪</span>
      </section>
    }
    

    </>
  )
}
