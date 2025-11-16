import React, {useEffect,useState} from 'react';
import Project from "./Project";
import {motion,AnimatePresence} from "motion/react";
import Details from './Details';

const Projects=()=>{
  const [details, setDetails]=useState([]);
  const [current,setCurrent]=useState(null);

  const projectsDetail=[{
    title:"FileNest -  All your files, one secure home",
    image:"/projects/FileNest-pic.png",
    tech:["React.js","Tailwindcss","Node.js","Express","MongoDB","Supabase"],
    github:"FileNest",
    desc:"Designing FileNest, A Google Drive inspired cloud storage web app using the MERN stack with Supabase as file storage, Implemented user authentication (login/signup), clean UI, and CRUD operations for files."
  },
  {
    title:"Scatch - Premium bag shop",
    image:"/projects/Scatch-pic.png",
    tech:["EJS","Tailwindcss","Node.js","Express","MongoDB"],
    github:"Scatch",
    desc:'I built an e-commerce application named "Scatch - a premium bag shop" using Node.js. Showcasing premium bags listed by admin, allowing users to manage their product in cart. Express handles protected routes, MongoDB handles users and products storage, JWT (JSON Web Token) handles user authentication and Bcrypt password hashing ensures security. EJS and Tailwindcss for a visually appealing UI.'
  },
  {
    title:"Microblogging platform",
    image:"/projects/Microblog-pic.png",
    tech:["EJS","Tailwindcss","Node.js","Express","MongoDB"],
    github:"Microblogging-platform",
    desc:"A simple microblogging web application where user can post and manage short blogs, user can create, like, delete and edit the posts. EJS and Tailwindcss for visually appealing UI. Express handles protected routes. MongoDB handles users and posts storage. User authentication handled by JWT (JSON Web Token). Bcrypt password hashing ensures security."
  }];

  useEffect(()=>{
    setDetails(projectsDetail);
  },[]);

  return (
    <motion.div className="relative w-full min-h-screen">
      <div className='absolute inset-0 bg-cover bg-center bg-[url("/bg-1.jpg")] -z-[10]'></div>
      <div className='absolute inset-0 bg-black/75'></div>
      <AnimatePresence>
      {current&&
      <motion.div className='fixed inset-0 min-h-screen w-full top-650 z-[50] bg-black/30 backdrop-blur-sm'>
        <motion.div 
        initial={{
          scale:0.8,
          y:-50,
        }}
        animate={{
          scale:1,
          y:0,
        }} 
        exit={{
          y:-50,
          scale:0.8,
          opacity:0
        }}
        transition={{
          duration:1,
          type:"spring",
          ease:"easeInOut"
        }}>
          <Details project={current} onClose={()=>setCurrent(null)}/>
        </motion.div>
      </motion.div>}
      </AnimatePresence>
      <motion.div className='flex flex-col gap-10 py-30 z-[10] text-white items-center w-full backdrop-blur-xl'>
        <motion.div className='w-2/3 flex flex-col gap-1'>
          <motion.h1 animate={{
                backgroundPosition:["0% 50%","50% 100%","50% 0%"]
              }}
              transition={{
                backgroundPosition:{duration:6,ease:"linear",repeat:Infinity}
              }}
              style={{
                backgroundSize:"100% 100%"
              }} className='font-bold text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#30D5C8] via-[#FF4500] to-pink-600'>Projects</motion.h1>
          <hr className='border-t border-4 rounded-full w-50 text-blue-900'/>
        </motion.div>
        <motion.div transition={{staggerChildren:0.2,delayChildren:0.1,ease:"easeInOut"}} viewport={{
          amount:0.5
        }} initial="notInView" whileInView="inView" className='w-2/3 flex gap-2 justify-evenly flex-wrap space-y-5'>
          {details.map((item,id)=>(
            <motion.div variants={{notInView:{opacity:0,x:5},inView:{opacity:1,x:0}}}>
              <Project project={item} onDetail={()=>setCurrent(item)} key={id}/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
export default Projects;