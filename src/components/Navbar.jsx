import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header flex items-center justify-between bg-gray-500 ">
        <NavLink to="/" className={'w-10 h-10 rounded-lg items-center justify-center flex font-bold-green shadow-md ml-10 bg-green-700'}>
            <p className='green-gradient_text bg-gradient-to-r from-[#a2ffaa] to-[#53ff61] bg-clip-text text-lg '>RH</p>
        </NavLink>
        <nav className='w-3/5 flex justify-left items-center gap-8'>
            <NavLink to="/" className={({isActive}) => isActive?"text-sky-500":"text-black"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive?"text-sky-500":"text-black"}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive?"text-sky-500":"text-black"}>Contact</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive?"text-sky-500":"text-black"}>Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar;