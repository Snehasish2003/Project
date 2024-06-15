import { FaSearch,FaUserCircle } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import image  from "../assets/Vector.png"
const NavBar = () => {

  const [burger, setBurger] = useState(false);
  return (

    <div className="w-screen h-[100px] relative">
        <nav className="w-full h-full mx-auto flex items-center justify-evenly max-[1200px]:justify-between max-[600px]:p-2 overflow-x-hidden absolute gap-x-5">

            <img src={image} alt="" className="w-[166px] h-[37px] max-[1200px]:w-[80px] max-[1200px]:h-[20px] m-[20px] cursor-pointer" />

            <ul className="text-white flex gap-12 font-semibold text-[16px] leading-5 font-inter max-[1200px]:hidden mt-2">
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] hover:border-b-2 hover:border-b-[#9c6cdd]">Add PDF</li>
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] hover:border-b-2 hover:border-b-[#9c6cdd]">Features</li>
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] hover:border-b-2 hover:border-b-[#9c6cdd]">Notes</li>
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] hover:border-b-2 hover:border-b-[#9c6cdd]">Doubt</li>
            </ul>

            <div className="w-[250px] h-[40px] bg-[#2E3856] rounded-[95px] border max-[1200px]:hidden border-[#2E3856]">

                <div className="h-full w-full flex items-center justify-center gap-x-4">

                    <button className='w-[20px] h-full flex justify-center items-center'>

                        <FaSearch className='w-full h-[20px] fill-white'/>

                    </button>

                    <input type="text" placeholder="Search for anything" className=" font-normal text-base bg-transparent  placeholder:text-[#9c6cdd] outline-none text-white"/>

                </div>

            </div>

            <div className="w-[150px] h-[40px] flex items-center justify-center max-[1200px]:hidden">
                <div className="w-[50px] h-[40px] flex items-center justify-center">

                    <button className="w-[30px] h-[30px] border-2 border-[#9c6cdd] rounded-full px-1 py-1 flex justify-center items-center">
                        <BsCameraVideoFill className=" fill-[#9c6cdd]"/>
                    </button>

                </div>

                <div className="w-[100px] h-[30px] flex items-center">
                    <p className="text-[#9c6cdd] font-medium ">Watch Demo</p>
                </div>
            </div>

            <div className=" w-[50px] h-[40px] flex justify-center items-center relative max-[1200px]:hidden">

                <div className="w-[10px] h-[10px] border rounded-full bg-[#F6406C] top-[5px] left-[36px] z-[1] absolute" />

                <div className="w-[40px] h-[40px] border-2 rounded-full border-gray-600 px-1 py-1 flex justify-center items-center absolute hover:border-[#9c6cdd] hover:cursor-pointer">
                    <IoMdNotifications className="fill-[#9c6cdd] w-full h-full"/>
                </div>

            </div>

            <div className="w-[50px] h-[40px] flex justify-center items-center max-[1200px]:hidden">
                <FaUserCircle className="fill-[#9c6cdd] w-[40px] h-full hover:fill-white hover:border-[#9c6cdd] hover:border rounded-full hover:cursor-pointer"/>
            </div>

            <button className="w-[60px] h-[40px] hidden max-[1200px]:block absolute right-0 m-[20px]">

                {
                    !burger && 
                    <GiHamburgerMenu className=" w-full h-full fill-white " onClick={() => setBurger(true)}/>
                }
                
            </button>

        </nav>

        {
            burger &&
            <div className="w-[300px] h-[450px] bg-black absolute right-0 top-0 flex-col justify-center items-center gap-y-4 hidden max-[1200px]:flex z-[4] pt-2">

            <ul className="text-white flex  flex-col font-semibold text-[16px] leading-5 font-inter w-[100%]">
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] w-full hover:bg-white flex items-center justify-center h-[50px]">Add PDF</li>
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] w-full hover:bg-white flex items-center justify-center h-[50px]">Features</li>
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] w-full hover:bg-white flex items-center justify-center h-[50px]">Notes</li>
                <li className="hover:cursor-pointer hover:text-[#9C6CDD] w-full hover:bg-white flex items-center justify-center h-[50px]">Doubt</li>
            </ul>

            <div className="flex items-center justify-center gap-x-4 ">
                
                <div className="w-[50px] h-[40px] flex justify-center items-center relative">
            
                    <div className="w-[10px] h-[10px] border rounded-full bg-[#F6406C] top-[2px] left-[35px] z-[1] absolute" />
        
                    <div className="w-[40px] h-[40px] border-2 rounded-full border-gray-600 px-1 py-1 flex justify-center items-center absolute hover:border-[#9c6cdd]">
            
                        <IoMdNotifications className="fill-[#9c6cdd] w-full h-full"/>
            
                    </div>

                </div>

                <div className="w-[40px] h-[40px] flex justify-center items-center">
                    <FaUserCircle className="fill-[#9c6cdd] w-full h-full hover:fill-white"/>
                </div>
            </div>

            <div className="w-[250px] h-[40px] bg-[#2E3856] rounded-[95px]  border-[#2E3856]">

                <div className="h-full w-full flex items-center justify-center gap-x-4">

                    <button className='w-[20px] h-full flex justify-center items-center'>

                        <FaSearch className='w-full h-[20px] fill-white'/>

                    </button>

                    <input type="text" placeholder="Search for anything" className=" font-normal text-base bg-transparent  placeholder:text-[#9c6cdd] outline-none text-white"/>

                </div>

            </div>

            <div className="w-[150px] h-[40px] flex items-center justify-around mt-2">
                <div className="w-[50px] h-[40px] flex items-center justify-center">

                    <button className="w-[30px] h-[30px] border-2 border-[#9c6cdd] rounded-full px-1 py-1 flex justify-center items-center">
                        <BsCameraVideoFill className="fill-[#9c6cdd]"/>
                    </button>

                </div>

                <div className="w-[100px] h-[30px] flex items-center">
                    <p className="text-[#9c6cdd] font-medium ">Watch Demo</p>
                </div>
            </div>

            {
                burger && 
                <div className="flex items-center justify-center font-bold">

                    <p className="text-[#f6406c] opacity-50">Close</p>
                    <button className="w-[35px] h-[50px]" onClick={() => setBurger(false)}>
                        <IoClose className="fill-[#f6406c] w-[30px] h-[40px] opacity-50"/>
                    </button>
                    
                </div>
                
            }
            

        </div>


        }


    </div>
  )
}

export default NavBar;