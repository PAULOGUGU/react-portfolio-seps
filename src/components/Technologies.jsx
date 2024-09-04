import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiPython } from "react-icons/di"
import { DiJava } from "react-icons/di";
import { motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-bottom border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiPython className='text-7xl text-cyan-blue azure'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJava className='text-7xl background-color: #f0f0f0;'/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies



//First we are going to have to import our "Technologies.jsx" component in our "App.jsx" component as shown in the "App.jsx" component as "import Technologies from './components/Technologies'"
//Next we are going to style our header that is "Technologies" as shown in our code module above as "<div className='border-bottom border-neutral-800 pb-24'>Technologies</div>"
//Inside our <div></div> element that is "<div className='border-bottom border-neutral-800 pb-24'>Technologies</div>" we are going to have a <h2></h2> element tag which is already styled as shown in the code module in our "Technologies.jsx" componet above as in  "<h2 className='my-20 text-center text-4xl'>Technologies</h2>"
//Inside our <div></div> element that is "<div className='border-bottom border-neutral-800 pb-24'>we are going to add another <div></div> element as shown in the code mode above in our "Technologies.jsx" component as "<div className='flex flex-wrap items-center justify-center gap-4'>"
//Inside our <div></div> element that is "<div className='rounded-2xl border-4 border-neutral-800 p-4'></div>" we are going to add another <div></div> element as shown in the code mode above in our "Technologies.jsx" component as "<div className='rounded-2xl border-4 border-neutral-800 p-4'></div>"
//Next we are going to be importing our icons we will be using starting with "React-Icon" as shown in our code module above in our "Technologies.jsx" component as "import { RiReactjsLine } from 'react-icons/ri'"
//Inside our <div></div> element that is "<div className='rounded-2xl border-4 border-neutral-800 p-4'> we are going to add the following components "<RiReactjsLine />"
//Next we are going to style them that is "<RiReactjsLine />" in short we have created a child component that is "<RiReactjsLine />" inside our Parent component that is "Technologies.jsx"
//We are going to stytle our "<RiReactjsLine />" component as shown in the code module above as "RiReactjsLine className='text-7xl text-cyan-400'/>"
//Because we have somre other few icons we are going to copy and paste " <div className='rounded-2xl border-4 border-neutral-800 p-4'><RiReactjsLine className='text-7xl text-cyan-400'/></div>" several times as shown in the code module above in our "Technologies.jsx" component as shown in our code module in our "Technologies.jsx" compoenent as "    <div className='rounded-2xl border-4 border-neutral-800 p-4'><RiReactjsLine className='text-7xl text-cyan-400'/></div><div className='rounded-2xl border-4 border-neutral-800 p-4'><TbBrandNextjs className='text-7xl'/></div><div className='rounded-2xl border-4 border-neutral-800 p-4'><SiMongodb className='text-7xl text-green-500'/></div><div className='rounded-2xl border-4 border-neutral-800 p-4'><DiPython className='text-7xl text-cyan-blue azure'/></div> <div className='rounded-2xl border-4 border-neutral-800 p-4'> <DiJava className='text-7xl background-color: #f0f0f0;'/></div>"
//As you have seen in our comments above we have named our Icons in the "Technologies.jsx" file component so as we can have all of them appearing as child components inside our "Technologies.jsx" file component 
