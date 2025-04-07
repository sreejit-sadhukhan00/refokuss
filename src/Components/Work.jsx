import React, { useState } from 'react'
import { useScroll,useMotionValueEvent } from "framer-motion"
function Work() {

 

const[images,setImages] =useState([
  {url:"https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnV0dXJlfGVufDB8fDB8fHww",top:"50%",left:"50%",isActive:false},
  {url:"https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnV0dXJlfGVufDB8fDB8fHww",top:"58%",left:"45%",isActive:false},
  {url:"https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1dHVyZXxlbnwwfHwwfHx8MA%3D%3D",top:"41%",left:"53%",isActive:false},
  {url:"https://images.unsplash.com/photo-1508361727343-ca787442dcd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV0dXJlfGVufDB8fDB8fHww",top:"64%",left:"50%",isActive:false},
  {url:"https://plus.unsplash.com/premium_photo-1673803528948-cc3eb13120d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1dHVyZXxlbnwwfHwwfHx8MA%3D%3D",top:"44%",left:"43%",isActive:false}
]);
const { scrollYProgress } = useScroll();

scrollYProgress.on("change",(data)=>{
  ShowHideImages(Math.floor(data*100))
})
 
function imagesShow(arr){
       setImages(prev=>(
            prev.map((item,index)=>(
              arr.indexOf(index)===-1?({...item,isActive:false}):{...item,isActive:true}
            ))
       ))
}

function ShowHideImages(scrollval){
  switch (scrollval) {
    case 0:imagesShow([]);
    break;

    case 3:
     imagesShow([0]);
      break;

      case 4: imagesShow([0,1]);
      break;

      case 5:imagesShow([0,1,2]);
      break;

      case 6:imagesShow([0,1,2,3]);
      break;

      case 7:imagesShow([0,1,2,3,4]);
      break;

    default:
      break;
  }
}
 return (
    <div className='w-full mt-10'>
      <div className='relative max-w-screen-xl mx-auto text-center '>
          <h1 className='text-[22vw]   mx-auto font-sm tracking-tighter select-none'>
            WORK
          </h1>
          <div className='absolute top-0 w-full h-full '>
            {images.map((elem,index)=>(
              elem.isActive && <img className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%] ' style={{top:elem.top,left:elem.left}} src={elem.url} alt=""/>
            )
            
            )}
          </div>
      </div>
           
    </div>
  )
}

export default Work