import React from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Experience from "./Experience.jsx";
import RenderSkills from "./skills";

const Home = () => {
  return (
    <section id="home">
      {/* <GridLoader color="#6936d6" /> */}
      <Hero />
      {/* <About />
      <Projects />
      <RenderSkills />
      <Experience />
      <Resume /> */}
    </section>
  );
};

export default Home;