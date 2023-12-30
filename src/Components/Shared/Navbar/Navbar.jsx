import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/Pics/logo-for-expo.png'
function Navbar() {
    return (
        <div className=' '>
            <header aria-label="Site Header" className="  bg-violet-600 ">
                <div className="mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className=" block text-white" >
                                <span className="sr-only">Home</span>
                                <img className='w-32 rounded' src={logo} alt="" />

                            </a>
                        </div>


                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <div className="sm:flex sm:gap-4">
                                    <ul className="flex items-center gap-6 text-sm text-white">
                                       <Link to='/'> <li className="text-base-300 font-semibold font-3xl transition hover:text-500/75 me-7" >Home</li></Link>
                                        <Link to='/services'><li className="text-base-300 font-semibold font-3xl transition hover:text-500/75 me-7" >Sevices</li></Link>
                                        <Link to='/aboutus'><li className="text-base-300 font-semibold font-3xl transition hover:text-500/75 me-7" >About Us</li></Link>
                                        <Link to='/contact'><li className="text-base-300 font-semibold font-3xl transition hover:text-500/75  " >Contact</li></Link>
                                    </ul>
                                </div>
                            </div>


                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>

                                <div tabIndex={0} className="menu menu-compact dropdown-content  p-2   absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "   >
                                    <div className="py-1 " role="none">
                                        <Link to='/'><li  className="text-gray-700 block px-4 py-2 text-md" >Home</li></Link>
                                        <Link to='/services'><li  className="text-gray-700 block px-4 py-2 text-md" >Services</li></Link>
                                        <Link to='/aboutus'><li  className="text-gray-700 block px-4 py-2 text-md" >About Us</li></Link>
                                        <Link to='/contact'><li  className="text-gray-700 block px-4 py-2 text-md" >Contact</li></Link>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div >
            </header >

        </div >
    )
}

export default Navbar