import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Features from './components/Feature'
function App() {
gsap.registerPlugin(ScrollTrigger)
  return (
        <main >
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
        </main>
    )
}

export default App
