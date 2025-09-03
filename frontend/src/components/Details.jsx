import React from 'react'
import { BsGithub } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import {motion} from 'motion/react';

const Details=({project,onClose})=>{
  return (
    <motion.div
    className='details flex justify-around gap-20 text-white absolute top-25 rounded-xl left-[50%] -translate-x-[50%] py-10 px-10 max-h-screen bg-black/70 w-300 z-[30]'
    style={{boxShadow:"0px 0px 1px #5B21B6,0px 0px 1px #5B21B6, 0px 0px 10px skyblue"}}>
        <div className='flex flex-col justify-between w-1/2 rounded-md'>
        <img className='object-contain' src={`${project.image}`} alt="" />
        <div className='buttons flex gap-90 w-full justify-center'>
            <motion.a whileHover={{
            boxShadow:"0px 0px 2px blue,0px 0px 2px blue,0px 0px 20px blue",
            rotate:-5
            }} transition={{duration:0.2,ease:"easeInOut"}} target="_blank" href={`https://github.com/abdulghanisheikh/${project.github}`} className='flex items-center gap-2 border-blue-900 bg-[#050A12] border rounded-lg p-2'>
                <h1>Code</h1>
                <BsGithub/>
            </motion.a>
        </div>
        </div>
        <div className='content flex flex-col w-1/2 gap-2'>
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl tracking-tighter font-semibold'>{project.title}</h1>
                <motion.div onClick={onClose} whileHover={{
                    boxShadow:"0px 0px 10px red,0px 0px 20px red,0px 0px 50px red",
                    color:"white",
                    rotate:50
                }}
                transition={{
                    duration:0.5,ease:"easeInOut"
                }}
                className='cursor-pointer bg-transparent rounded-full'
                >
                    <RxCrossCircled size={24} color='red'/>
                </motion.div>
            </div>
            <div className='flex flex-col gap-2 tracking-tight'>
            <h1 className='font-semibold text-lg'>Description</h1>
            <p className='desc text-sm'>{project.desc}</p>
            </div>
        </div>
        <div className='techStack flex flex-col gap-2 mt-8'>
            <h1 className='text-lg font-semibold'>Technologies</h1>
            <div className='flex flex-wrap gap-3'>
            {project.tech.map((item,id)=>{
                return <h1 className='bg-[#0A1120] text-[#4A8DFF] py-1 px-3 rounded-full text-sm' key={id}>{item}</h1>
            })}
            </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Details