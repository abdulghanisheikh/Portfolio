import React from 'react';
import {motion} from 'motion/react';

const Skills=()=>{
  return(
    <div className='skills flex flex-col w-full gap-15 min-h-screen py-25 items-center text-white'>
        <div className='flex flex-col gap-1 w-2/3'>
          <h1 className='text-6xl font-bold'>Tech Stack I Work With.</h1>
          <hr className='border-t border-4 border-blue-500 rounded-full w-70' />
        </div>
        <div className='flex flex-col w-[80%] gap-8'>
          <div className='flex px-10 py-5 min-h-40 hover:shadow-md hover:shadow-blue-500 hover:scale-103 hover:rounded-lg duration-500 ease-in-out'>
            <div className='self-start w-1/2 py-2'>
              <h1 className='font-semibold text-xl text-gray-400'>LANGUAGES</h1>
            </div>
            <motion.div initial={{
              y:50,
              opacity:0
            }} whileInView={{
              y:0,
              opacity:1
            }} transition={{
              duration:0.6,
              delay:0.1,
              ease:"easeInOut"
            }} viewport={{
              amount:0.5
            }} className='flex gap-5 flex-wrap py-3 self-start items-center justify-items-start'>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../java.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Java</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../js.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>JavaScript</h1>
              </div>
            </motion.div>
          </div>
          <motion.div className='flex px-10 py-5 min-h-40 hover:shadow-md hover:shadow-blue-500 hover:scale-103 hover:rounded-lg duration-500 ease-in-out'>
            <div className='self-start w-1/2 py-2'>
              <h1 className='font-semibold text-xl text-gray-400'>FRONTEND</h1>
            </div>
            <motion.div initial={{
              y:50,
              opacity:0
            }} whileInView={{
              y:0,
              opacity:1
            }} transition={{
              duration:0.6,
              delay:0.1,
              ease:"easeInOut"
            }} viewport={{
              amount:0.5
            }} className='flex py-2 flex-wrap gap-5 self-start items-center'>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../reactlogo.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>React.js</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../TailwindCSS.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Tailwindcss</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../html-5.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>HTML5</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../css-3.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>CSS3</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../motion-logo.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Motion</h1>
              </div>
            </motion.div>
          </motion.div>
          <div className='flex px-10 py-5 min-h-40 hover:shadow-md hover:shadow-blue-500 hover:scale-103 hover:rounded-lg duration-500 ease-in-out'>
            <div className='self-start w-1/2 py-2'>
              <h1 className='font-semibold text-xl text-gray-400'>BACKEND</h1>
            </div>
            <motion.div initial={{
              y:50,
              opacity:0
            }} whileInView={{
              y:0,
              opacity:1
            }} transition={{
              duration:0.6,
              delay:0.1,
              ease:"easeInOut"
            }} viewport={{
              amount:0.5
            }} className='flex py-2 flex-wrap gap-5 self-start items-center'>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../Node.js.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Node.js</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-200 rounded-full'>
                  <img src="../Express.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Express.js</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../MongoDB.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>MongoDB</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-200 rounded-full'>
                  <img src="../Mongoose.js.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Mongoose.js</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../response.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>REST APIs</h1>
              </div>
            </motion.div>
          </div>
          <div className='flex px-10 py-5 min-h-40 hover:shadow-md hover:shadow-blue-500 hover:scale-103 hover:rounded-lg duration-500 ease-in-out'>
            <div className='self-start w-1/2 py-2'>
              <h1 className='font-semibold text-xl text-gray-400'>TOOLS</h1>
            </div>
            <motion.div initial={{
              y:50,
              opacity:0
            }} whileInView={{
              y:0,
              opacity:1
            }} transition={{
              duration:0.6,
              delay:0.1,
              ease:"easeInOut"
            }} viewport={{
              amount:0.5
            }} className='flex py-2 flex-wrap gap-5 self-start items-center'>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../Git.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Git</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-200 rounded-full'>
                  <img src="../GitHub.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Github</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../Postman.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>Postman</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../vscode.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>VS Code</h1>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <div className='p-2 bg-zinc-800 rounded-full'>
                  <img src="../NPM.png" alt="" className='w-6 h-6 object-cover'/>
                </div>
                <h1>NPM</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
}

export default Skills