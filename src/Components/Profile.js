import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Profile() {
    const [name,setName]=useState('Bilal');
    const [email,setEmail]=useState('test@gmail.com');
    const [newaddress,setAddress]=useState('Pakistan');
    const [newemail,setNewemail]=useState('');
    const [address,setNewaddress]=useState('');
    const [showModal, setShowModal] = React.useState(false);
    const update=()=>{
        setNewemail(email);
        setNewaddress(address);
    }
  return (
    <>
     <section className='max-w-6xl mx-auto bg-gray-100  p-8 5 relative  mb-20 relative'>
                <div className='grid sm:grid-cols-2 max-w-2xl items-center gap-8'>
                    <img src='khan.jpg' alt='profile image'/>
                    <div className='space-y-2'>
                        <h2 className='font-bold text-xl'>Name : <span className='text-blue-900'> Bilal Ahad</span></h2>
                        <h2 className='font-bold'>Category : <span> Customer</span></h2>
                        <h2 className='font-bold'>Ranking : <span> 8/10</span></h2>
                    </div>
                </div>


       <section className='sm:flex max-w-lg justify-between mt-10'>
            <div className='text-lg text-gray-500 space-y-2'>
                <h2 className='hover:text-blue-800 cursor-pointer'>Work Links</h2>
                <h3 className='hover:text-blue-800 cursor-pointer'>
                    <NavLink to='#' >Website links</NavLink>
                </h3>
                <h3 className='hover:text-blue-800 cursor-pointer'>
                    <NavLink to='#' >Business links</NavLink>
                </h3>
                <h3 className='hover:text-blue-800 cursor-pointer'>
                    <NavLink to='#' >Intrest</NavLink>
                </h3>
                
            </div>
            <div className='space-y-2'>
                <h2><span className=' font-bold'>User ID :</span> 1423</h2>
                <h2><span className=' font-bold'>Name :</span> Bilal Ahad</h2>
                <h2><span className=' font-bold'>Email :</span> {newemail}</h2>
                <h2><span className=' font-bold'>Address  :</span>{newaddress}</h2>
            </div>
       </section>
                        <button
        className=" w-16 p-1 sm:p-2 font-bold text-sm absolute sm:top-5 top-0 right-0 sm:right-5 bg-blue-800 w-16 text-white hover:bg-blue-700"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Edit
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
              <h2 className='text-center text-lg text-blue-900 font-bold w-full'>Write New Email And Address</h2>
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
               
                <div className="relative p-6 flex-auto">
                <form className=''>
                    <input className='border-2  p-2 m-1' type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
                    <input className='border-2  p-2 m-1' type="text" placeholder='Address'  onChange={(e)=>setAddress(e.target.value)}/>
                </form>
                 
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className='p-2 bg-blue-800 hover:bg-blue-700 text-white rounded-md' onClick={()=>update()}>Submit</button>
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
       

       

       
     </section>
    </>
  )
}
