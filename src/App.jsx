import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import SideInfo from "./components/SideInfo"
import Projects from "./components/Projects"
import './App.css'

function App() {
  
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SideInfo />
    </div>
  )
}

export default App
