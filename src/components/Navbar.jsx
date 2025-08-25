import React from 'react'
import {motion} from 'motion/react';

const Navbar=()=>{
    const logo="{AG}";
    return (
      <motion.div
      className='navbar sticky top-2 z-[2] border-2 border-white/20 hover:shadow-md hover:shadow-white/10 bg-white/10 backdrop-blur-md flex w-2/3 self-center rounded-full justify-between items-center py-4 px-8'
      whileHover={{
        y:5
      }}
      transition={{
        duration:0.1,
        ease:"easeInOut"
      }}
      >
        <div className='logo text-3xl'>
          <motion.a href="" className='font-semibold' whileHover={{
            textShadow:"0 0 10px white, 0 0 20px white, 0 0 30px white"
          }} transition={{
            duration:0.3,
            ease:"easeInOut"
          }}>{logo}</motion.a>
        </div>
        <div className='links flex gap-5 text-lg'>
          <motion.a 
          href=""
          initial="rest"
          whileHover="hover"
          className='font-semibold py-[1px] px-1 rounded-md relative text-white/60 hover:text-white'>Home
          <motion.span className='absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full'
          variants={{
            rest:{
              width:0
            },
            hover:{
              width:"100%"
            }
          }}
          transition={{
            duration:0.2,
            ease:"easeInOut"
          }}
          ></motion.span>
          </motion.a>
          <motion.a 
          href=""
          initial="rest"
          whileHover="hover"
          className='font-semibold py-[1px] px-1 rounded-md relative text-white/60 hover:text-white'>About
          <motion.span className='absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full'
          variants={{
            rest:{
              width:0
            },
            hover:{
              width:"100%"
            }
          }}
          transition={{
            duration:0.2,
            ease:"easeInOut"
          }}
          ></motion.span>
          </motion.a>
          <motion.a 
          href=""
          initial="rest"
          whileHover="hover"
          className='font-semibold py-[1px] px-1 rounded-md relative text-white/60 hover:text-white'>Skills
          <motion.span className='absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full'
          variants={{
            rest:{
              width:0
            },
            hover:{
              width:"100%"
            }
          }}
          transition={{
            duration:0.2,
            ease:"easeInOut"
          }}
          ></motion.span>
          </motion.a>
          <motion.a 
          href=""
          initial="rest"
          whileHover="hover"
          className='font-semibold py-[1px] px-1 rounded-md relative text-white/60 hover:text-white'>Projects
          <motion.span className='absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full'
          variants={{
            rest:{
              width:0
            },
            hover:{
              width:"100%"
            }
          }}
          transition={{
            duration:0.2,
            ease:"easeInOut"
          }}
          ></motion.span>
          </motion.a>
          <motion.a 
          href=""
          initial="rest"
          whileHover="hover"
          className='font-semibold py-[1px] px-1 rounded-md relative text-white/60 hover:text-white'>Contact
          <motion.span className='absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full'
          variants={{
            rest:{
              width:0
            },
            hover:{
              width:"100%"
            }
          }}
          transition={{
            duration:0.2,
            ease:"easeInOut"
          }}
          ></motion.span>
          </motion.a>
        </div>
      </motion.div>
  )
}

export default Navbar;