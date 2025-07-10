import React from 'react'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'


function  App() {
  return (


    <main className='main'>
      <Router>
        <Navbar className="navbar"/>
        <Routes>
          <Route path='/' element={"Home"}/>
          <Route path='/about' element={"about"}/>
          <Route path='/contact' element={"contact"}/>
          <Route path='/projects' element={"projects"}/>
        </Routes>
      </Router>
    </main>
        
   
  )
}

export default  App