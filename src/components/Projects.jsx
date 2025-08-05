
import React from 'react'
import blogifyImg from "../assets/project images/blogify.png"
import taskImg from "../assets/project images/task.png"
import heritageImg from "../assets/project images/heritage.png"
import Project from './Project'

const Projects = () => {

  return (
    <div className='w-[95%] mx-auto p-4   min-h-screen'>
      <div className='flex items-center justify-center gap-[30px] font-bold rounded-full bg-slate-700 w-[90%] mx-auto my-[50px]'>
        <h1 className='text-2xl   '>My Projects </h1>
      </div>
      <div className='flex flex-wrap  gap-[25px]  items-center w-full mx-auto justify-center'>

        <Project image={blogifyImg} title={"Blogify"} key={"Blogify"} description={"A Full stack Blog Website built using React,Node,Express and MongoDb"} link={"https://my-blogify-app.netlify.app"} />

        <Project image={taskImg} title={"Task Management App"} key={"Task "} description={"A Full stack Task Management Website built using Next.js,Node,Express and MongoDb "} link={"https://taskify-web-app-five.vercel.app/"} />

        <Project image={heritageImg} title={"Heritage Website"} key={"Heritage"} description={"A Website built using React and Tailwind that gives the information about the 'City of Joy' Kolkata "} link={"https://heritageofkolkata.vercel.app"} />

      </div>
    </div>
  )
}

export default Projects
