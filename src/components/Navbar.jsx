import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header flex items-center justify-between">
        <NavLink to="/" className={'logo'}>
            <p className='bg-[#1495ff] text-white w-10 h-10 flex justify-center items-center rounded-full font-bold text-3xl'>
              R </p>
              {/* <img className='' src="../src/assets/logo.png" alt="logo" /> */}
            
        </NavLink>
        <nav className='nav w-3/5 flex justify-left items-center gap-8'>
            <NavLink to="/" className={({isActive}) => isActive?"text-sky-500":"text-black"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive?"text-sky-500":"text-black"}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive?"text-sky-500":"text-black"}>Contact</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive?"text-sky-500":"text-black"}>Projects</NavLink>
        </nav>
    </header>
  )
}

export default Navbar;