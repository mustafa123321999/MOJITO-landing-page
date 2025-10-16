import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Nav from './components/Nav'
import Hero from './components/Hero'

gsap.registerPlugin( ScrollTrigger, SplitText ) //regestering the plugins

const App = () => {

  return (

    <main className=' '>

       <Nav />
       <Hero />

       <div className="h-dvh bg-black">



       </div>
        
    </main>

  )
}

export default App