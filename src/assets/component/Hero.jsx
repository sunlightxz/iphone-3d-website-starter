import React from 'react'
import WebgiViewer from './WebgiViewer'
import About from './About'

const Hero = () => {
  return (
    <section id='hero' className='w-full mt-28 md:mt-0 hero'>
      {/* <div className="absolute h-[180vh] w-full top-0 left-0">
        <div className="h-screen w-screen z-10 absolute bg-gradient-to-b from-black/70 via-black/50 to-black/0 ">
.
        </div>
      </div> */}
      <div className="">
        <WebgiViewer/>

      </div>
      <div className="h-screen flex flex-col justify-start lg:justify-center pb-40 pt-20 px-10 lg:px-20 items-center  w-full ">
        <div className="z-10 relative justify-center flex lg:h-full  h-[50%] w-full flex-col gap-0">
            <h1 className='text-center font-semibold lg:leading-[15vh] text-5xl lg:text-[15vh] text-white flex flex-col'>
                <span>WE CRAFT</span>
                <span className='my-3'>FROM</span>
                <span>SCRATCH</span>
            </h1>
        </div>
      </div>
      <About/>

    </section>
  )
}

export default Hero