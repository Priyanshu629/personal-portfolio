import React, { useRef } from 'react'
import { motion, useInView } from "motion/react"
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Intro = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    return (
        <div className='w-[90%] mx-auto flex justify-around flex-wrap-reverse p-4 items-center min-h-screen ' ref={ref}>

            <div className='flex flex-col items-center gap-[30px] '>
                <h1 className='text-3xl font-bold shadow-md shadow-pink-300 p-2 '>Welcome ! 😀</h1>
                <motion.p
                    initial={{

                        opacity: 0
                    }}
                    animate={
                        isInView ?
                            {

                                opacity: 1,
                                boxShadow: ["-5px 5px 1px green", "5px 5px 1px green", "0 5px 1px green", "0 -5px 1px green"]
                            } : {}


                    }
                    transition={{
                        boxShadow: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        },

                        opacity: {
                            duration: 3,
                        }

                    }}
                    className='border-2 p-4 italic  font-semibold text-lg max-w-[500px] rounded-tl-[10px] rounded-br-[10px]  '>" My name is Priyanshu kumar mishra and I live in kolkata , West Bengal .
                    I am a computer science student and completed my bachleors degree in
                    B.sc computer Science from University of Calcutta. I am very much
                    passionate about Website Development and want to see myself at a higher
                    position in IT companies in future "</motion.p>

                {/* cta */}
                <div className='w-full flex gap-[30px] items-center'>
                    <a href="https://linkedin.com/in/priyanshumishra2001" target="_blank" >
                        <FaLinkedin size={36} />
                    </a>
                    <a href="https://github.com/Priyanshu629" target="_blank" >
                        <FaGithub size={36} />
                    </a>
                    <a href="https://drive.google.com/file/d/1OEaPOvTOXekBJVy6QFPeMOJYaOTJmkKQ/view?usp=sharing"  className='flex items-center gap-[5px] border-2 rounded-md p-2 hover:border-green-400'>
                        <span className='text-lg'>My Resume</span><FaFileDownload size={24} />
                    </a>
                </div>
            </div>

            <motion.img
            initial={{
                y:"-80px"
            }}
           
            animate={{
                y:isInView?0:""
            }}

            transition={{
                duration:.5
            }}
            src="./MyImage.webp" alt="My Image" className='max-w-[300px]  rounded-full border-2 border-white my-[50px]' loading='lazy' />
        </div >
    )
}

export default Intro
