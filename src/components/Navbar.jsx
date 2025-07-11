import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header flex items-center justify-between">
        <NavLink to="/" className={'ml-10'}>
            <p className='bg-gray-300 text-white'>RH</p>
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