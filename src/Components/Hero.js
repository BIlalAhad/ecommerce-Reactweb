import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className='max-w-5xl mx-auto grid  sm:grid-cols-2 gap-8 items-center '>
        <div>
            <span className='text-sm text-blue-800'>Welcome to</span>
            <h1 className='font-bold text-lg sm:text-4xl font-serif mb-2'>Ecommerce Shop</h1>
            <p className='mb-3'> long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and </p>
            <button className='p-3 bg-blue-900 text-white hover:bg-blue-800'>Shop Now</button>
        </div>
        <div>
            <img src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/family-day1.jpg" alt="placeholder" />
        </div>
      </section>

     
    </div>
  )
}
