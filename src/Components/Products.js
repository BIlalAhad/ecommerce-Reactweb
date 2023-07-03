import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Count from '../Context/Count';

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

  return (
    <>
      <div>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="products.avif" alt="img" />
        <h2 className="absolute text-6xl sm:top-56 w-full text-white font-serif text-center ">All Products</h2>
      </div>
    <section  className='p-3 grid gap-2 sm:gap-10 grid-cols-2 sm:grid-cols-5 py-20 max-w-7xl mx-auto'> 
        {
            allproducts
            .map((items,index)=>{
                return(
                    <div className='border-2 shadow-xl border-gray-300 p-3 bg-gray-50'>
                        <img className='w-[150px] h-[150px]' src={items.image} alt='img' />
                        <h2 className='sm:font-bold text-lg text-blue-800 py-2 h-[120px]'>{items.title}</h2>
                        <span className='text-right '>Rs:-{items.price}</span>
                        <p className='h-10'>{items.category}</p>
                        <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800'onClick={()=>{additem(items)}}>Add To Cart</button>
                    </div>
                )
            })
        }
    </section>

    </>
  )
}
