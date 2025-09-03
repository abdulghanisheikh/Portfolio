import React from 'react'
import {motion,useAnimate} from "motion/react";
import { HashLink } from 'react-router-hash-link';

const NavItem=({to,label})=>{
    const MotionHashLink=motion(HashLink);
    const [scope,animate]=useAnimate();
    return (
        <MotionHashLink
        smooth
        to={to}
        ref={scope}
        onMouseEnter={()=>animate("span",{width:"100%"},{duration:0.2,ease:"easeInOut"})}
        onMouseLeave={()=>animate("span",{width:"0%"},{duration:0.2,ease:"easeInOut"})}
        onClick={()=>animate("span",{width:"0%"},{duration:0.2,ease:"easeInOut"})}
        className='font-semibold py-[1px] px-1 rounded-md relative text-white/60 hover:text-white'>{label}
            <motion.span className='absolute left-0 bottom-0 h-[3px] bg-blue-500 rounded-full'
            transition={{
            duration:0.2,
            ease:"easeInOut"
            }}
            ></motion.span>
        </MotionHashLink>
    )
}

export default NavItem;