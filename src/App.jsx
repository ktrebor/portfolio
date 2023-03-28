import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import SideInfo from "./components/SideInfo"
import './App.css'

function App() {
  
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <SideInfo />
    </div>
  )
}

export default App
