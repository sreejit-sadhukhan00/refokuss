import React from 'react'
import Button from './Button'

function Product({title,description,islive,iscase,mover,index}) {
  return (
    <div className='w-full   h-[19rem]  text white  flex items-center '>
            <div onMouseEnter={()=>{mover(index)} }className='   max-w-screen-lg mx-auto flex items-center justify-between '>
          <h1 className='text-5xl capitalize font-md'>{title}</h1>
          <div className="details w-1/4 ">
            <p className='mb-10'>{description}</p>
            <div className='flex justify-between items-center'>
            {islive && <Button title="Live Project"/>}
            {iscase && <Button title='Case Study'/>}
            </div>
          </div>
            </div>
    </div>
  )
}

export default Product