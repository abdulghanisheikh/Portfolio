import React from 'react';
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Project=()=>{
  return(
    <div className='box relative tracking-tight border-blue-900 h-110 w-110 border rounded-xl overflow-hidden flex flex-col' style={{boxShadow:"0px 0px 5px skyblue,0px 0px 5px skyblue,0px 0px 20px skyblue"}}>
        <div className='h-[60%] bg-cover overflow-hidden p-5'>
            <img src="/projects/Scatch-pic.png" className='h-full w-full rounded-md' alt="" />
        </div>
    <div className='panel h-[50%] flex flex-col justify-around gap-5 w-full px-5 py-2'>
        <div className='self-start text-2xl font-semibold'>
            <h1>Scatch</h1>
        </div>
        <div className='tech stack flex flex-wrap gap-3'>
            <div className='w-fit h-fit bg-blue-900 border border-blue-500 rounded-full p-2 text-xs'><h1>Node.js</h1></div>
            <div className='w-fit h-fit bg-blue-900 border border-blue-500 rounded-full p-2 text-xs'><h1>Express.js</h1></div>
            <div className='w-fit h-fit bg-blue-900 border border-blue-500 rounded-full p-2 text-xs'><h1>MongoDB</h1></div>
            <div className='w-fit h-fit bg-blue-900 border border-blue-500 rounded-full p-2 text-xs'><h1>EJS</h1></div>
        </div>
        <div className='links flex justify-between'>
            <a href='' className='flex items-center gap-1 border-blue-900 border rounded-lg p-2'>
                <h1 href="">Code</h1>
                <FaExternalLinkSquareAlt />
            </a>
            <a href='' className='flex items-center gap-1 border border-blue-900 rounded-lg p-2'>
                <h1 href="">details</h1>
                <FaArrowRight/>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Project;