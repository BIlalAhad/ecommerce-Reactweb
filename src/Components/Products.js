import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Count from '../Context/Count';
import Searchbar from '../Context/Searchbar';
import '../App.css'
import { NavLink } from "react-router-dom";
export default function Products() {
  const [searchdata,setSearchdata]=useContext(Searchbar);
  const [allproducts,setAllproducts]=useState([]);
  const [showModal, setShowModal] = React.useState(false);

  
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
     const blur= document.getElementById('blur')
     blur.classList.toggle('brightness-50');
  
    //  clear.classList.togglt('blur-sm');
  
    }
    const unhide=()=>{
      const productsdetails= document.getElementById('details')
     productsdetails.classList.toggle('hidden');
      
    }
    console.log(showModal);
    
    

  return (
    <>
  
     <section id='blur' className=''>
     <div id='#scrolltcard'>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="products.avif" alt="img" />
        <h2 className="absolute text-6xl sm:top-56 w-full mt-28 text-white font-serif text-center ">All Products</h2>
      </div>
    <section  className='p-3 grid gap-2 sm:gap-10 grid-cols-2 sm:grid-cols-5 py-20 max-w-7xl mx-auto'> 
        {
            allproducts.filter((items)=>{
              if(searchdata==""){
                return items
              }else if(items.title.toLowerCase().includes(searchdata.toLocaleLowerCase())){
                return items
              }
            }).slice(page*5-5,page*5).map((items,index)=>{
                return(
                    <div className='border-2 shadow-xl border-gray-300 p-3 bg-gray-50 card'>
                        <img className='w-[150px] h-[150px]' src={items.image} alt='img' />
                        <h2 className='sm:font-bold text-lg text-blue-800 py-2 h-[120px]'>{items.title}</h2>
                        <span className='text-right '>Rs:-{items.price}</span>
                        <p className='h-10'>{items.category}</p>
                        <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800'onClick={()=>{additem(items)}}>Add To Cart</button>
                        <button
        className="text-end w-full p-2 font-bold text-sm"
        type="button"
        onClick={() => setShowModal(items)}
      >
       More
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {showModal.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img className='h-48' src={showModal.image} alt=''/>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {
                      showModal.description
                    }
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {
                      showModal.category
                    }
                  </p>
                  <span>
                    Price:{showModal.price}
                  </span>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                    </div>
                )
            })
        }
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
    

     </section>
    {/* <section className='max-w-xl mx-auto right-0 bottom-0  border-4 border-blue-800  absolute  bg-gray-400 top-44 hidden rounded-2xl fixed top-0 left-0 top-0 justify-center items-center ' id='details'>
      <section className='max-w-xl mx-auto text-white p-5 '>
      <div className='w-full bg-blue-900 p-8 space-y-4'>
      <button className=' text-blue-950' onClick={()=>unhide()}>❌</button>
        <h2 className='text-center p-5 text-xl font-bold font-serif border-b-2 border-black font-2xl'>{detail.title}</h2>
          <div className='mb-8'><img className='w-80 h-80 ' src={detail.image} alt=''/></div>
          <span className=''><span className=' font-lg font-bold'>Price:{detail.price}</span></span>
          <p><span className=' font-lg font-bold'>Description:{detail.description}</span></p>
          <p><span className=' font-lg font-bold'>category:{detail.category}</span></p>
          
      </div>
      </section>
    
     </section> */}


    </>
  )
}
