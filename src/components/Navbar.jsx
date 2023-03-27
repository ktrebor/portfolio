import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    
    windowWidth < 768 ? closeMenu() : ""

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src="/react.svg" alt="Logo" />
          </a>
        </div>
        
        {windowWidth <= 768 ? 
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </div>
        : 
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#">Resume</a>
          </div>
        }
        
        {showMenu && 
        <div className="navbar-menu" onClick={closeMenu}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#">Resume</a>
        </div>
        }
      </nav>
    </header>
  )
}

export default Navbar;
