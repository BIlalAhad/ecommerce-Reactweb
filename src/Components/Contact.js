import React, { useEffect, useState } from 'react'

export default function Contact() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });
  let name, value;
  function post(e) {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });

  }
  // useEffect(() => {
  //   fetch("https://ecommerce-24384-default-rtdb.firebaseio.com/ecommercecontact.json")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(res => {
  //       setData(res)
  //     })
  // }, [])
  // for(var key in data) {
  //   console.log(data[key].name);
  // }
  const postdata = async (e) => {
    const { name, email, message } = user
    e.preventDefault();
    const res = await fetch("https://ecommerce-24384-default-rtdb.firebaseio.com/ecommercecontact.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
      })
    })
    if (res) {
      setUser({
        name: '',
        email: '',
        message: ''
      })
      alert('Success')
    }
  }
  return (
    <>
    <div>
    </div>
      <section className=''>
        <div>
          <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="contact.avif" alt="img" />
          <h2 className="absolute text-6xl sm:top-56 w-full mt-28 text-white font-serif text-center ">Contact Us</h2>
        </div>
        <div className='mb-20 mt-20  '>

          <form className='max-w-2xl space-y-11 mx-auto bg-gray-100 p-7 sm:p-16 rounded-3xl ' method='POST'>
            <div className='flex items-center'>
              <label className='w-[100px]'>Name:</label>
              <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' value={user.name} onChange={post} type='text' autoComplete='off' placeholder='Name' name='name' />
            </div>
            <div className='flex items-center'>
              <label className='w-[100px]'>Email:</label>
              <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' value={user.email} onChange={post} type='text' autoComplete='off' placeholder='Email' name='email' />
            </div>
            <div className='flex items-center'>
              <label className='w-[100px]'>Message:</label>
              <input className=' border-2 w-full border-gray-300 p-1 sm:p-2' autoComplete='off' value={user.message} onChange={post} type='text' placeholder='Message' name='message' />
            </div>
            <button className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800 text-center ' onClick={postdata}>Send</button>

          </form>
        </div>
      </section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.076552705968!2d72.33065467496309!3d34.77884807901707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc23c024c22aa7%3A0x527da15df47bce80!2sSwat%20mingora!5e0!3m2!1sen!2s!4v1687256956316!5m2!1sen!2s" width="600" height="450" className='w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}
