import React from 'react';

function Hero() {
  return (
    <>
      <div className="bg-[#0f172a] text-slate-100 py-16 px-6">
        <div className="hero flex flex-col-reverse lg:flex-row justify-around items-center gap-10 max-w-7xl mx-auto">
          {/* Text Section */}
          <div className="intro lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              MERN stack{' '}
              <span className="text-cyan-400">Web Developer</span>
            </h1>
            <p className="text-slate-300 leading-relaxed text-lg">
              Hi! I’m Rakib, a passionate MERN Stack Web Developer. I love
              turning ideas into real web applications with clean code and
              beautiful design. I started my coding journey in 2024 and have
              been learning and building projects ever since. My main focus is
              on full-stack web development with MongoDB, Express.js, React, and
              Node.js. <br />
              <br />
              Right now, I’m working on improving my skills in Data Structures
              & Algorithms and exploring the world of Machine Learning & AI.
              When I’m not coding, you’ll find me reading about science,
              designing cool UIs, or exploring new tech. Let’s build something
              amazing together!
            </p>
          </div>

          {/* Image Section */}
          <div className="intro-pic">
            <img
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              src="./src/assets/mypic.png"
              alt="Rakib's Avatar"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-[#0f172a] py-6">
        <ul className="flex items-center justify-center gap-8 text-cyan-400 text-2xl">
          <li className="hover:text-white transition">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </li>
          <li className="hover:text-white transition">
            <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
          </li>
          <li className="hover:text-white transition">
            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
          </li>
          <li className="hover:text-white transition">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;
