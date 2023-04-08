import React, { useState, useRef } from "react"
import "./Projects.css"

const projectData = [
  {
    id: 1,
    name: 'Quizzical',
    description: 'A web app that access trivia questions from the Open Trivia DataBase API and keeps players score based on their answers.',
    technologies: ["React", "CSS", "HTML"], 
    git: "https://github.com/ktrebor/quizzical",
    url: "https://ktrebor.github.io/quizzical/",
    image: "./quizzical.png"
  },
  {
    id: 2,
    name: 'Tenzies',
    description: 'A dice game where you have to keep rolling the dices until all ten of the dice show the same number.',
    technologies: ["React", "CSS", "HTML"], 
    git: "https://github.com/ktrebor/tenzies",
    url: "https://ktrebor.github.io/tenzies/",
    image: "./tenzies.png"
  },
  {
    id: 3,
    name: 'Meme Generator',
    description: 'An application that allows users to insert their own text using pre-existing images.',
    technologies: ["React", "CSS", "HTML"], 
    git: "https://github.com/ktrebor/randommemegenerator/",
    url: "https://random-memes-generator-scrimba.netlify.app/",
    image: "./randommemegenerator.png"
  },
  {
    id: 4,
    name: 'Rock Paper Scissors',
    description: 'The well-known hand game played between you and the computer, where each of you select the right hand shape in order to win.',
    technologies: ["JS", "CSS", "HTML"], 
    git: "https://github.com/ktrebor/rock-paper-scissors",
    url: "https://ktrebor.github.io/rock-paper-scissors/",
    image: "./rockpaperscissors.png"
  },
  {
    id: 5,
    name: 'Etch A Sketch',
    description: 'Lorem',
    technologies: ["JS", "CSS", "HTML"],
    git: "https://github.com/ktrebor/etch-a-sketch",
    url: "https://ktrebor.github.io/etch-a-sketch/",
    image: "./etch-a-sketch.png"
  }
]

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const activeProject = projectData[activeProjectIndex]
  const projectCardRef = useRef(null)

  const technologiesList = activeProject.technologies.map(item => {
      return (
          <li key={item}>{item}</li>
      )
  })

  function handlePrevClick() {
    setActiveProjectIndex(prevActiveProjectIndex  =>
      prevActiveProjectIndex === 0 ? projectData.length - 1 : prevActiveProjectIndex - 1
    )
  }

  function handleNextClick() {
    setActiveProjectIndex(prevActiveProjectIndex =>
      prevActiveProjectIndex === projectData.length - 1 ? 0 : prevActiveProjectIndex + 1
    )
  }

  function handleTouchStart(e) {
    const touchStartX = e.changedTouches[0].clientX
    projectCardRef.current.dataset.touchStartX = touchStartX
  }

  function handleTouchMove(e) {
    const touchMoveX = e.changedTouches[0].clientX
    const touchStartX = projectCardRef.current.dataset.touchStartX
    const deltaX = touchMoveX - touchStartX
    projectCardRef.current.style.transform = `translateX(${deltaX}px)`
  }

  function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX
    const touchStartX = projectCardRef.current.dataset.touchStartX
    const deltaX = touchEndX - touchStartX
    if (Math.abs(deltaX) > window.innerWidth * 0.3) {
      if (deltaX < 0) {
        handleNextClick()
      } else {
        handlePrevClick()
      }
    }
    projectCardRef.current.style.transform = ""
  }

  return (
    <section id="projects" className="projects">
        <h3>Projects</h3>
        <div
          className="project-card"
          ref={projectCardRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <a href={activeProject.url} className="project-image-link">
              <h4>{activeProject.name}</h4>
              <p>{activeProject.description}</p>
              <img className="project-image" src={activeProject.image} />
          </a>
          <div className="project-links">
            <ul className="project-technologies">
                {technologiesList}
            </ul>
            <div className="project-out">
              <a href={activeProject.git} target="_blank"><img src={"./github.png"} /></a>
              <a href={activeProject.url} target="_blank"><img src={"./external-link.png"}/></a>
            </div>

          </div>
        </div>
        <div className="project-navigation">
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    </section>
  )
}

export default Projects