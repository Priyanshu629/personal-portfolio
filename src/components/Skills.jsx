import React from 'react'
import { motion} from "motion/react"
import { FaReact, FaFigma, FaGit, FaGithub, FaLink, FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
   
    return (
        <div className='w-full p-4 mt-[50px] min-h-screen'>
            <div className='flex items-center justify-center gap-[30px] font-bold rounded-full bg-pink-700 w-[90%] mx-auto '>
                <h1 className='text-2xl   '>My Skills </h1>
            </div>
            <motion.div
                className='p-2  w-[100%] my-2 flex flex-col   gap-[20px]'
               
                initial={{
                    y: "100px"
                }}
                whileInView={{
                    y:0
                }}
                transition={{
                    duration: 1,
                }}
            >
                <span className="text-lg font-semibold mx-4">Frontend</span>
                <div className='flex gap-[20px] flex-wrap  w-[90%] mx-auto'>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <FaHtml5 size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <FaCss3 size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <FaJs size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <FaReact size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <RiNextjsFill size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <RiTailwindCssFill size={72} className=' ' />
                    </div>

                </div>

                <span className="text-lg font-semibold mx-4">Backend</span>
                <div className='flex gap-[20px] flex-wrap w-[90%] mx-auto'>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <FaNodeJs size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <SiExpress size={72} className=' ' />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                        <DiMongodb size={72} className=' ' />
                    </div>
                </div>

                <span className="text-lg font-semibold mx-4">Tools</span>
                <div className='flex gap-[20px] flex-wrap w-[90%] mx-auto'>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                    <FaFigma size={72} />
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                    <FaGit size={72}/>
                    </div>
                    <div className='max-w-[400px]  p-2 rounde-sm border-2'>
                    <FaGithub size={72}/>
                    </div>
                </div>




            </motion.div>
        </div>
    )
}

export default Skills
