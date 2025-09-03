import React from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {HashRouter} from "react-router-dom";

const App=()=>{
  return(
    <HashRouter>
    <div className="relative w-full bg-cover bg-top bg-[url('/bg-2.jpg')]">
      <div className='absolute inset-0 bg-black/75 w-full min-h-full'></div>
      <Bar/>
      <Navbar />
      <div className='z-[10] backdrop-blur-xl'>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /></section>
      </div>
    </div>
    </HashRouter>
  );
};

export default App;