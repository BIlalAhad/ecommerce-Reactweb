import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Items from '../Context/Items';

export default function Categories() {
    const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("#")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(()=>{
    fetchUserData()
  },[])
console.log(users);
  return (
    <>
        <div>
            Shose And bages
        </div>
        <div className='grid grid-cols-5 gap-8'>
            {
                users.map(Items=>{
                    return(
                        <>
                            <div>
                                <image src={Items.image} alt='img'/>
                                <h2>{Items.title}</h2>
                                <p>{Items.description}</p>
                                <span>{Items.price}</span>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}
