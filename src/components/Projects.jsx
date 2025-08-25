import React from 'react';

const Projects=()=>{
  return (
    <div id='projects' className='projects min-h-screen w-full py-25 flex flex-col items-center gap-15'>
        <div className='w-2/3 flex flex-col gap-1'>
          <h1 className='font-bold text-6xl'>Projects</h1>
          <hr className='border-t border-4 rounded-full w-70 text-blue-500'/>
        </div>
        <div className='flex gap-5 justify-evenly items center'>
          <div className='h-60 w-60 border rounded-lg flex justify-center items-center'>project 1</div>
          <div className='h-60 w-60 border rounded-lg flex justify-center items-center'>project 2</div>
          <div className='h-60 w-60 border rounded-lg flex justify-center items-center'>project 3</div>
        </div>
    </div>
  )
}

export default Projects;