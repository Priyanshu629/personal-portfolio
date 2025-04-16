import React, { useEffect, useState } from 'react'
import { useScroll, motion } from "motion/react"

const MouseScrollBar = () => {

    const { scrollYProgress } = useScroll()
    const [postion, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)

        return () => window.removeEventListener("mouseleave", setPosition({ x: 0, y: 0 }))

    }, [])
    return (
        <div>
            <motion.div
                animate={{
                    x: postion.x,
                    y: postion.y,
                }}
                className='w-[20px] h-[20px] rounded-full bg-green-300 fixed top-0 left-0 z-10 pointer-event-none max-md:hidden'></motion.div>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left"
                }}
                className='w-full fixed top-0 left-0 h-[10px] bg-orange-300 pb-4'>

            </motion.div>
        </div>
    )
}

export default MouseScrollBar
