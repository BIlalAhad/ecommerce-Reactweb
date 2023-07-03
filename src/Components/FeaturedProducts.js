import React, { useContext, useEffect } from 'react'
import Count from '../Context/Count'
import Items from '../Context/Items'

export default function FeaturedProducts() {
  const [products, setProducts] = useContext(Items)
  const [cart, setCart] = useContext(Count)

  const fetchUserData = () => {
    fetch('data.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setProducts(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const addItem = (item) => {
    setCart([...cart, item])
  }

  return (
    <>
      <section className='grid gap-10 grid-cols-4 py-20 max-w-5xl mx-auto'>
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className='border-2 shadow-xl border-gray-300 p-3 bg-gray-50'
            >
              <img className='w-[150px] h-[150px]' src={item.image} alt='img' />
              <h2 className='font-bold text-lg text-blue-800 py-2 h-[120px]'>
                {item.title}
              </h2>
              <span className='text-right '>Rs:-{item.price}</span>
              <p className='h-10'>{item.category}</p>
              <button
                className='p-3 w-full bg-blue-900 text-white hover:bg-blue-800'
                onClick={() => {
                  addItem(item)
                }}
              >
                Add To Cart
              </button>
            </div>
          )
        })}
      </section>
    </>
  )
}
