import React, {useEffect,useState} from 'react';
import Project from "./Project";
import {motion} from "motion/react";

const Projects=()=>{
  const [details, setDetails]=useState([]);
  const [current,setCurrent]=useState(null);

  const projectsDetail=[{
    title:"Scatch - Premium bag shop",
    image:"/projects/Scatch-pic.png",
    tech:["EJS","Tailwindcss","Node.js","Express","MongoDB"],
    github:"Scatch",
    desc:'I built an e-commerce application named "Scatch - a premium bag shop" using Node.js. Showcasing premium bags listed by admin, allowing users to manage their product in cart. Express handles protected routes, MongoDB handles users and products storage, JWT (JSON Web Token) and cookies handles user authentication and Bcrypt password hashing ensures security. EJS and Tailwindcss for a visually appealing UI.'
  },
  {
    title:"Microblogging platform",
    image:"/projects/Microblog-pic.png",
    tech:["EJS","Tailwindcss","Node.js","Express","MongoDB"],
    github:"Microblogging-platform",
    desc:"A simple microblogging web application where user can post and manage short blogs, user can create, like, delete and edit the posts. EJS and Tailwindcss for visually appealing UI. Express handles protected routes. MongoDB handles users and posts storage. User authentication handled by JWT (JSON Web Token) and cookies. Bcrypt password hashing ensures security."
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
          <motion.h1 animate={{
                backgroundPosition:["0% 50%","50% 100%","50% 0%"]
              }}
              transition={{
                backgroundPosition:{duration:6,ease:"linear",repeat:Infinity}
              }}
              style={{
                backgroundSize:"100% 100%"
              }} className='font-bold text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#30D5C8] via-[#FF4500] to-pink-600'>Projects</motion.h1>
          <hr className='border-t border-4 rounded-full w-50 text-blue-500'/>
        </motion.div>
        <motion.div transition={{staggerChildren:0.2,delayChildren:0.3,ease:"easeInOut"}} viewport={{
          amount:0.5
        }} initial="notInView" whileInView="inView" className='w-2/3 flex gap-15 justify-around flex-wrap'>
          {details.map((item,id)=>(
            <motion.div variants={{notInView:{opacity:0,x:100},inView:{opacity:1,x:0}}}>
              <Project project={item} onDetail={()=>setCurrent(item)} key={id}/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}


        // <div className='details flex justify-around gap-20 text-white absolute top-40 rounded-xl left-[50%] -translate-x-[50%] py-10 px-10 max-h-screen bg-zinc-900 w-300 z-[30]'>
        //   <div className='image w-1/2 rounded-md'>
        //     <img className='object-contain' src={`${current.image}`} alt="" />
        //   </div>
        //   <div className='content flex flex-col w-1/2 gap-10'>
        //     <div className='flex flex-col gap-5'>
        //       <h1 className='text-2xl tracking-tighter font-bold'>{current.title}</h1>
        //       <div className='flex flex-col gap-2 tracking-tight'>
        //         <h1 className='font-semibold text-lg'>Description</h1>
        //         <p className='desc'>{current.desc}</p>
        //       </div>
        //     </div>
        //     <div className='techStack flex flex-col gap-2'>
        //       <h1 className='text-lg font-semibold'>Technologies</h1>
        //       <div className='flex flex-wrap gap-3'>
        //         {current.tech.map((item,id)=>{
        //           return <h1 className='bg-blue-500 py-1 px-3 rounded-full text-sm' key={id}>{item}</h1>
        //         })}
        //       </div>
        //     </div>
        //   </div>
        // </div>
export default Projects;