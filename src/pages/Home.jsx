import React from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/ToolsAndTechs";
import About from "./miniComponents/About";
import Portfolio from "./miniComponents/Projects";
import Contact from "./miniComponents/Contact";
import Coding from "./miniComponents/Coding";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Coding/>
      <Contact />
    </article>
  );
};

export default Home;
