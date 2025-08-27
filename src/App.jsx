import React from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App=()=>{
  return (
    <div className="relative w-full bg-cover bg-top bg-[url('/bg-2.jpg')]">
      <div className='absolute inset-0 bg-black/75 w-full min-h-full'></div>
      <Bar/>
      <Navbar />
      <div className='z-[10] backdrop-blur-xl'>
        <Hero />
        <About />
        <Skills />
        <Projects/>
      </div>
    </div>
  );
};

export default App;