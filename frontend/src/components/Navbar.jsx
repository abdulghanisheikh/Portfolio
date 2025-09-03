import React from 'react'
import {motion} from "motion/react";
import NavItem from "./NavItem";
import {HashLink} from "react-router-hash-link";

const Navbar=()=>{
    const logo="{AG}";
    const navbarVariant={
      rest:{y:0},
      hovered:{y:10}
    }
    const MotionHashLink=motion(HashLink);
    const links=[
      {to:"#hero",label:"Home"},
      {to:"#about",label:"About"},
      {to:"#skills",label:"Skills"},
      {to:"#projects",label:"Projects"},
      {to:"#contact",label:"Contact"}
    ]
    return (
      <motion.div
      className='navbar text-white sticky top-2 left-60 border-2 z-[20] bg-black/10 backdrop-blur-md border-white/30 flex w-2/3 h-20 rounded-full justify-between items-center py-4 px-8'
      variants={navbarVariant}
      initial="rest"
      whileHover="hovered"
      transition={{
        duration:0.2,
        ease:"easeInOut"
      }}>
        <div className='logo text-3xl'>
          <MotionHashLink smooth to="#hero" className='font-semibold' animate={{
            textShadow:"0px 0px 2px white,0px 0px 2px white,0px 0px 50px white"
          }} transition={{
            duration:2,
            ease:"easeInOut",
            repeat:Infinity,
            repeatType:"mirror"
          }}
          >{logo}</MotionHashLink>
        </div>
        <div className='links flex gap-5 text-lg'>
          {links.map((item,id)=>(
            <NavItem key={id} to={item.to} label={item.label}/>
          ))}
        </div>
      </motion.div>
  )
}

export default Navbar;