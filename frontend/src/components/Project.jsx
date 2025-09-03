import React from 'react';
import {motion} from 'motion/react';
import { FaArrowRight } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Project=({project,onDetail})=>{
    const parentVariant={
        rest:{boxShadow:"0px 0px 1px skyblue,0px 0px 1px skyblue,0px 0px 10px skyblue"},
        hovered:{boxShadow:"0px 0px 1px skyblue,0px 0px 1px skyblue,0px 0px 30px skyblue",scale:1.01}
    }
    const imageVariant={
        rest:{scale:1,y:0},
        hovered:{scale:1.2,y:-5}
    }
    return(
        <motion.div variants={parentVariant} whileHover="hovered" initial="rest" className='box relative tracking-tight bg-black/40 h-110 w-110 rounded-xl overflow-hidden flex flex-col' transition={{
            duration:0.5,
            ease:"easeInOut"
        }}>
            <motion.div variants={imageVariant} transition={{duration:0.5,ease:"easeInOut"}} className='h-[50%] bg-cover overflow-hidden p-5'>
                <img src={`${project.image}`} className='h-full w-full rounded-md' alt="" />
            </motion.div>
        <div className='panel h-[50%] flex flex-col justify-between gap-5 w-full px-5'>
            <div className='flex flex-col h-30 gap-5'>
                <div className='title self-start text-xl'>
                    <h1>{project.title}</h1>
                </div>
                <div className='tech stack flex flex-wrap gap-3'>
                    {
                        project.tech.map((item,id)=>{
                            return <div id={id} className='w-fit h-fit bg-[#0A1120] rounded-full p-2 text-xs text-[#4A8DFF]'><h1>{item}</h1></div>
                        })
                    }
                </div>
            </div>
            <div className='links flex justify-between py-5'>
                <motion.a whileHover={{
                    boxShadow:"0px 0px 2px blue,0px 0px 2px blue,0px 0px 20px blue",
                    rotate:-5
                }} transition={{duration:0.2,ease:"easeInOut"}} target="_blank" href={`https://github.com/abdulghanisheikh/${project.github}`} className='flex items-center gap-2 border-blue-900 border rounded-lg p-2'>
                    <h1>Code</h1>
                    <BsGithub/>
                </motion.a>
                <motion.button onClick={onDetail} whileHover={{
                    boxShadow:"0px 0px 2px orangered,0px 0px 2px orangered,0px 0px 15px orangered",
                    rotate:-5
                }} transition={{duration:0.2,ease:"easeInOut"}} href='#' className='flex items-center gap-2 border border-yellow-900 rounded-lg p-2 cursor-pointer'>
                    <h1>details</h1>
                    <FaArrowRight/>
                </motion.button>
            </div>
        </div>
        </motion.div>
    )
}

export default Project;