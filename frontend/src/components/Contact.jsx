import React, { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import {motion,AnimatePresence} from 'motion/react';
import Socials from "./Socials";
import { BsSend } from "react-icons/bs";
import {HashLink} from "react-router-hash-link";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";

const Contact=()=>{
    const [data,setData]=useState({
        name:"",
        email:"",
        message:""
    });
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const API_URL=import.meta.env.VITE_API_URL;
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {data}=await axios.post(API_URL,data);
            const {success,message}=data;
            if(success){
                toast.success(message);
                setData({name:"",email:"",message:""});
            }
            else{
                toast.error(message);
            }
        }
        catch(err){
            toast.error(err.message);
        }
    }
    const formVariants={rest:{opacity:0,y:-8},inView:{opacity:1,y:0}}
    const paraVariants={rest:{opacity:0,y:8},inView:{opacity:1,y:0}}
    const MotionHashLink=motion(HashLink);
    const inputsVariant={rest:{scale:1},hovered:{scale:1.02}}
    return(
        <div className='relative min-h-screen w-full overflow-hidden'>
            <div className='absolute inset-0 bg-[url("/contact-bg.jpg")] bg-center bg-cover'></div>
            <div className='absolute inset-0 bg-black/70 backdrop-blur-xl'></div>
            <div className='contactPage absolute z-[10] min-h-screen w-full text-white py-25 flex flex-col gap-8'>
                <div className='heading flex flex-col justify-center px-25 gap-1'>
                    <motion.h1
                    style={{backgroundSize:"100% 100%"}}
                    animate={{
                        backgroundPosition:["0% 50%","50% 100%","50% 0%"]
                    }}
                    transition={{
                        backgroundPosition:{duration:6,ease:"linear",repeat:Infinity}
                    }}
                    className='text-6xl tracking-tighter font-bold bg-gradient-to-r from-[#A855F7] via-red-900 to-[#3B82F6] text-transparent bg-clip-text'>Let's Connect</motion.h1>
                    <hr className='w-80 border-4 border-t rounded-full text-blue-900'/>
                </div>
                <div className='content flex justify-around tracking-tight'>
                    <div className='flex flex-col self-start w-1/3 h-100 gap-5 mt-20 pl-5 items-center'>
                    <motion.p whileInView="inView" initial="rest" variants={paraVariants}
                    transition={{duration:1,delay:0.1,ease:"easeInOut"}}
                    className='text-gray-300 font-semibold mb-15 w-90 text-xl text-center'>Have a project in mind or want to discuss opportunities? <br /> I'd love to hear from you.</motion.p>
                        <motion.div variants={formVariants} whileInView="inView" initial="rest" transition={{
                            duration:1,delay:0.1,ease:"easeInOut"
                        }} className='flex gap-1 items-center'>
                            <IoLocationSharp className='text-blue-500'/>
                            <h1 className='text-gray-300'>New Delhi, IN</h1>
                        </motion.div>                     
                        <motion.div variants={formVariants} whileInView="inView" initial="rest" transition={{duration:1,delay:0.1,ease:"easeInOut"}}>
                            <Socials />
                        </motion.div>
                    </div>
                    <motion.form onSubmit={handleSubmit} initial="rest" whileInView="inView" transition={{duration:1,delay:0.1,ease:"easeInOut"}}
                    whileHover={{
                        boxShadow:"0px 0px 1px #5B21B6,0px 0px 1px #5B21B6, 0px 0px 30px #5B21B6",
                        transition:{
                            duration:0.3,
                            ease:"easeInOut"
                        }
                    }}
                    viewport={{
                        amount:0.2
                    }}
                    variants={formVariants}
                    className='form py-5 px-8 w-200 h-115 rounded-xl tracking-tighter'
                    style={{boxShadow:"0px 0px 1px #5B21B6,0px 0px 1px #5B21B6, 0px 0px 10px #5B21B6"}}>
                        <motion.div variants={{
                            notInView:{
                                y:-5,
                                opacity:0
                            },
                            inView:{
                                y:0,
                                opacity:1
                            }
                        }}>
                            <h1 className='text-300 text-3xl'>Send Message</h1>
                            <p className='text-400 text-md'>I'll get back to you as soon as possible.</p>
                        </motion.div>
                        <div className='flex flex-col gap-2 mt-5'>
                            <motion.input value={data.name} variants={inputsVariant} initial="rest" whileHover="hovered" transition={{duration:0.2,ease:"easeInOut"}} onChange={handleChange} className='py-3 px-5 bg-black/50 outline-none rounded-md' type="text" name="name" placeholder='Your Name' />
                            <motion.input variants={inputsVariant} whileHover="hovered" initial="rest" value={data.email} onChange={handleChange} transition={{duration:0.2,ease:"easeInOut"}} className='py-3 px-5 outline-none bg-black/50 rounded-md' type='email' name="email" placeholder='Your Email' />
                            <motion.textarea variants={inputsVariant} transition={{duration:0.2,ease:"easeInOut"}} whileHover="hovered" initial="rest" value={data.message} onChange={handleChange} name="message" type="text" placeholder='Your Message' className='h-40 bg-black/50 outline-none rounded-lg py-3 px-5 resize-none'></motion.textarea>
                            <AnimatePresence>
                            <motion.button initial={{
                                scale:1
                            }} whileTap={{
                                scale:0.95
                            }} whileHover={{
                                scale:1.03
                            }} transition={{
                                duration:0.3,
                                ease:"easeInOut"
                            }} to="#contact" type='submit' className='w-full py-3 cursor-pointer rounded-lg bg-sky-600 flex mt-3 items-center justify-center gap-2 text-white tracking-tighter'>
                                Send Message
                                <BsSend size={20}/>
                            </motion.button>
                            </AnimatePresence>
                        </div>
                    </motion.form>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    )
}

export default Contact;