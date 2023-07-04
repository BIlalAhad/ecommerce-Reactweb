import React from 'react';
import '../App.css';
import { TbTruckDelivery } from "react-icons/tb";
import {MdAccessTimeFilled} from "react-icons/md";
import {MdAssignmentReturn} from "react-icons/md";


export default function Trust() {
  return (
    <div className='max-w-5xl mx-auto sm:flex justify-between sm:my-32 gap-5   '>
     
      <div className='flex items-center gap-5 rounded-md  bg-gray-200 py-14 px-20 trust'>
       <div className='text-5xl text-black '>
       <TbTruckDelivery/>  
      </div> 
        <p>
        Free Home deliver
        </p>
      </div>
      <div className='flex items-center gap-5 rounded-md  bg-gray-200 py-14 px-20  trust'>
       <div className='text-5xl text-black '>
       <MdAccessTimeFilled/>  
      </div> 
        <p>
            Delivery on time
        </p>
      </div> 
      <div className='flex items-center gap-5 rounded-md  bg-gray-200 py-14 px-20 trust'>
       <div className='text-5xl text-black '>
       <MdAssignmentReturn/>  
      </div> 
        <p>
            Return Policy
        </p>
      </div>
      
    </div>
  )
}
