import React from 'react'
import { PROJECTS } from '../Constants'
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <div id="projects" className='border-b border-neutral-900 pb-4 '>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                     whileInView={{opacity: 1, x: 0}}
                     initial={{opacity: 0, x: -100}}
                     transition={{duration:1}}
                    className='w-full lg:w-1/15'>
                    <img src={project.image} 
                    width={150}
                    height={150}
                     alt={project.title} 
                     className='mb-6 rounder'
                     />
                </motion.div>
                <motion.div 
                 whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: 100}}
                 transition={{duration:1}}
                className='w-full max-w-xl lg:w-3/4'> 
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                {project.technologies.map((tech, index) => 
                <span key={index} className='mr-2 bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900'>{tech}</span>
                )}
                </motion.div>
                </div>
            ))}
        </div>
        </div>

  )
}

export default Projects


//Here we are going to style our <div></div> element as shown in our code module above in our "Projects.jsx" code module as "<div className='border-b border-neutral-900 pb-4 '>Projects</div>"
//Inside our "<div className='border-b border-neutral-900 pb-4 '>Projects</div> " element  we are going to have a <h1></h1> tags 
//Which we also style them using "className" as shown in our code module above as "<h1 className='my-20 text-center text-4xl'>Projects</h1>"


//Here is this component we are also be using the mapping method used in React. 
//We will be mapping all our data/content from our "Index.js" file which is in the constants folder in our project
//So wwe will create a new <div></div> element inside our " <div className='border-b border-neutral-900 pb-4 '><h1 className='my-20 text-center text-4xl'>Projects</h1></div>" whereby we are going to use them to map the content from our constants folder 
//This is shown in our "Projects.jsx" component file as "<div>{PROJECTS.map((project, index) => (<div key={index} className='mb-8 flex flex-wrap lg:justify-center'><img src={project.image} alt={project.title} /></div>"
//inside our 