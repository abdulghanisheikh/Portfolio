import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "motion/react";

const Footer=()=>{
    return (
        <div className='relative w-full h-screen'>
            <div className='absolute inset-0 bg-[url("/footer-bg.jpg")] bg-bottom bg-cover'></div>
            <div className='absolute inset-0 backdrop-blur-xl'></div>
            <div className='absolute inset-0 z-[10] text-white py-60 gap-20 px-10 flex flex-col justify-between items-center'>
                <style>
                    {`
                    @font-face{
                        font-family:"MyCustomFont";
                        src:url("/fonts/GreatVibes-Regular.ttf") format("truetype");
                        weight:"normal";
                        style:"normal";
                    }
                    `}
                </style>
                <motion.div initial="rest" whileInView="inView" transition={{staggerChildren:0.3,childrenDelay:0.8,ease:"easeInOut"}} viewport={{amount:1}} className='flex flex-col justify-center items-center'>
                    <motion.h1 variants={{rest:{opacity:0,x:-20},inView:{opacity:1,x:0}}} className='text-gray-400 font-light'>THAT'S ALL, FOLKS!</motion.h1>
                    <motion.h1 variants={{rest:{opacity:0,x:20},inView:{opacity:1,x:0}}} className='font-semibold text-7xl mt-5 text-sky-600' style={{
                        fontFamily:"MyCustomFont"
                    }}>Abdul Ghani</motion.h1>
                </motion.div>
                <div className='flex mt-12 flex-col gap-2 items-center'>
                    <motion.h1 className='text-gray-400'>MADE WITH</motion.h1>
                    <motion.div whileInView="inView" viewport={{amount:1}} transition={{staggerChildren:0.1,childrenDelay:0.2,ease:"easeInOut"}} className='flex gap-10'>
                        <motion.img variants={{inView:{rotate:[50,0]}}} transition={{duration:1,ease:"easeInOut"}} className='h-10 w-10' src="/reactlogo.png" alt="" />
                        <motion.img variants={{inView:{rotate:[50,0]}}} transition={{duration:1,ease:"easeInOut"}} className='h-10 w-10' src="/TailwindCSS.png" alt="" />
                        <motion.img variants={{inView:{rotate:[50,0]}}} transition={{duration:1,ease:"easeInOut"}} className='h-10 w-10' src="/framer-motion-logo.png" alt="" />
                    </motion.div>
                    <p className='text-xs text-gray-400 mt-10'>All logos, trademarks, and brandnames are the property of their respective owners.</p>
                    <div className='flex justify-between items-center mt-5 gap-60'>
                        <div>
                            <p className='text-sm'><span className='text-2xl'>©</span> 2025 Abdul Ghani</p>
                        </div>
                        <motion.div className='socials flex gap-10' initial="hidden" whileInView="visible">
                            <motion.a href="https://github.com/abdulghanisheikh" target="_blank" className='flex flex-col items-center'>
                            <BsGithub size={20}/>
                            </motion.a>
                            <motion.a target="_blank" href="https://www.linkedin.com/in/abdul-ghani-a5192625b/" className='flex flex-col items-center'>
                            <FaLinkedin size={20}/>
                            </motion.a>
                            <motion.a target="_blank" href="mailto:ghanisheikh26@gmail.com" className='flex flex-col items-center'>
                            <TfiEmail size={20}/>
                            </motion.a>
                            <motion.a href="https://x.com/AbdulGhani2103" target="_blank" className='flex flex-col items-center'>
                            <FaXTwitter size={20}/>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;