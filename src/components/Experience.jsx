import React from 'react'
import { motion } from "motion/react"
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaFigma, FaGit, FaGithub,FaLink } from "react-icons/fa";

const Experience = () => {
    
    return (
        <div className='w-full p-4 min-h-screen'>
            <div className='flex items-center justify-center gap-[30px] font-bold rounded-full bg-gray-700 w-[90%] mx-auto'>
                <h1 className='text-2xl   '>Experience </h1><CgWorkAlt size={36} />
            </div>
            <motion.div
                className='p-2  w-[100%] my-2 flex flex-col gap-[20px]'
                
                initial={{
                    x: "-100%"
                }}
                whileInView={{
                    x: 0
                }}
                transition={{
                    duration: 1,
                }}
            >

                <span className='text-xl font-bold text-orange-400'>Company : EcoEvr Mobility Pvt Ltd.</span>
                <span className='italic font-semibold '>Role : Frontend Developer Intern (React) (20th March 2025 - Present)</span>
                
                <div className='flex gap-[20px] font-bold  text-lg'>
                <a href="https://bhavisyajyoti.netlify.app" target='_blank' className='my-[10px] flex gap-[15px] hover:text-green-200 underline'><FaLink size={24}/> <span>Live Link </span></a>
                </div>
                <ul className=' rounded-sm  list-disc   text-lg font-mono text-green-400 border-2 p-6'>
                    <li>Solely responsible for developing the frontend of the website and writing reusable, optimized , clean and testable components.
                    </li>
                    <li>Converting Figma designs into pixel perfect responsive and modern UI using React and Tailwind</li>
                    <li>Using Git & GitHub for version control, managing branches, and collaborating on code reviews.
                    </li>
                    <li>Participating in meetings and understanding project requirements.</li>
                   
                </ul>

                <span className='font-bold text-xl'>Skills  </span>
                <div className='flex gap-[20px] border-2 p-4'>
                    <FaReact size={48} />
                    <FaFigma size={48} />
                    <FaGit size={48} />
                    <FaGithub size={48} />
                </div>
            </motion.div>
        </div>
    )
}

export default Experience
