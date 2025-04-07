import { useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';


import './App.css'
import Nav from './Components/Nav'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marques from './Components/Marques'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
 
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <div className='w-full h-[100%] bg-zinc-900 text-white font-["Satoshi_"]   '>
      <Nav/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/>
   </div>
  )
}

export default App
