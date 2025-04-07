import React, { useState, useRef, useEffect } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    const data=[
        {title:"Arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:false},
        {title:"YIR 2024",description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",live:true,case:true},
        {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:true},
        {title:"Rainfall",description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",live:true,case:true},
    ]
   const[pos,setpos]=useState(0);
   
   // Create refs for each video
   const videoRefs = useRef([]);
   
   // Initialize the refs array
   useEffect(() => {
     videoRefs.current = videoRefs.current.slice(0, 5);
   }, []);
   
   // Effect to manage video playback based on current position
   useEffect(() => {
     // Calculate which item is in focus based on position
     const focusedIndex = Math.round(pos / 19);
     
     // Play the video in focus and pause others
     videoRefs.current.forEach((videoRef, index) => {
       if (videoRef) {
         if (index === focusedIndex) {
           // If video is not already playing, play it
           if (videoRef.paused) {
             videoRef.play().catch(err => console.log("Video play error:", err));
           }
         } else {
           // Pause other videos
           if (!videoRef.paused) {
             videoRef.pause();
           }
         }
       }
     });
   }, [pos]);
   
   function mover(val){
     setpos(val*19)
   }

  return (
    <div className='relative mt-32'>
        {data.map((elem,index)=>(
            <Product key={index} title={elem.title}description={elem.description}
            islive={elem.live}
            iscase={elem.case}
            mover={mover}
            index={index}
            />))}

        <div className='w-full h-full pointer-events-none absolute top-0  '>

          <motion.div
           initial={{y:pos,x:'-50%'}} 
            animate={{y:pos+'rem'}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:0.6}}
           className='absolute w-[25rem] left-[45%]  h-[19rem]   overflow-hidden '>

          <motion.div animate={{y:-pos+'rem'}} 
           transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
          className=' w-full h-full  '>
                  <video 
                    ref={el => videoRefs.current[0] = el} 
                    src="src/assets/arqitel-D3jJRwFT.mp4" 
                    loop 
                    muted
                    playsInline
                    preload="auto"
                    className='w-full h-full rounded-3xl'
                  ></video>
          </motion.div>

          <motion.div animate={{y:-pos+'rem'}}
           transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
          className=' w-full h-full  scene'>
                     <video 
                       ref={el => videoRefs.current[1] = el}
                       src="src/assets/rainfall-BZC7HG1T.mp4" 
                       loop 
                       muted
                       playsInline
                       preload="auto" 
                       className='w-full h-full rounded-3xl'
                     ></video>
          </motion.div>

          <motion.div  animate={{y:-pos+'rem'}}
           transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
          className=' w-full h-full  scene'>
                     <video 
                       ref={el => videoRefs.current[2] = el}
                       src="src/assets/ttr-CUQdDHBj.mp4" 
                       loop 
                       muted
                       playsInline
                       preload="auto"
                       className='w-full h-full rounded-3xl'
                     ></video>
          </motion.div>

          <motion.div animate={{y:-pos+'rem'}}
           transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
          className=' w-full h-full  scene'>
                          <video 
                            ref={el => videoRefs.current[3] = el}
                            src="src/assets/yahoo-D7WzLbum.mp4" 
                            loop 
                            muted
                            playsInline
                            preload="auto"
                            className='w-full h-full rounded-3xl'
                          ></video>
          </motion.div>

          <motion.div  animate={{y:-pos+'rem'}}
           transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}}
          className=' w-full h-full  scene'>
                              <video 
                                ref={el => videoRefs.current[4] = el}
                                src="src/assets/yir-BzJiRbqx.mp4" 
                                loop 
                                muted
                                playsInline
                                preload="auto"
                                className='w-full h-full rounded-3xl'
                              ></video>
          </motion.div>
          
          </motion.div>
        </div>

    </div>
  )
   
}
export default Products;