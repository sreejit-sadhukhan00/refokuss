import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
function Button({title="Get Started"}) {
  return (
    <div className='max-w-40 px-4 py-1 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
     <span className='text-sm font-regular'>{title}</span>
     <IoMdReturnRight />
    </div>
  )
}

export default Button