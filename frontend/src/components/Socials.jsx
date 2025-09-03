import React from 'react'
import {motion} from "motion/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { LuFileDown } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const Socials=()=>{
    return (
        <motion.div className='socials flex gap-1' initial="hidden" whileInView="visible">
            <motion.a href="https://github.com/abdulghanisheikh" target="_blank" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
            <BsGithub size={25}/>
            <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Github</motion.h1>
            </motion.a>
            <motion.a target="_blank" href="https://www.linkedin.com/in/abdul-ghani-a5192625b/" whileHover="hovered" initial="initial" className='flex flex-col items-center'>
            <FaLinkedin size={25}/>
            <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My LinkedIn</motion.h1>
            </motion.a>
            <motion.a target="_blank" href="mailto:ghanisheikh26@gmail.com" whileHover="hovered" initial="initial" className='flex flex-col items-center'>
            <TfiEmail size={25}/>
            <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Email</motion.h1>
            </motion.a>
            <motion.a download={true} target="_blank" href="/AbdulGhaniCV.pdf" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
            <LuFileDown size={25}/>
            <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My CV</motion.h1>
            </motion.a>
            <motion.a target="_blank" href="https://www.instagram.com/ghani21._/" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
            <IoLogoInstagram size={25}/>
            <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Instagram</motion.h1>
            </motion.a>
            <motion.a href="https://x.com/AbdulGhani2103" target="_blank" initial="initial" whileHover="hovered" className='flex flex-col items-center'>
            <FaXTwitter size={25}/>
            <motion.h1 className='text-sm' variants={{initial:{opacity:0,y:-10},hovered:{opacity:1,y:0}}}>My Twitter</motion.h1>
            </motion.a>
        </motion.div>
    )
}

export default Socials;