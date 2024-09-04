import logo from "../assets/projectimages/porrtfoliologo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 w-30 ">
      <div className="flex items-center w-full">
        <motion.img 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration:1}}
        className="ml-10" src={logo} alt="logo" />
      </div>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration:1}}
      className="ml-full flex items-center justify-top px-10 gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaXTwitter />
          <FaInstagram />
      </motion.div>
    </nav>
    
  )
}

export default Navbar;





//Lets see how our Navbar will be looking
//On the right side we are going to have our logo and on the left side we ahve the icons 
//We will declare a Nav tag with "ClassName" as shown in the code module in our "Navbar.jsx" component as "<nav className="mb-20 flex items-center justify-betweeen py-6"></nav>"
//Next we are going to create a "<div></div> of className="flex flex-shrink-0 items-center""
//Next we are going to insert our image tag as shown in the code module in our "Navbar.jsx" component as " <img src={logo} alt="logo" />"
//The next thing we are going to import our icons as shown in the code module above "import { FaLinkedin } from "react-icons/fa";import { FaGithub } from "react-icons/fa";import { FaXTwitter } from "react-icons/fa6";import { FaInstagram } from "react-icons/fa";"
//Inside our "<div className="flex flex-shrink-0 items-center"><img src={logo} alt="logo" /></div>" we are going to create another <div></div> element 
//This is shown in our code module in our "Navbar.jsx" component as " <div className="m-8 flex items-center justify-center gap-4 text-2xl"><FaLinkedin /><FaGithub /><FaXTwitter /><FaInstagram /></div>"
//Next we are going to go to our "Tailwind.css" website and download a beautiful background 
//Next after creating our Navbar.jsx component we are going to have our Hero Section 
//So we are going to go to our Components folder and we are going to create a jsx file called "Hero.jsx"
