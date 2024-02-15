import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eye from './components/Eye'
import FeaturedProject from './components/FeaturedProject'
 import Cards from './components/Cards'
 import Ready from './components/Ready'
 import Footer from './components/Footer'
 import LocomotiveScroll from 'locomotive-scroll';

function App() {
 

const locomotiveScroll = new LocomotiveScroll();
  return (
    

    <h1 className="  min-h-screen w-full h-screen  text-white bg-zinc-900   no-underline ">
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eye/>
      <FeaturedProject/>
      <Cards/>
      
      <Ready/>
      <Footer/>
      

    </h1>
  )
}

export default App