import React from 'react'
import { motion } from "motion/react"
import EducationCard from './EducationCard'

const Education = () => {
    return (
        <div className='w-full p-4 min-h-screen my-[50px]'>


            <div className='flex items-center justify-center gap-[30px] font-bold rounded-full bg-slate-700 w-[90%] mx-auto my-[50px]'>
                <h1 className='text-2xl   '>My Education </h1>
            </div>
            <div className='flex   gap-[25px]  items-center w-full mx-auto flex-col'>

                <EducationCard key={"college"} name={"University Of Calcutta (New Alipore College)"} duration={"Jul 2020 - Jul 2023 (Passout 2024)"} subject={"B.Sc CS Hons."} description={"Completed my grduation from this University "} />

                <div className='w-[5px] h-[100px] bg-white rounded-sm'></div>

                <EducationCard key={"12th"} name={"Kalyani Central Model School"} duration={"April 2018 - April 2020 (Passout 2020)"} subject={"Pure Science (PCM)"} description={"Completed my Higher Secondary (12th) from this School "} />

                <div className='w-[5px] h-[100px] bg-white rounded-sm'></div>

                <EducationCard key={"10th"} name={"S.S.Public School"} duration={"Passout April 2018"} subject={"Maths , S.S.T, Science, Hindi & English"} description={"Completed my Secondary Education (10th) from this school "} />

            </div>

        </div>
    )
}

export default Education
