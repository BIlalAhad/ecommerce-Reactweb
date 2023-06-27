import React from 'react'

export default function NoPage() {
  return (
    <div className=''>
      <div className='max-w-4xl mx-auto text-center h-[50vh] grid items-center'>
        <div className=' space-y-3'>
        <h2 className='text-7xl font-bold text-center'>
          404
        </h2>
        <p className='text-2xl'>OH! You're Lost</p>
        <p className='pb-5'>No page found / Wrong URL . Please try again  </p>
        <a href='/' className='' ><button className='p-3 px-12 bg-blue-900 text-white hover:bg-blue-800'>Home</button></a>

        </div>

      </div>
    </div>
  )
}
