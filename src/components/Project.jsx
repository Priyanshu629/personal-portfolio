import React  from 'react'
import { motion} from 'motion/react'

const Project = ({title,image,description ,link}) => {
   
  return (
    
      <motion.div 
          
           initial={{
            scale:0,
           }}
           whileInView={{
            scale:1,
           }}
           transition={{duration:1}}
           className='max-w-[400px] p-2 rounded-md flex flex-col mx-auto  gap-[15px] border-2 shadow-md shadow-orange-400'>
               <h1 className='text-2xl font-bold'>{title}</h1>
               <img src={image} alt="blogify" className='max-w-[300px] mx-auto border-2 border-purple-400'/>
               <p className='font-semibold text-[16px] font-serif '>{description}</p>
               <a href={link} className='bg-purple-600 hover:border-yellow-500 p-1 text-lg text-center font-bold mx-auto rounded-md border-2 border-green-200 w-1/2' target='_blank'>Live</a>
           </motion.div>
    
  )
}

export default Project
