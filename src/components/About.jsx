import React from 'react'
import aboutImg from '../assets/projectimages/image 1 (1).jpg'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'>Me</span> 
    </h1>
    <div className='flex flex-wrap'>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}} 
        className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex item-center justify-center'>
            <img className='rounded-2xl'src={aboutImg} alt="about" />
        </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        className='w-full lg:w-1/2'
        >
        <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>I am a dedicated and versatile software developer with a solid foundation in computer science and hands-on experience in creating web and mobile applications. I am passionate about technology and enjoy solving complex problems through programming and software design. Proficient in languages like Java, Python, C#, and JavaScript, I have expertise in both front-end and back-end development, as well as experience with mobile platforms like Android and iOS. I am eager to contribute to innovative projects and grow within a dynamic team, continuously learning and applying new technologies to build efficient and impactful software solutions.</p>
        </div>
        </motion.div>
    </div>
    </div>
  )
}

export default About




//Inside our <div></div> element in our code module above we are going to give it a "className" as shown in the code module in our "About.jsx" above as ""
//Inside our <div className='w-full lg:w-1/2'>that is "<div className='border-b border-neutral-900 pb-4'>" we are going to have our <h1></h1> tag elements 
//The <h1></h1> tag elements will be styled by giving it a "className" as shown in our code module above in our "About.jsx" component as "<h1 className='my-20 text-center text-4xl'>About Me</h1>"
//The About Me header the word "Me" will have a different shade of color so we are going to style it by having an <span></span> element
//The <span></span> element will have the following styling as shown in the code module above as "<span className='text-neutral-500'>Me</span> "
//Below the <h1></h1> tag elements that is "<h1 className='my-20 text-center text-4xl'>About<span className='text-neutral-500'>Me</span> </h1>"
//We are going to add another <div></div> element inside our <div></div> element that is "div className='border-b border-neutral-900 pb-4'>" as shown in the code module in our "About.jsx" component as  "div className='flex flex-wrap'></div>"
//Inside our "div className='flex flex-wrap'></div>" element we are also going to add another <div></div> element and style it also as shown in the code module above in our "About.jsx" component as "<div className='w-full lg:w-1/2 lg:p-8'></div>"
//Inside our "<div className='w-full lg:w-1/2 lg:p-8'></div>" element we are going to add another <div></div> element as shown in the code module above as in our "About.jsx" component as "<div className='flex item-center justify-center'></div>"
//Inside our "<div className='flex item-center justify-center'></div>" we are going to have an img tag as shown in our "About.jsx" component as "<img className='rounded-2xl'src={aboutImg} alt="about" />"
//Before we do that we are going to import our image from our assets folder as shown in the code module above in our "About.jsx" component as "import aboutImg from '../assets/projectimages/image 1 (1).jpg'"
//Next we are going to add the paragraph 
//So we are going add another <div></div> element as shown in our "About.jsx" component as "<div className='w-full lg:w-1/2'>"
//Inside our "<div className='w-full lg:w-1/2'>" element we are going to have another "<div></div> element " that is "<div className='flex justify-center lg:justify-start'></div>" as shown in the code module above in our "About.jsx" component 
//inside our "<div className='flex justify-center lg:justify-start'></div>" we are going to have our <p></p> tags that is our paragraph as shown in the code module above as " <p>I am a dedicated and versatile software developer with a solid foundation in computer science and hands-on experience in creating web and mobile applications. I am passionate about technology and enjoy solving complex problems through programming and software design. Proficient in languages like Java, Python, C#, and JavaScript, I have expertise in both front-end and back-end development, as well as experience with mobile platforms like Android and iOS. I am eager to contribute to innovative projects and grow within a dynamic team, continuously learning and applying new technologies to build efficient and impactful software solutions.</p>"
//We are going to style our <p></p> tags that is our paragraph as shown in our code module above in our "About.jsx" component as ""

