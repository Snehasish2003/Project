import React from 'react'
import logo from "../assets/Vector.png"
import search from "../assets/search.png"
import {  CirclePlay } from 'lucide-react';
import bell from "../assets/bell.svg"
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0 bg-black">
                        <img className=' w-[8rem] h-[2rem]' src={logo} alt="" />
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12 text-white text-md font-medium tracking-wide' >

                        <li className="py-4">
                            <Link to="/addPdf">Add Pdf</Link>
                            
                        </li>
                        <li className="py-4">
                            <Link to="/features">Features</Link>

                        </li>
                        <li className="py-4">
                            <Link to="/notes">Notes</Link>

                        </li>
                        <li className="py-4">
                            <Link to="/doubt">Doubt</Link>
                        </li>

                    </ul>
                    <div className="hidden lg:flex justify-center items-center gap-4">
                                <div className='flex bg-[#2E3856] border-none rounded-3xl h-8 px-3 items-center gap-2'>
                                <img  src={search} alt="" className='w-5 h-5'  />
                                    <input className='outline-none border-none bg-transparent bg-none w-36 ' type="text" placeholder='Search for anything' />
                                </div>
                                <div className='flex gap-1 items-center  cursor-pointer   '>
                                    <CirclePlay color='#9C6CDD' />
                                    <p className='text-[#9C6CDD]'>Watch Demo</p>
                                </div>
                                <div className='rounded-full border border-[#9C6CDD] cursor-pointer'>
                                    <img src={bell} alt="" className='h-7 w-7 p-1' />
                                </div>
                                <div className='rounded-full cursor-pointer'>
                                    <img src={profile} alt="" className='h-10 w-10 p-1 rounded-full' />
                                </div>
                    </div>
                    
                </div>
            </div>

        </nav>
    )
}

export default Header
