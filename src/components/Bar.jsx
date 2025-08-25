import React from 'react'
import {motion,useScroll} from 'motion/react';

const Bar=()=>{
    const {scrollYProgress}=useScroll();
    return(
        <motion.div 
        style={{
            scaleX:scrollYProgress
        }} 
        className='w-full h-[3px] z-[3] fixed top-0 left-0 rounded-full bg-blue-500 origin-top-left'>
        </motion.div>
    );
}

export default Bar;