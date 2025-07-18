import React from "react";
import BigText from "../components/BigText";
import Footer from '../components/Footer'

function About() {
  return (
    <div className="about">
      <BigText props={"Web Development with MERN"}></BigText>
      <div className="about-sec">
         <p className="about-p text-lg font-stretch-50% text-[#332e2ed1]">Hi I'm Rakibul Hasan. I'm a Full-Stack Web Developer</p>
     <div className="out flex">
      <div className="one w-1/2">
        <h1 className="text-3xl twos text-[#332E2E]">Right now</h1>
        <p className="p1 text-lg font-stretch-50% text-[#332e2ed1]">Web Developer, MERN stack</p>
      </div>
      <div className="two w-1/2">
           <h1 className="text-3xl twos text-[#332E2E]">Location</h1>
        <p className="p1 text-lg font-stretch-50% text-[#332e2ed1]">Bangladesh (and remotely)</p>
      </div>
     </div>
     <div className="flex items-center justify-between">

      <a className="text-[#332E2E] btn2 rounded-2xl" href="/contact">Contact Me</a>
      <div className="bg-[#D9FFB6] image">
      <img className="flex h-150" src="../src/assets/aboutme.png" alt="" />
      </div>
     </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
