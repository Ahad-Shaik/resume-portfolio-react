import React, { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import EducationCertifications from './components/EducationCertifications'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import AnimatedDotsBackground from './components/AnimatedDotsBackground'
import LoadingScreen from './components/LoadingScreen'
import './App.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <ThemeProvider>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="App">
          <AnimatedDotsBackground />
          <Header />
          <main>
            <Hero />
            <About />
            <EducationCertifications />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <ScrollToTop />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
