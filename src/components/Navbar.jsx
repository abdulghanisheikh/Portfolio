import React from 'react'
import {motion} from 'motion/react';

const Navbar=()=>{
    const logo="{AG}";
    return (
      <motion.div
      className='navbar shadow-md shadow-blue-850 hover:shadow-sm hover:shadow-blue-800 sticky top-1 z-[2] bg-zinc-900 opacity-[98%] flex w-2/3 self-center rounded-full justify-between items-center py-5 px-8'
      whileHover={{
        y:5
      }}
      transition={{
        duration:0.3,
        ease:"easeInOut"
      }}
      >
        <div className='logo text-3xl'>
          <a href="" className='font-semibold'>{logo}</a>
        </div>
        <div className='links flex gap-5 text-lg'>
          <motion.a href="" 
          initial={{
            scale:1,
            rotate:0
          }}
          whileHover={{
            scale:1.1,
            rotate:2
          }} 
          transition={{
            duration:0.3,
            ease:"easeInOut"
          }}
          className='font-semibold'>Home</motion.a>
          <motion.a href="" initial={{
            scale:1,
            rotate:0
          }}
          whileHover={{
            scale:1.1,
            rotate:2
          }} 
          transition={{
            duration:0.3,
            ease:"easeInOut"
          }} className='font-semibold'>About</motion.a>
          <motion.a href="" initial={{
            scale:1,
            rotate:0
          }}
          whileHover={{
            scale:1.1,
            rotate:2
          }} 
          transition={{
            duration:0.3,
            ease:"easeInOut"
          }} className='font-semibold'>Skills</motion.a>
          <motion.a href="" initial={{
            scale:1,
            rotate:0
          }}
          whileHover={{
            scale:1.1,
            rotate:2
          }} 
          transition={{
            duration:0.3,
            ease:"easeInOut"
          }} className='font-semibold'>Projects</motion.a>
          <motion.a href="" initial={{
            scale:1,
            rotate:0
          }}
          whileHover={{
            scale:1.1,
            rotate:2
          }} 
          transition={{
            duration:0.3,
            ease:"easeInOut"
          }} className='font-semibold'>Contact</motion.a>
        </div>
      </motion.div>
  )
}

export default Navbar;