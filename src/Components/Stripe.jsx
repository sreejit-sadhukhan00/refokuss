import React from 'react'

function Stripe({url,num}) {
    
  return (
    <div className='w-1/5  px-4 py-4 mt-8  border-t-2 border-b-2 border-r-2 border-zinc-700 flex items-center justify-between'>
     <img src={url} alt="logos"  />
       <span className='font-semibold'>{num}</span>
    </div>
  )
}

export default Stripe;