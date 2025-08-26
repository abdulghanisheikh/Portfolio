import React from 'react';
import Project from "./Project";

const Projects=()=>{
  return (
    <div id="projects" className="relative w-full min-h-screen">
      <div className='absolute inset-0 bg-cover bg-center bg-[url("/bg-1.jpg")] -z-[10]'></div>
      <div className='absolute inset-0 bg-black/70'></div>
      <div className='flex flex-col gap-10 py-25 z-[10] text-white items-center w-full h-screen backdrop-blur-lg'>
        <div className='w-2/3 flex flex-col gap-1'>
          <h1 className='font-bold text-6xl tracking-tighter'>Projects</h1>
          <hr className='border-t border-4 rounded-full w-50 text-blue-500'/>
        </div>
        <div className='w-2/3 flex gap-5 justify-around flex-wrap'>
          <Project/>
        </div>
      </div>
    </div>
  )
}

export default Projects;