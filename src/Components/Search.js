import React from 'react'
import Searchbar from '../Context/Searchbar'
import { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Searchitem from '../Context/Searchitem';

export default function Search() {
    const [searchdata,setSearchdata]=useContext(Searchbar);
    const [users,setUsers]=useContext(Searchitem);
    const [price ,setPrice]=useState(0);

  return (
    <div className='mb-20 flex'>
       <div className=' grid grid-cols-4 px-8 gap-7 '>

{users
   .filter((items)=>{
         if(searchdata==""){
           return ""
         }else if(items.title.toLowerCase().includes(searchdata.toLocaleLowerCase())||items.price<price){
           return items
         }
       })
       .map((item) => {
     return (
       <div className="mb-8"
         key={item.id}
         className='border-2 shadow-2xl border-gray-300 p-3  card '
       >
         <img className='w-[150px] h-[150px]' src={item.image} alt='img' />
         <h2 className='font-bold text-lg text-blue-800 py-2 h-[120px]'>
           {item.title}
         </h2>
         <span className='text-right '>Rs:-{item.price}</span>
         <p className='h-10'>{item.category}</p>
         <p>{item.description}</p>
         
       </div>
     )
   })}
</div>

<section className='w-sm p-12 text-center justify-center rounded-l-2xl text-white bg-blue-950'>
<h2 className='text-2xl font-bold'>
    Filter Through Price
</h2>
<span>{price} <span className='font-bold'>$</span></span>
<input type='range' value={price} min={10} max={3000} onChange={(e)=>setPrice(e.target.value)}/>
</section>

    </div>
  )
}
