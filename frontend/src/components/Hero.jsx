import React from 'react'
import { TbFileDownload } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import {motion} from "motion/react";

const Hero=()=>{
  return (
    <div className='min-h-screen w-full gap-5 flex py-25 text-white'>
        <div className='flex flex-col gap-3 ml-30'>
            <div className='rounded-full overflow-hidden'>
                <motion.img initial={{
                    opacity:0.8,
                    scale:1
                }} whileHover={{
                    opacity:1,
                    scale:1.1
                }} transition={{
                    duration:0.4,
                    delay:0.2,
                    ease:"easeInOut"
                }} src="../profile1.jpg" className='object-cover w-85 h-80 rounded-full' alt="profile picture" />
            </div>
            <div className='flex flex-col gap-10 text-sm'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-gray-400 self-center'>Web Developer &</h1>
                    <h1 className='text-gray-400 self-center'>Software Engineering Student</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex gap-1 items-center'>
                        <IoLocationSharp className='text-blue-500'/>
                        <h1 className='text-gray-400'>New Delhi, IN</h1>
                    </div>
                    <div className='flex justify-between gap-5 tracking-tight'>
                        <a href='mailto:ghanisheikh26@gmail.com' className='flex items-center gap-1'>
                        <MdOutlineMail className='text-blue-500' />
                        <h1 className='text-gray-400'>ghanisheikh26@gmail.com</h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[1px] h-[500px] border-1 border-white opacity-5 ml-8'></div>
        <div className='flex flex-col gap-10 w-3/4 ml-8'>
            <div className='flex flex-col gap-5 w-full'>
            <h1 className='text-2xl tracking-tighter'>Hi, I'm- <br /><motion.span 
            whileInView={{
                opacity:[0,1],
            }} 
            transition={{
                duration:0.6,
                ease:"easeInOut"
            }}
            style={{backgroundSize:"100% 100%"}}
            animate={{
                backgroundPosition:["0% 50%","50% 100%","50% 0%"],
                transition:{backgroundPosition:{duration:6,ease:"linear",repeat:Infinity}}
            }}
            className='text-9xl font-semibold bg-gradient-to-r from-purple-400 via-orange-300 to-red-600 text-transparent bg-clip-text'>Abdul Ghani</motion.span><span className='text-9xl'>.</span></h1>
            <h1 className='text-3xl tracking-tighter text-gray-400 w-full'>a <motion.span whileInView={{
                opacity:[0,1],
            }} transition={{
                duration:0.6,
                delay:0.6,
                ease:"easeInOut"
            }} className='text-white'>Web Developer</motion.span>. Building the web, better.</h1>
            </div>
            <div className='flex flex-col mt-25 justify-center gap-5'>
                <h1 className='text-2xl tracking-tighter text-gray-300'>🚀 Currently building skills in Frontend (React / Next.js)</h1>
                <motion.a href="/AbdulGhaniCV.pdf"
                initial="rest"
                whileHover="hover"
                variants={{
                    rest:{
                        scale:1,
                        rotate:0
                    },
                    hover:{
                        scale:1.07,
                        rotate:3,
                    }
                }}
                transition={{
                    duration:0.2,
                    ease:"easeInOut"
                }}
                download={true}
                className="flex gap-2 w-fit py-3 px-5 items-center rounded-lg bg-gray-800 hover:bg-gray-700 duration-300 ease-in-out">
                <motion.div
                variants={{
                    rest:{
                        color:"white",
                        scale:1
                    },
                    hover:{
                        color:"skyblue",
                        scale:1.1
                    }
                }}
                transition={{
                    duration:0.2,
                    ease:"easeInOut"
                }}
                >
                    <TbFileDownload className='text-xl'/>
                </motion.div>
                <motion.span
                variants={{
                    rest:{
                        scale:1
                    },
                    hover:{
                        scale:1.06
                    }
                }} 
                transition={{
                    duration:0.2,
                    ease:"easeInOut"
                }} className='font-semibold'>Curriculum Vitae</motion.span>
                </motion.a>
            </div>
        </div>
    </div>
  )
}

export default Hero;