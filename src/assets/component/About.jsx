import React from 'react'
import WebgiViewer from './WebgiViewer'

const About = () => {
  return (
    <section id='about' className='about h-[80vh] relative rounded-xl flex flex-col justify-center lg:justify-center items-center w-full mt-20'>
      <div className="relative min-h-[50vh] p-20 pb-0 flex flex-col justify-center items-center font text-center bg-opacity-5 w-full mt-52">
        <div className=" font-cairo overflow-hidden w-3/5">
          <div className='text-2xl font-light'>
            <p>ELEVATE YOUR BRAND WITH WE CRAFT </p>
            <p>CREATIVE STUDIO, WHERE WE BELIEVE</p> 
            <p>IN CRAFTING FROM SCRATCH.</p>
          </div>
        
          {/* <a href=""className='glowingButton mt-8'>
          Contact Us
          </a> */}


        </div>
      </div>

    </section>
  )
}

export default About