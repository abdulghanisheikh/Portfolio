import React, { Children } from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import {motion} from 'motion/react';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuFileDown } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const About=()=>{
  const variant1={hidden:{opacity:0,y:50,x:-20},inView:{opacity:1,y:0,x:0}}
  const variant2={hidden:{opacity:0,y:-50,x:20},inView:{opacity:1,y:0,x:0}}
  const parentVariants={hidden:{},visible:{transition:{staggerChildren:0.2,delayChildren:0.5}}}
  const childVariants={hidden:{opacity:0,x:50},visible:{opacity:1,x:0}}

  return (
    <div id='about' className='w-full h-screen py-25 flex flex-col gap-10 items-center text-white'>
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
              <hr className='border-t border-4 rounded-full w-40 text-blue-500'/>
            </div>
            <div className='flex gap-50'>
              <motion.div variants={variant1} initial="hidden" whileHover={{
                boxShadow:"0px 0px 5px skyblue,0px 0px 5px skyblue,0px 0px 20px skyblue",
                scale:1.03,
                x:20,
                transition:{duration:0.2,ease:"easeInOut"}
              }} whileInView="inView" transition={{
                duration:0.5,
                ease:"easeInOut"
              }} viewport={{
                amount:0.5
              }}
              className='bg-zinc-900 p-5 px-10 tracking-tight flex flex-col gap-5 rounded-lg w-130 text-gray-300'>        
                <div><p>Hello, I'm <span className='font-semibold'>Abdul Ghani</span>, a <span className='font-semibold text-blue-400'>Web Developer</span> with experience in designing and developing full-stack applications. Proficient in backend technologies such as <span className='text-blue-400 font-semibold'>Node.js</span>,<span className='text-blue-400 font-semibold'> Express</span>, <span className='text-blue-400 font-semibold'>MongoDB</span>, <span className='text-blue-400 font-semibold'>JavaScript</span> and <span className='text-blue-400 font-semibold'>Java</span>, and frontend technologies including <span className='font-semibold text-blue-400'>React</span>, <span className='text-blue-400 font-semibold'>TailwindCSS</span>,<span className='text-blue-400 font-semibold'> HTML5</span> and <span className='text-blue-400 font-semibold'>CSS3</span> with end-to-end development exposure. Skilled in RESTful API development, authentication and authorization (JWT, bcrypt), and database integration with MongoDB and I'm actively seeking opportunities to gain hands-on experience, contribute to meaningful products, and grow professionally.</p></div>
                <div>
                  <p>When I'm not coding, I enjoy playing multiplayer games such as Call of Duty, which foster relaxation, strategy and collaboration with friends.</p>
                </div>
              </motion.div>
              <div className='flex flex-col gap-25 items-center'>
                <motion.div variants={variant2} initial="hidden" whileInView="inView" transition={{
                  duration:0.5,
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
                    boxShadow:"0px 0px 5px skyblue,0px 0px 5px skyblue,0px 0px 20px skyblue",
                    transition:{duration:0.2,ease:"easeInOut"}
                  }} className='bg-zinc-900 tracking-tight p-8 flex flex-col rounded-lg w-110'>
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
                <motion.div className='socials flex justify-evenly' initial="hidden" whileInView="visible" variants={parentVariants}>
                  <motion.a href="https://github.com/abdulghanisheikh" target="_blank" variants={childVariants} initial="initial" whileHover="hovered" className='flex flex-col items-center'>
                    <BsGithub size={28}/>
                    <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Github</motion.h1>
                  </motion.a>
                  <motion.a variants={childVariants} target="_blank" href="https://www.linkedin.com/in/abdul-ghani-a5192625b/" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
                    <FaLinkedin size={28}/>
                    <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My LinkedIn</motion.h1>
                  </motion.a>
                  <motion.a variants={childVariants} target="_blank" href="mailto:ghanisheikh26@gmail.com" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
                    <TfiEmail size={28}/>
                    <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Email</motion.h1>
                  </motion.a>
                  <motion.a download={true} target="_blank" variants={childVariants} href="/AbdulGhaniCV.pdf" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
                    <LuFileDown size={28}/>
                    <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My CV</motion.h1>
                  </motion.a>
                  <motion.a variants={childVariants} target="_blank" href="https://www.instagram.com/ghani21._/" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
                    <IoLogoInstagram size={28}/>
                    <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Instagram</motion.h1>
                  </motion.a>
                  <motion.a href="https://x.com/AbdulGhani2103" target="_blank" variants={childVariants} initial="initial" whileHover="hovered" className='flex flex-col items-center'>
                    <FaXTwitter size={28}/>
                    <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Twitter</motion.h1>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
  )
}

export default About