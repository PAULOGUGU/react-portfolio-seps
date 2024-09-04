import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      <div className='container justify-between mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        
      </div>
    </div>
  )
}

export default App








//So after testing our project and we see it is working properly so we are going to the next step
//The next thing we are going to do is install package from our react-icons "https://react-icons.github.io/react-icons/" website as shown in our embeded terminal as "npm install react-icons --save"
//We will be using inter-font for this project so we are going to import from the  google fonts 
//Next thing we are going to do is to go to our "index.css" file and import the google fonts there as shown in the file code module as "@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');"
//So the first thing we are going to work on is the Nav bar component 
//I want to place all my components under a folder in the "SRC" folder 
//So in the "Src" folder we are going to create a new folder called "components"
//In our newly create folder "component" we are going to create a new file called "Navbar.jsx" type the E57 Rafce function to create the function
//The next thing you have to remember is that whenever you have create a component file in this case "Navbar.jsx" you should remember that we have to import it to our "App.jsx" component 
//We are going to import "Navbar.jsx" component file our "App.jsx" file component as shown in the code module as "import Navbar from './components/Navbar'"
//The next thing we are going to do is inside our "App.jsx" component we are going to type the following code as shown in the code module above as " <div><Navbar /></div>"

