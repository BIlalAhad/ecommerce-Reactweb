import { useContext, useEffect } from "react"
import {BsFileEarmarkBarGraphFill} from 'react-icons/bs'
import {ImTarget} from 'react-icons/im'
import {BsArrowsFullscreen} from 'react-icons/bs'




export default function About() {

 
  return (
    <div>
      <div>
        <img className="w-full  relative brightness-50  -mt-20 h-96 object-cover" src="about.avif" alt="img" />
        <h2 className="absolute text-6xl  sm:top-56 w-full mt-28 text-white font-serif text-center  ">About Us</h2>
      </div>
      <section className="max-w-6xl mx-auto my-24">
        <div>
        <span className=" px-2 text-blue-700 font-semibold italic">
          Services
        </span>
        <h2 className="px-2 sm:w-[599px] text-xl sm:text-3xl font-serif font-bold">
          Create a Customer relationships that last forever
        </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 p-2 sm:gap-10 mt-7 sm:mt-20">
          <div className="space-y-3 ">
            <div className="text-2xl sm:text-5xl text-blue-800">
            <BsFileEarmarkBarGraphFill/>
            </div>
            <h3 className="text-xl sm:text-2xl text-blue-800">
              Improved Lifetime Value
            </h3>
            <p className="sm:text-lg text-sm">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
          </div>
          <div className="space-y-3 ">
            <div className="text-2xl sm:text-5xl text-blue-800">
            <BsArrowsFullscreen/>
            </div>
            <h3 className="text-xl sm:text-2xl text-blue-800">
              Better Accuracy
            </h3>
            <p className="sm:text-lg text-sm">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
          </div>
          <div className=" space-y-3">
            <div className="text-2xl sm:text-5xl text-blue-800">
            <ImTarget/>
            </div>
            <h3 className="text-xl sm:text-2xl text-blue-800">
              More in Context
            </h3>
            <p className="sm:text-lg text-sm">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
          </div>
        </div>

        <section className="grid sm:grid-cols-2 gap-10 mt-20 items-center bg-gray-100">
          <div className="p-7">
            <h2 className="test-lg sm:text-3xl font-bold mb-3">Welcome to our site</h2>
            <p>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
          </div>
          <img className="w-full rounded-l-full" src="welcome.avif" alt="img"/>
        </section>


        <section className="grid sm:grid-cols-2 gap-10 mt-20 items-center bg-gray-100">
          <img className="w-full rounded-r-full" src="technology.avif" alt="img"/>
          <div className="p-7">
            <h2 className="text-xl sm:text-3xl font-bold mb-3">Technology Makes Us Better</h2>
            <p>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
          </div>
        </section>
      </section>

      <section className="max-w-2xl p-5 py-12 bg-gray-100 mb-24 mx-auto text-center">
        <label className="w-full text-2xl border-b-4 border-blue-700">Get In Touch</label><br/>
        <input className="w-full text-center p-3 rounded-full mt-4 border-2 border-blue-950" type="text " placeholder="enter your enail"/>
      </section>
    </div>
  )
}
