import React from 'react';
import {motion} from 'motion/react';
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Project=(props)=>{
  return(
    <motion.div whileHover="hovered" initial="rest" className='box relative tracking-tight bg-black/40 border-blue-900 h-110 w-110 border rounded-xl overflow-hidden flex flex-col'
    style={{boxShadow:"0px 0px 2px skyblue,0px 0px 2px skyblue,0px 0px 20px skyblue"}}
    >
        <motion.div variants={{rest:{scale:1,y:0},hovered:{scale:1.2,y:-5}}} transition={{duration:0.5,ease:"easeInOut"}} className='h-[50%] bg-cover overflow-hidden p-5'>
            <img src={`${props.project.image}`} className='h-full w-full rounded-md' alt="" />
        </motion.div>
    <div className='panel h-[50%] flex flex-col justify-between gap-5 w-full px-5'>
        <div className='flex flex-col h-30 gap-5'>
            <div className='title self-start text-xl'>
                <h1>{props.project.title}</h1>
            </div>
            <div className='tech stack flex flex-wrap gap-3'>
                {
                    props.project.tech.map((item,id)=>{
                        return <div id={id} className='w-fit h-fit bg-blue-900 border border-blue-500 rounded-full p-2 text-xs'><h1>{item}</h1></div>
                    })
                }
            </div>
        </div>
        <div className='links flex justify-between py-5'>
            <motion.a whileHover={{
                boxShadow:"0px 0px 2px blue,0px 0px 2px blue,0px 0px 20px blue",
                rotate:-5
            }} transition={{duration:0.2,ease:"easeInOut"}} target="_blank" href={`https://github.com/abdulghanisheikh/${props.project.github}`} className='flex items-center gap-2 border-blue-900 border rounded-lg p-2'>
                <h1>Code</h1>
                <BsGithub/>
            </motion.a>
            <motion.a whileHover={{
                boxShadow:"0px 0px 2px orangered,0px 0px 2px orangered,0px 0px 15px orangered",
                rotate:-5
            }} transition={{duration:0.2,ease:"easeInOut"}} href='#' className='flex items-center gap-2 border border-yellow-900 rounded-lg p-2'>
                <h1>details</h1>
                <FaArrowRight/>
            </motion.a>
        </div>
    </div>
    </motion.div>
  )
}

export default Project;