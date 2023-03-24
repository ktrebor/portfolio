import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/react.svg" alt="Logo" />
      </div>
      
      {windowWidth <= 768 ? 
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </div>
      : 
        <div className="navbar-links">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <a href="#">Resume</a>
        </div>
      }

      {showMenu && 
      <div className="navbar-menu">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
      </div>
      }
    </nav>
  );
}

export default Navbar;
