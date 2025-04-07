import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Card({width,start,para,hover="false"}) {
  return (

    
    <motion.div 
    whileHover={{ backgroundColor:hover==="true" &&"#7443ff"}}
    className={`${width}  bg-zinc-700 rounded-lg pt-6 pr-6 pl-6`}>
        <motion.div
       
        >
       <div className='flex items-center justify-between '>
        <h3>Heading</h3>
        <FaArrowRight className='w-4 text-sm' />
       </div>
       
       <h1 className='text-3xl font-semibold mt-8'>Who We Are</h1>
       </motion.div>

       <motion.div 
       className='down w-full mt-56 '>

        {start===true?(
            <>
            <h1 className='text-5xl font-bold tracking-tight leading-none  '>Start Project</h1>
        <button className='rounded-full  px-4 border-2 border-zinc-200 mt-4 mb-6 hover:bg-slate-200 hover:text-black'> Contact Us</button>
        </>
        ):null}
          {
            para===true?(
            <p className='text-sm text-zinc-400 font-medium mt-[18rem]'>Explore what drive us our team.</p>
            ):null
          }
        
       </motion.div>
    </motion.div>
  )
}

export default Card