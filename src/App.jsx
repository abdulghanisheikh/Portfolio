import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Bar from './components/Bar';

const App=()=>{
  return(
    <div className='portfolio px-10 bg-zinc-900 flex flex-col text-white w-full min-h-screen'>
      <Bar/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App;