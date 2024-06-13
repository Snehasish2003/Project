import React from 'react'
import middle from "../assets/Middle-circle.png"
import Small from "../assets/Small-circle2.png"


const Hero = () => {
  return (
    <div className='flex justify-center items-center w-full h-[90vh] z-10 relative  '>
      <div className=' flex justify-center items-center  w-[60%]  h-[100%] relative  max-w-[800px] md:min-w-[540px]'>
        <div className='absolute w-[80%] h-[60%] left-0 flex flex-col justify-center fade-in gap-1 md:gap-3 '>
          <h1 className='text-5xl sm:text-6xl  md:text-7xl  lg:text-8xl font-bold'>Welcome.</h1>
          <h3 className='text-md  xl:text-lg font-medium'>PDF to video</h3>
          <p className=' text-neutral-500  w-[21rem] sm:text-[10px] md:text-[13px] md:w-[25rem] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
        </div>
        <div className=" w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem]  lg:w-[30rem]  lg:h-[30rem]  rounded-full absolute border-none right-[1.4rem] sm:right-[-1rem] md:right-[-1.5rem] lg:right-0 flex justify-center items-center fade-in opacity-100 ">
          <img src={middle} className='w-[10rem] sm:w-[10rem] lg:w-[15rem]  ' alt="" />
          <img src={Small} alt="" className='absolute  
        left-[22rem] top-[2rem]  lg:left-[-2rem] lg:top-[-1rem] lg:w-8 lg:h-8 w-6 h-6' />
          <img src={Small} alt="" className='absolute  left-[-4rem] bottom-[1rem]    lg:left-[31rem] lg:top-[4rem] lg:w-8 lg:h-8 w-6 h-6' />
          <img src={Small} alt="" className='absolute left-[0rem] bottom-[22rem]  lg:left-[-7rem] lg:bottom-[1rem] lg:w-8 lg:h-8 w-6 h-6' />
          <img src={Small} alt="" className='absolute  right-[-2rem] bottom-[4rem]  lg:bottom-[6rem] lg:right-[-3rem] xlgw-8 lg:h-8 w-6 h-6' />
        </div>
        <div className=" w-[18rem] h-[18rem] animate-rotate-and-move   lg:w-[30rem]  lg:h-[30rem] border-b-2 border-t-2 border-r-2  half-circle border-gray-500 border-opacity-75 rounded-full absolute right-[1.4rem] sm:right-[1rem] md:right-1 flex justify-center items-center   ">
          <div className=" animate-orbit-segment w-[18rem] h-[18rem]   lg:w-[30rem]  lg:h-[30rem] border-2  border-[#ffff]  rounded-full absolute   "></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
