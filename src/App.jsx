import React, { useEffect, useState } from 'react'
import Intro from './components/Intro'
import Experience from './components/Experience'
import {useScroll,motion} from "motion/react"
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  const {scrollYProgress}= useScroll()
  const [postion ,setPosition] =useState({x:0,y:0})

  useEffect(()=>{

    const handleMouseMove = (e) => {
      setPosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",handleMouseMove)

    return ()=> window.removeEventListener("mouseleave",setPosition({x:0,y:0}))

  },[])
  return (
    <div>

      <motion.div
      animate={{
        x:postion.x,
        y:postion.y,
      }}
      className='w-[20px] h-[20px] rounded-full bg-green-300 fixed top-0 left-0 z-10 pointer-event-none max-md:hidden'></motion.div>
      <motion.div
      style={{
        scaleX:scrollYProgress,
        transformOrigin: "left"
      }}
      className='w-full fixed top-0 left-0 h-[10px] bg-orange-300 pb-4'></motion.div>


      <Intro/>
      <Experience/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
