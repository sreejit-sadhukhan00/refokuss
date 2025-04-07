import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imageUrl,direction}) {
  return (

    <div className=' flex w-full '>
    <motion.div
    initial={{x:direction==='left'?"0":'-100%'}}
    animate={{x:direction==='left'?"-100%":'0%'}}
    transition={{ease:"linear",duration:14,repeat:Infinity,repeatDelay:0}}
    className='flex py-10  gap-40   items-center flex-shrink-0 pr-20 '>
           {imageUrl.map((elem,index)=>(
            <img key={index} src={elem} alt="" className='w-[120px] flex-shrink-0'  />
           ))}
           
    </motion.div>
    <motion.div
    initial={{x:direction==='left'?"0":'-100%'}}
    animate={{x:direction==='left'?"-100%":'0%'}}
    transition={{ease:"linear",duration:14,repeat:Infinity,repeatDelay:0}}
    className='flex py-10  gap-40   items-center flex-shrink-0 pr-20 '>
           {imageUrl.map((elem,index)=>(
            <img key={index} src={elem} alt="" className='w-[120px] flex-shrink-0'  />
           ))}
           
    </motion.div>
   
    
    </div>
  )
}

export default Marquee