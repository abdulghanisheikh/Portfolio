import React from 'react'
import { TbFileDownload } from "react-icons/tb";
import {motion} from "motion/react";

const Hero=()=>{
  return (
    <div id='hero' className='h-screen w-full gap-10 flex justify-center items-start py-30'>
        <div className='flex flex-col gap-3 ml-20'>
            <div className='rounded-full overflow-hidden'>
                <img src="../profile1.jpg" className='object-cover w-85 h-80 rounded-full border-blue-500 border-2' alt="profile picture" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-gray-400 self-center'>Web Developer &</h1>
                <h1 className='text-gray-400 self-center'>Software Engineering Student</h1>
            </div>
        </div>
        <div className='flex flex-col gap-10 w-3/4 ml-20'>
            <div className='flex flex-col gap-5 w-full'>
            <h1 className='text-8xl tracking-tighter'><span className='italic'>Hello</span>, I'm <span className='text-blue-500 font-semibold'>Abdul Ghani</span>.</h1>
            <h1 className='text-3xl tracking-tighter text-gray-400 w-3/4'><span className='text-white font-semibold'>Web Developer.</span> A self-taught developer with an interest in Computer Science.</h1>
            </div>
            <div className='flex flex-col mt-10 justify-center gap-5'>
                <h1 className='text-2xl tracking-tighter text-gray-300'>🚀 Currently building skills in Frontend (React / Next.js)</h1>
                <motion.a href="/AbdulGhaniCV.pdf"
                initial={{
                    rotate:0,
                    scale:1,
                    color:"white"
                }}
                whileHover={{
                    rotate:2,
                    scale:1.05,
                    color:"skyblue"
                }}
                transition={{
                    duration:0.3,
                    ease:"easeInOut"
                }}
                download={true}
                className="flex gap-2 w-fit py-3 px-5 items-center rounded-lg bg-gray-800 hover:bg-gray-700 duration-300 ease-in-out">
                <TbFileDownload className='text-xl'/>
                <span className='font-semibold'>Curriculum Vitae</span>
                </motion.a>
            </div>
        </div>
    </div>
  )
}

export default Hero