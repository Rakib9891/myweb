import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-sec flex justify-left flex-wrap ">
        <div className="about-img flex justify-center items-center w-1/2">
          <img src="../src/assets/a.png" alt="" />
        </div>
        <div
          className="about-me w-1/2 flex flex-col
        justify-center items-center "
        >
          <h1 className="text-[#010101] font-bold text-2xl">About Me </h1>
          <p className="text-[#4e4e4e] text-sm">
            Hi! I’m Rakib, a passionate MERN Stack Web Developer. I love turning
            ideas into real web applications with clean code and beautiful
            design. I started my coding journey in 2024 and have been learning
            and building projects ever since. My main focus is on full-stack web
            development with MongoDB, Express.js, React, and Node.js. Right now,
            I’m working on improving my skills in Data Structures & Algorithms
            and exploring the world of Machine Learning & AI. When I’m not
            coding, you’ll find me reading about science, designing cool UIs, or
            exploring new tech. Let’s build something amazing together!
          </p>
          <ul className="about-li flex flex-wrap justify-center items-center">
            <li>
              <a href=""></a>React JS
            </li>
            <li>
              <a href=""></a>Node JS
            </li>
            <li>
              <a href=""></a>Express JS
            </li>
            <li>
              <a href=""></a>MongoDB
            </li>
          </ul>
          <div className="hire bg-[#1495ff] text-white rounded-3xl">
            Hire me
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
