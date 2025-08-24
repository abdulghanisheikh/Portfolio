import React from 'react'
import {motion} from 'motion/react';

const Navbar=()=>{
    const logo="{AG}";
    return (
      <motion.div
      className='navbar shadow-md shadow-blue-850 hover:shadow-sm hover:shadow-blue-800 sticky top-1 z-[2] bg-black/30 backdrop-blur-xl opacity-[98%] flex w-2/3 self-center rounded-full justify-between items-center py-5 px-8'
      whileHover={{
        y:5
      }}
      transition={{
        duration:0.1,
        ease:"easeInOut"
      }}
      >
        <div className='logo text-3xl'>
          <a href="" className='font-semibold'>{logo}</a>
        </div>
        <div className='links flex gap-5 text-lg'>    
          <motion.a 
          href=""
          initial="rest"
          whileHover="hover"
          className='font-semibold py-[1px] px-1 rounded-md relative'>Home
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
          className='font-semibold py-[1px] px-1 rounded-md relative'>About
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
          className='font-semibold py-[1px] px-1 rounded-md relative'>Skills
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
          className='font-semibold py-[1px] px-1 rounded-md relative'>Projects
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
          className='font-semibold py-[1px] px-1 rounded-md relative'>Contact
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