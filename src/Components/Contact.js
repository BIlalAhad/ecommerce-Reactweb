import React from 'react'

export default function Contact() {
  return (
    <> 
   <section className='m-3'>
   <div>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="contact.avif" alt="img" />
        <h2 className="absolute text-6xl sm:top-56 w-full mt-28 text-white font-serif text-center ">Contact Us</h2>
      </div>
    <div className='mb-20 mt-20  '>
      
     <form className='max-w-2xl space-y-11 mx-auto bg-gray-100 p-7 sm:p-16 rounded-3xl '
  action="https://formspree.io/f/mrgvnred"
  method="POST"
>
  <div className='flex items-center'>
  <label className='w-[100px]'>Name:</label>
  <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' type='text' autoComplete='off' placeholder='Name' name='name'/>
  </div>
  <div className='flex items-center'>
  <label className='w-[100px]'>Email:</label>
  <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' type='text' autoComplete='off' placeholder='Email' name='Email'/>
  </div>
  <div className='flex items-center'>
  <label className='w-[100px]'>Message:</label>
  <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' autoComplete='off' type='text' placeholder='Message' name='Message'/>
  </div>
  <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800 text-center ' type='submit'>Send</button>

</form>
    </div>
   </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.076552705968!2d72.33065467496309!3d34.77884807901707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc23c024c22aa7%3A0x527da15df47bce80!2sSwat%20mingora!5e0!3m2!1sen!2s!4v1687256956316!5m2!1sen!2s" width="600" height="450" className='w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}
