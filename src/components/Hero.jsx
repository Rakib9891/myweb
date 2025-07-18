import React from 'react'

function Hero() {
  return (
    <>
    <div className='hero flex justify-around items-center flex-wrap'>
        <div className="intro w-1/2 flex justify-center  flex-col gap-7 mt">
        
        <h1 className='text-[#332E2E] font-bold text-4xl'> 
        MERN stack <span className='text-green-400 '> Web Developer</span></h1>
        <p className='text-[#4e4e4e] text-lg w-1/2 '>Hi! I’m Rakib, a passionate MERN Stack Web Developer. I love turning ideas into real web applications with clean code and beautiful design. I started my coding journey in 2024 and have been learning and building projects ever since. My main focus is on full-stack web development with MongoDB, Express.js, React, and Node.js. <br /> <br /> Right now, I’m working on improving my skills in Data Structures & Algorithms and exploring the world of Machine Learning & AI. When I’m not coding, you’ll find me reading about science, designing cool UIs, or exploring new tech. Let’s build something amazing together!
        </p>
        </div>
        <div className="intro-pic ">
            <img className='pic ' src="./src/assets/mypic.png" alt="" />
        </div>
    </div>
    <div className="social ">
        <ul className='ul flex items-center justify-baseline gap-10'>
        <li className='links'><a href=""><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
        <li className='links'><a href=""><i class="fa-brands fa-square-twitter fa-2xl"></i></a></li>
        <li className='links'><a href=""><i className="fa-brands fa-square-facebook fa-2xl"></i></a></li>
        <li className='links'><a href=""><i className="fa-brands fa-instagram fa-2xl"></i></a></li>
        </ul>
      
    </div>
    </>
  )
}

export default Hero