import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutSamples from './components/AboutSamples/AboutSamples'
import About from './components/About/About'
import Productos from './components/Productos/Productos'

function App() {
  

  return (
    <>  
    <Header/>
    <Hero/>
    <About/>
    <AboutSamples/>
    <Productos/>
    </>
  )
}

export default App
