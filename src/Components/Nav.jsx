import React from 'react'
import Button from './Button'

function Nav() {
  return (
    <div className='  max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[0.5px] border-zinc-700 '>

        <div className='left-section flex gap-20 items-center'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt=""  />

<div className="links flex gap-14">
    {["Home","Work","Culture","","News"].map((elem,index)=>(
         elem.length===0 ? <span key={index} className='w-0.5 h-8 bg-zinc-700'></span> : <a key={index} className=' text-sm flex items-center gap-2'>
         {index===1 && <span key={index} style={{boxShadow:"rgb(0, 255, 25) 0px 0px 0.35em"}} 
          className='inline-block w-2 h-2 rounded-full bg-green-500'></span> }    
             {elem}</a>
    ))}
</div>
        </div>
          
          <Button />

    </div>
  )
}

export default Nav