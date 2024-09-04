import React from 'react'
import profilePic from "../assets/projectimages/rollomylo.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  className='pb-14 text-4xl font-thin tracking-tight lg:mt-10 lg:text-5xl'>Paul Ogugu Seps</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a software developer with a strong foundation in computer science and hands-on experience in developing web and mobile applications. Eager to leverage my technical skills in programming, problem-solving, and software design to contribute to innovative projects. I aim to join a dynamic team where I can collaborate and grow, utilizing my passion for technology to create efficient and impactful software solutions. My goal is to continuously learn and apply new technologies to drive the success of the organization and advance my career in the software development field.</motion.p>
            </div>
            </div>
            <div 
            className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.img 
                initial={{x:100, opacity: 0}} 
                animate={{x:0, opacity:1}}
                transition={{duration: 1, delay: 1.2}}
                className='rounded-2xl'
                src={profilePic} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero




//After creating the "Hero.jsx" file component in our UI 
//We are goinf to have a <div></div> element whereby our "Hero.jsx" component is going to return
//This shown in the code module above as "<div className='border-b border-neutral-900 pb-4 lg:mb-35'></div>"
//Inside the "<div className='border-b border-neutral-900 pb-4 lg:mb-35'></div>" we are also going to create another <div></div> element 
//This shown in the code module above as "<div className='flex flex-wrap'></div>" 
//Inside the "<div className='flex flex-wrap'></div>" we are also going to add another <div></div> element
//This shown in the code module above as " <div className='w-full lg:w-1/2'></div>"
//Inside the " <div className='w-full lg:w-1/2'></div>" we are going to add another <div></div> element 
//This shown in the code module above as "<div className='flex flex-col items-center lg:items-start'></div>"
//Inside the "<div className='flex flex-col items-center lg:items-start'></div>" element we are going to add a <h1><h1> element tags
//The <h1><h1> element tags will contain the following text "Paul Ogugu Seps"
//So we are going to style our  <h1><h1> which is " <h1>Paul Ogugu Seps</h1>" as shown in the code module above as "<h1 className='pb-14 text-4xl font-thin tracking-tight lg:mt-10 lg:text-5xl'>Paul Ogugu Seps</h1>"
//Next we are going to have a <span></span> element inside our <div></div> element below where our <h1><h1> element tag is that is "<h1 className='pb-14 text-4xl font-thin tracking-tight lg:mt-10 lg:text-5xl'>Paul Ogugu Seps</h1>"
//The <span></span> element we are going to style it as we have done on the other div elements as shown in the code module above " <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Developer</span>"
//Also inside our <div></div> element that is "<div className='flex flex-col items-center lg:items-start'>" we are going to also add a paragraph <p></p> elements below our "<span></span> element"
//Inside our "paragraph <p></p> element" we are going to have the following text "Aspiring software developer with a strong foundation in computer science and hands-on experience in developing web and mobile applications. Eager to leverage my technical skills in programming, problem-solving, and software design to contribute to innovative projects. I aim to join a dynamic team where I can collaborate and grow, utilizing my passion for technology to create efficient and impactful software solutions. My goal is to continuously learn and apply new technologies to drive the success of the organization and advance my career in the software development field."
//Our "paragraph <p></p> element" needs some styling as shown in our code module above as "<p className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am a software developer with a strong foundation in computer science and hands-on experience in developing web and mobile applications. Eager to leverage my technical skills in programming, problem-solving, and software design to contribute to innovative projects. I aim to join a dynamic team where I can collaborate and grow, utilizing my passion for technology to create efficient and impactful software solutions. My goal is to continuously learn and apply new technologies to drive the success of the organization and advance my career in the software development field.</p>"
//Next we are going to add our image; so we are going to import out "profilePic" as shown in the code module above as "import profilePic from "../assets/projectimages/rollomylo.jpg"
//Inside our <div></div> element which is ""<div className='flex flex-wrap'></div>" we are going to add another "<div></div> element" as shown in the code module as "<div className='w-full lg:w-1/2 lg:p-8'></div>"
//Inside our "<div className='w-full lg:w-1/2 lg:p-8'></div>" element we are going to have another div element and we are going to style it 
//This is shown in the code module above as "div className='flex justify-center'></div>"
//Inside our <div></div> element that is " "div className='flex justify-center'></div>" weare going to have an Img tag as shown in the code module above as ""