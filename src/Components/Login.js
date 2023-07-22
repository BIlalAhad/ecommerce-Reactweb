import React, { useState } from 'react'

export default function Login() {
  const [email,setEmail]=useState();
  const [passward,setPassward]=useState();
  const storedata=()=>{
    localStorage.setItem('email',email);
    // localStorage.setItem('password',passwrd);
  }

  return (
    <div className='mb-10 sm:mb-20 p-3'>
      <img className='max-w-2xl mx-auto w-[400px]' src="logo.png" alt='logo'/>
      <form className='max-w-2xl space-y-11 mx-auto bg-gray-100 p-7 sm:p-16 rounded-3xl'
  // action="https://formspree.io/f/myyarrjb"
  // method="POST"
>
  
  <div className='flex items-center'>
  <label className='w-[100px]'>Email:</label>
  <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' type='text' autoComplete='off' placeholder='Email' name='email'onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className='flex items-center'>
  <label className='w-[100px]'>Passward:</label>
  <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' autoComplete='off' type='password' placeholder='Passward' name='Passward' onChange={(e)=>setPassward(e.target.value)}/>
  </div>
  <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800 text-center ' type='submit' onClick={()=>storedata()}>Login</button>

</form>
    </div>
  )
}
