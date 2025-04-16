import React from 'react'
import { motion} from 'motion/react'
const EducationCard = ({name,duration, subject , description}) => {
  return (
    <div>
        <motion.div 
          
          initial={{
           opacity:0,
          }}
          whileInView={{
           opacity:1,
          }}
          transition={{duration:3}}
          className=' p-4 rounded-md flex flex-col mx-auto  gap-[20px] border-4 shadow-md shadow-orange-400 max-w-[800px] min-h-[250px]'>
              <h1 className='text-2xl font-bold bg-yellow-800 p-2 rounded-md'>{name}</h1>
              <span className='font-bold text-lg '>{duration}</span>
              <span className='text-lg italic font-semibold border-2 p-2 rounded-sm'>{subject}</span>
              <p className='font-semibold text-[16px] font-serif '>{description}</p>
              
          </motion.div>
    </div>
  )
}

export default EducationCard
