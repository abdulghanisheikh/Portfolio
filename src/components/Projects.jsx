import React, {useEffect,useState} from 'react';
import Project from "./Project";
import {motion} from "motion/react";

const Projects=()=>{
  const [details, setDetails] = useState([]);
  const projectsDetail=[{
    title:"Scatch - Premium bag shop",
    image:"/projects/Scatch-pic.png",
    tech:["EJS","Tailwindcss","Node.js","Express","MongoDB"],
    github:"Scatch"
  },
  {
    title:"Microblogging platform",
    image:"/projects/Microblog-pic.png",
    tech:["EJS","Tailwindcss","Node.js","Express","MongoDB"],
    github:"Microblogging-platform"
  },]

  useEffect(()=>{
    setDetails(projectsDetail);
  },[]);

  return (
    <motion.div id="projects" className="relative w-full min-h-screen">
      <div className='absolute inset-0 bg-cover bg-center bg-[url("/bg-1.jpg")] -z-[10]'></div>
      <div className='absolute inset-0 bg-black/75'></div>
      <motion.div className='flex flex-col gap-10 py-30 z-[10] text-white items-center w-full backdrop-blur-xl'>
        <motion.div className='w-2/3 flex flex-col gap-1'>
          <h1 className='font-bold text-6xl tracking-tighter'>Projects</h1>
          <hr className='border-t border-4 rounded-full w-50 text-blue-500'/>
        </motion.div>
        <motion.div transition={{staggerChildren:0.2,delayChildren:0.3,ease:"easeInOut"}} viewport={{
          amount:0.5
        }} initial="notInView" whileInView="inView" className='w-2/3 flex gap-20 justify-around flex-wrap'>
          {details.map((item,id)=>(
            <motion.div variants={{notInView:{opacity:0,x:100},inView:{opacity:1,x:0}}}><Project project={item} key={id}/></motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Projects;