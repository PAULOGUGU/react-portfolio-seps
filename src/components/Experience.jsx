import React from 'react'
import { EXPERIENCES } from '../Constants';
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl'>Experience</motion.h1>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex-wrap lg:justify-center'>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration:1}}
              className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
              </motion.div>
              <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration:1}}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>
                {experience.role} - <span className='text-sm text-purple-100'>
                  {experience.company}
                </span>
              </h6>
              <p className='mb-4 text-neutral-400'>{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
              ))}
              </motion.div>
            </div> 
          ))}
        </div>
    </div>
  )
}

export default Experience


//First as usuall we are going to include the "<Experience />"" component in our "App.jsx" this is after you have created the "Experience.jsx" file component as shown in the above code module in our current file which is the "Experience.jsx" Component 
//Next we are going to import our "Experience.jsx" file in our "App.jsx" component as shown in our code module in our "App.jsx" file component as "import Experience from './components/Experience'"
//We are going to have our <div></div> element style as shown in our code module above as "<div className='border-b border-neutral-900 pb-4'></div>"
//Inside our <div></div> element that is "<div className='border-b border-neutral-900 pb-4'></div>" we are going to have a header <h1></h1> element tags
//The <h1></h1> element tags will contain the text "Experience" and we are going to style it using the "className" as shown in our code module above as "<h1 className='my-20 text-center text-4xl'>Experience</h1>"


//To display the content in this section we are going to use our mapping record so as to display our content from the constants that is our "Index.js"
//We are going to create a new div below our "<h1 className='my-20 text-center text-4xl'>Experience</h1>"
//Inside our <div></div> element we are going to style it as we have done before by giving it a "className" then styling it 
//This is shown in our code above in our "Experience.jsx" as "<div>{EXPERIENCES.map((experience, index) => (<div key={index} className='mb-8 flex-wrap lg:justify-center'><div className='w-full lg:w-1/4'><p className='mb-2 text-sm text-neutral-400'>{experience.year}</p></div>"
//In the above line of comment that is ""<div>{EXPERIENCES.map((experience, index) => (<div key={index} className='mb-8 flex-wrap lg:justify-center'><div className='w-full lg:w-1/4'><p className='mb-2 text-sm text-neutral-400'>{experience.year}</p></div>"" we have used the mapping method in react from the constant "index.js" file 
//Next we are going to add another <div></div> element inside "<div className='border-b border-neutral-900 pb-4'><h1 className='my-20 text-center text-4xl'>Experience</h1><div></div>"
//This is shown in our "Experience.jsx" file component code module as ""