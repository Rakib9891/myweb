import React from 'react'

function Footer() {
  return (
    <footer className=''>
        <div className='green h-120 bg-[#D9FFB6] flex'>
          <div className="text w-1/2 ">
           <p className='text-9xl font-black '>Shall <br /> We?</p> 
          </div>
          <div className="email flex items-start justify-center flex-col gap-9">
            <p className='text-lg font-extralight text-[#332e2ec4] flex flex-wrap'>Workshops, talks or mentoring — I’m on a mission to make accessibility standard practice in digital. Want to talk about it?</p>
            <div className='btn bg-[#332E2E] text-white w-fit rounded-3xl'><a href="mailto:rakibulhasantanvir0@gmail">Email</a></div>
            <div className='a flex gap-5'>
              <a href="">Newsletter</a>
              <a href="">Linkedin</a>              <a href="">Medium</a>
            </div>
          </div>
        </div>
        <div className='black bg-[#332E2E] h-85 text-white flex justify-center items-center'>
          <ul className='footer-ul flex w-full justify-center items-center gap-9'>
            <li ><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer