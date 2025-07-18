import React from "react";
import Hero from "../components/Hero";
import BigText from "../components/BigText";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Currently from "../components/Currently";
import Service from "../components/Service";
function Home() {
  return (
    <div>
      <BigText props={"Rakibul Hasan"}/>
      <Hero />
      <Skills/>
      <Service/>
      <Currently/>
      <Footer />
    </div>
  );
}

export default Home;
