import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="bg-[#0f172a] px-6 py-4 flex items-center justify-between shadow-md">
        <NavLink to="/" className="logo">
          <p className="bg-[#1e293b] text-cyan-300 w-16 h-16 flex justify-center items-center rounded-full font-bold text-4xl shadow-md hover:scale-105 transition duration-300">
            R
          </p>
        </NavLink>

        <nav className="flex gap-8 text-slate-100 text-lg font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition duration-200 ${
                isActive ? 'text-cyan-400' : 'text-slate-100'
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition duration-200 ${
                isActive ? 'text-cyan-400' : 'text-slate-100'
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-cyan-400 transition duration-200 ${
                isActive ? 'text-cyan-400' : 'text-slate-100'
              }`
            }
          >
            Projects
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
