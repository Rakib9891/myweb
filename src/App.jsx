import React from 'react'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, About, Contact, Projects } from './pages/Index'
import './index.css'


function  App() {
  return (


    <main className='main '>
      <Router>
        <Navbar className="navbar"/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About id="about" className="about"/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </main>
        
   
  )
}

export default  App