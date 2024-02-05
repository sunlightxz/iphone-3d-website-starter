import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[350px] bg-white rounded-3xl mt-20 relative flex flex-col justify-center items-center'>
      <div className="text-black flex flex-col justify-center items-center">
        <h1 className='text-[46px] font-bold leading-[56px] capitalize font-grifter'>Let's work together</h1>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate sit amet consectetur, !</p>
        <button className='my-3 glowingButton bg-black text-white items-center justify-start border w-fit px-5 py-3 overflow-hidden font-bold rounded-[10px] group/btn'>Contact Us</button>
      </div>

      <div className="star-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Contact