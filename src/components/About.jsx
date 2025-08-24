import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import {motion} from 'motion/react';

const About=()=>{
  return (
    <div id='about' className='w-full h-screen py-30 flex flex-col gap-15 items-center'>
            <div className='flex w-3/4 flex-col gap-1'>
              <h1 className='font-bold tracking-tighter text-6xl self-start'>About Me</h1>
              <hr className='border-t border-4 rounded-full w-40 text-blue-500'/>
            </div>
            <div className='flex gap-50'>
              <motion.div
              initial={{
                opacity:0,
                y:100
              }}
              whileInView={{
                opacity:1,
                y:0
              }} 
              transition={{
                duration:1,
                delay:0.5,
                ease:"easeInOut"
              }}
              className='bg-zinc-900 p-8 tracking-tight flex flex-col gap-5 rounded-lg w-130 text-gray-300 shadow-xs shadow-blue-900 hover:shadow-lg hover:shadow-blue-40 duration-500 ease-in-out hover:scale-110'>          
                <div><p>Hello, I'm <span className='font-semibold'>Abdul Ghani</span>, a <span className='font-semibold text-blue-400'>Web Developer</span> with experience in designing and developing full-stack applications. Proficient in backend technologies such as <span className='text-blue-400 font-semibold'>Node.js</span>,<span className='text-blue-400 font-semibold'> Express</span>, <span className='text-blue-400 font-semibold'>MongoDB</span>, <span className='text-blue-400 font-semibold'>JavaScript</span> and <span className='text-blue-400 font-semibold'>Java</span>, and frontend technologies including <span className='font-semibold text-blue-400'>React</span>, <span className='text-blue-400 font-semibold'>TailwindCSS</span>,<span className='text-blue-400 font-semibold'> HTML5</span> and <span className='text-blue-400 font-semibold'>CSS3</span> with end-to-end development exposure. Skilled in RESTful API development, authentication and authorization (JWT, bcrypt), and database integration with MongoDB and I'm eager to work on cutting-edge technologies in web development.</p></div>
                <div>
                  <p>When I'm not coding, I enjoy playing multiplayer games such as Call of Duty, which foster relaxation, strategy and collaboration with friends.</p>
                </div>
              </motion.div>
              <div className='flex flex-col justify-between'>
                <motion.div initial={{
                      opacity:0,
                      y:-100
                  }}
                  whileInView={{
                    opacity:1,
                    y:0
                  }} 
                  transition={{
                    duration:1,
                    delay:0.3,
                    ease:"easeInOut"
                  }} className='flex self-start flex-col gap-5'>
                  <div className='flex items-center gap-2 text-3xl'>
                    <RiGraduationCapFill/>
                    <h1 className='font-semibold tracking-tighter'>Education</h1>
                  </div>
                  <div className='bg-zinc-900 tracking-tight p-8 flex flex-col rounded-lg w-110 shadow-xs shadow-blue-900 hover:shadow-lg hover:shadow-blue-40 duration-500 ease-in-out hover:scale-110'>
                    <div>
                      <h1 className='text-xl'>Bachelor of Technology in Computer Science & Engineering</h1>
                      <h3>• 8.83 CGPA</h3>
                    </div>
                    <div className='flex flex-col mt-5 text-gray-300'>
                        <h2>Galgotias University</h2>
                        <h1>2022 - present</h1>
                    </div>
                  </div>
                </motion.div>
                <div className='flex justify-between tracking-tight'>
                  <a href='mailto:ghanisheikh26@gmail.com' className='flex gap-1 py-2 px-3 bg-zinc-800 rounded-lg items-center'>
                    <MdOutlineMail className='text-blue-500 text-2xl' />
                    <h1 className='text-lg'>ghanisheikh26@gmail.com</h1>
                  </a>
                  <div
                  className='flex gap-1 py-2 px-3 bg-zinc-800 rounded-lg items-center'>
                    <IoLocationSharp className='text-blue-500 text-2xl'/>
                    <h1 className='text-lg'>New Delhi, IN</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default About