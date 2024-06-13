import React from 'react';
import middle from "../assets/Middle-circle.png";
import Small from "../assets/Small-circle2.png";
import { Link, useLocation } from 'react-router-dom';


const Half = () => {

  const location = useLocation();



  return (
    <div className='flex items-center w-[30%]  h-[90vh] z-[1]'>

      <div className='flex items-center w-[60%] h-[100%] relative max-w-[1300px] '>
        <div className="fade-in z-10 w-[22rem] h-[22rem] md:w-[22rem] md:h-[22rem] xl:w-[30rem] xl:h-[30rem] rounded-full absolute left-[-11rem] md:left-[-11rem] xl:left-[-15rem]  flex justify-center items-center">
          <img src={middle} className="w-[12rem] xl:w-[15rem]" alt="" />

          <img src={Small} alt="" className='absolute left-[22rem] top-[2rem]  xl:left-[-2rem] xl:top-[-1rem] xl:w-8 xl:h-8 w-6 h-6' />
          <img src={Small} alt="" className='absolute left-[-4rem] bottom-[1rem]    xl:left-[31rem] xl:top-[4rem] xl:w-8 xl:h-8 w-6 h-6' />
          <img src={Small} alt="" className='absolute left-[0rem] bottom-[22rem]  xl:left-[-7rem] xl:bottom-[1rem] xl:w-8 xl:h-8 w-6 h-6' />
          <img src={Small} alt="" className='absolute right-[-2rem] bottom-[4rem]  xl:bottom-[6rem] xl:right-[-3rem] xl:w-8 xl:h-8 w-6 h-6' />


          <Link

            to={"/"}
            className="absolute top-[8rem] right-7 xl:top-[11rem] xl:right-10 text-[8px]  md:text-[10px] xl:text-[15px]  z-50 px-2 py-1 rounded text-[#343333]  border-b-2 border-[#343333] cursor-pointer"

          >
            {"Home"}
          </Link>
          <Link

            to={"/features"}
            className={`absolute z-50  top-[12rem] right-5  xl:top-[17rem] xl:right-8 text-[8px]  md:text-[10px] xl:text-[15px]  px-2 py-1  border-b-2  ${location.pathname}==="/features"? text-[#EA98F7] border-[#EA98F7] : text-[#343333] border-[#343333]`}

          >
            {"Features"}
          </Link>

        </div>

        <div className=" z-1 animate-rotate-and-move-right-to-left w-[22rem] h-[22rem] md:w-[22rem] md:h-[22rem] xl:w-[30rem] xl:h-[30rem] border-t-2 border-r-2 border-gray-500 border-opacity-75 rounded-full absolute left-[-11rem] md:left-[-11rem] xl:left-[-15rem] flex justify-center items-center">
          <div className="animate-orbit-segment w-[22rem] h-[22rem] xl:w-[30rem] xl:h-[30rem] border-2 border-[#ffff] md:right-0 rounded-full absolute "></div>
        </div>
      </div>
    </div>
  );
};

export default Half;
