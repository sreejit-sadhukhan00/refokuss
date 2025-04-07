import React from 'react'

function Footer() {
  return (
    <div className='w-full '>

        <div className='max-w-screen-xl py-8 mx-auto flex  gap-40 '>
          <div className="left basis-1/2 ">
          <h1 className='text-[14vw] font-bold leading-none tracking-tighter'>refokus.</h1>
          <div >
            <ul className='flex items-center gap-10 text-zinc-500'>
                <li>Privacy Police</li>
                <li>Cookie Policy</li>
                <li>Terms</li>
            </ul>
          </div>
          </div>
          <div className=" right  basis-1/2  flex items-center gap-60">
              
              <div>
              <h2 className=' text-lg mb-8 mt-4 text-zinc-300'>Socials</h2>
                <ul className='text-zinc-400 flex flex-col  gap-4 capitalize'>
                    <li>Instagram</li>
                    <li>Twitter (x)</li>
                    <li>Linkedin</li>

                </ul>
              </div>

              <div className='basis-1/3 flex flex-col items-end'>
                <p className='text-sm font-lg text-right text-zinc-400'>refokus is a pioneering digital agency driven by design and empowered by technology</p>
                <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" className='w-32 mt-10' />
              </div>
          </div>



        </div>
    </div>
  )
}

export default Footer