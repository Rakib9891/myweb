import React from 'react'
import { NavLink } from 'react-router-dom'
import Hero from './Hero';



function Navbar() {
  return (
    <>
    <header className="header flex items-center justify-between ">
        <NavLink to="/" className={'logo'}>
            <p className='bg-[#332E2E] text-[#D9FFB6]  w-20 h-20 flex justify-center items-center rounded-full font-bold text-6xl r'>
              R </p>
              {/* <img className='' src="../src/assets/logo.png" alt="logo" /> */}
            
        </NavLink>
        <nav className='nav w-1/2 flex justify-center items-center gap-8'>
            <NavLink to="/about" className={({isActive}) => `aboutt ${isActive?"text-sky-500":"text-black"}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => `aboutt ${isActive?"text-sky-500":"text-black"}`}>Contact</NavLink>
            <NavLink to="/projects" className={({isActive}) => `aboutt ${isActive?"text-sky-500":"text-black"}`}>Projects</NavLink>
        </nav>
    </header>
  
        </>
  )
}

export default Navbar;