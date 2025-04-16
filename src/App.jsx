import React from 'react'
import Intro from './components/Intro'
import Experience from './components/Experience'

import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import MouseScrollBar from './components/MouseScrollBar'

const App = () => {

  return (
    <div>
      <MouseScrollBar />

      {/* components */}
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  )
}

export default App
