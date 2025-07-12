import React from 'react'

function Hero() {
  return (
    <>
    <div className='hero flex justify- items-center flex-wrap'>
        <div className="intro w-3/5 flex justify-center  flex-col gap-7 mt">
        <h1 className='text-[#010101] font-bold text-2xl'>Hello I'm a </h1>
        <h1 className='text-[#010101] font-bold text-4xl'> 
        MERN stack <span className='text-[#1495ff]'> Web Developer</span></h1>
        <p className='text-[#4e4e4e] text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ipsam, dolore laborum ad incidunt repudiandae aut vero fdf
        </p>
        </div>
        <div className="intro-pic h-70">
            <img className='pic' src="./src/assets/intro.png" alt="" />
        </div>
    </div>
    <div className="social ">
        <ul className='ul flex items-center justify-baseline gap-10'>
        <li className='links'><a href=""><i class="fa-brands fa-linkedin fa-2xl"></i></a></li>
        <li className='links'><a href=""><i class="fa-brands fa-x-twitter fa-2xl"></i></a></li>
        <li className='links'><a href=""><i class="fa-brands fa-square-facebook fa-2xl"></i></a></li>
        <li className='links'><a href=""><i class="fa-brands fa-instagram fa-2xl"></i></a></li>
        </ul>
      
    </div>
    </>
  )
}

export default Hero