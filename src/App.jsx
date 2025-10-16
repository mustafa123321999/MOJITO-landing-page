import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'

gsap.registerPlugin( ScrollTrigger, SplitText ) //regestering the plugins

const App = () => {

  return (

    <main className=' '>

       <Nav />
       <Hero />
       <Cocktails />
       <About />

    </main>

  )
}

export default App