import React, { Children } from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import {motion} from 'motion/react';
import Socials from "./Socials";

const About=()=>{
  const variant1={hidden:{opacity:0,y:20,x:-20},inView:{opacity:1,y:0,x:0}}
  const variant2={hidden:{opacity:0,y:20,x:20},inView:{opacity:1,y:0,x:0}}

  return (
    <div className='w-full h-screen py-25 flex flex-col gap-8 items-center text-white'>
            <div className='flex flex-col gap-1 w-2/3'>
              <motion.h1
              animate={{
                backgroundPosition:["0% 50%","50% 100%","50% 0%"]
              }}
              transition={{
                backgroundPosition:{duration:6,ease:"linear",repeat:Infinity}
              }}
              style={{
                backgroundSize:"100% 100%"
              }}
              className='font-bold tracking-tighter text-6xl self-start bg-gradient-to-r from-sky-300 via-cyan-500 to-blue-500 text-transparent bg-clip-text'>About Me</motion.h1>
              <hr className='border-t border-4 rounded-full w-40 text-blue-900'/>
            </div>
            <div className='flex gap-50'>
              <motion.div variants={variant1} initial="hidden" whileHover={{
                boxShadow:"0px 0px 1px #182E6F,0px 0px 1px #182E6F,0px 0px 30px #182E6F",
                scale:1.03,
                x:20,
                transition:{duration:0.2,ease:"easeInOut"}
              }} whileInView="inView" 
              transition={{
                duration:0.3,
                ease:"easeInOut"
              }} viewport={{
                amount:0.5
              }}
              className='bg-black/40 p-5 px-10 tracking-tight flex flex-col gap-5 rounded-lg w-130 text-gray-300'>        
                <div><p>Hello, I'm <span className='font-semibold'>Abdul Ghani</span>, a <span className='font-semibold text-blue-400'>Web Developer</span> with experience in designing and developing full-stack applications. Proficient in backend technologies such as <span className='text-blue-400 font-semibold'>Node.js</span>,<span className='text-blue-400 font-semibold'> Express</span>, <span className='text-blue-400 font-semibold'>MongoDB</span>, <span className='text-blue-400 font-semibold'>JavaScript</span> and <span className='text-blue-400 font-semibold'>Java</span>, and frontend technologies including <span className='font-semibold text-blue-400'>React</span>, <span className='text-blue-400 font-semibold'>TailwindCSS</span>,<span className='text-blue-400 font-semibold'> HTML5</span> and <span className='text-blue-400 font-semibold'>CSS3</span> with end-to-end development exposure. Skilled in RESTful API development, authentication and authorization (JWT, bcrypt), and database integration with MongoDB and I'm actively seeking opportunities to gain hands-on experience, contribute to meaningful products, and grow professionally.</p></div>
                <div>
                  <p>When I'm not coding, I enjoy playing multiplayer games such as Call of Duty, which foster relaxation, strategy and collaboration with friends.</p>
                </div>
              </motion.div>
              <div className='flex flex-col gap-25 items-center'>
                <motion.div variants={variant2} initial="hidden" whileInView="inView" transition={{
                  duration:0.3,
                  ease:"easeInOut"
                }} viewport={{
                  amount:0.4
                }}
                className='flex flex-col gap-5'>
                  <div className='flex items-center gap-2 text-3xl'>
                    <RiGraduationCapFill color='white'/>
                    <motion.h1 animate={{
                    backgroundPosition:["0% 50%","50% 100%","50% 0%"]
                    }}
                    transition={{
                      backgroundPosition:{duration:6,ease:"linear",repeat:Infinity}
                    }}
                    style={{
                      backgroundSize:"100% 100%"
                    }}
                    className='font-semibold tracking-tighter bg-gradient-to-r from-white via-sky-500 to-blue-600 bg-clip-text text-transparent'>Education</motion.h1>
                  </div>
                  <motion.div whileHover={{
                    scale:1.03,
                    x:-20,
                    boxShadow:"0px 0px 5px #182E6F,0px 0px 5px #182E6F,0px 0px 20px #182E6F",
                    transition:{duration:0.2,ease:"easeInOut"}
                  }} className='bg-black/60 tracking-tight p-8 flex flex-col rounded-lg w-110'>
                    <div>
                      <h1 className='text-xl'>Bachelor of Technology in Computer Science & Engineering</h1>
                      <h3>• 8.83 CGPA</h3>
                    </div>
                    <div className='flex flex-col mt-5 text-gray-300'>
                        <h2>Galgotias University</h2>
                        <h1>2022 - present</h1>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div variants={{
                  hidden:{x:50,opacity:0},
                  inView:{x:0,opacity:1}
                }} whileInView="inView" initial="hidden" transition={{
                  duration:1,
                  ease:"easeInOut"
                }}>
                  <Socials />
                </motion.div>
              </div>
            </div>
          </div>
  )
}

export default About