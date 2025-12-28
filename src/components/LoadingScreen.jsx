import React, { useEffect, useState } from 'react'
import { FaCode, FaRocket } from 'react-icons/fa'
import './LoadingScreen.scss'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    // Prevent body scroll during loading
    document.body.classList.add('loading')

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    // Animate loading dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return ''
        return prev + '.'
      })
    }, 500)

    // Complete loading after 6-8 seconds
    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        document.body.classList.remove('loading')
        onComplete()
      }, 500)
    }, 7000 + Math.random() * 2000) // Random between 7-9 seconds

    return () => {
      clearInterval(progressInterval)
      clearInterval(dotsInterval)
      clearTimeout(timer)
      document.body.classList.remove('loading')
    }
  }, [onComplete])

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Animated Background */}
        <div className="loading-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        {/* Main Content */}
        <div className="loading-content">
          {/* Logo/Icon */}
          <div className="loading-logo">
            <div className="logo-circle">
              <FaCode className="logo-icon" />
            </div>
            <div className="logo-pulse"></div>
          </div>

          {/* Name */}
          <h1 className="loading-name">
            <span className="name-text">Shaik Ahad</span>
            <span className="name-gradient"></span>
          </h1>

          {/* Subtitle */}
          <p className="loading-subtitle">
            Frontend Developer & Mobile App Specialist
          </p>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar-wrapper">
              <div 
                className="progress-bar" 
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="progress-shine"></div>
              </div>
            </div>
            <div className="progress-text">
              Loading Portfolio{dots}
            </div>
          </div>

          {/* Animated Elements */}
          <div className="loading-particles">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="particle"
                style={{
                  '--delay': `${i * 0.1}s`,
                  '--duration': `${3 + Math.random() * 2}s`,
                  '--x': `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Rocket Animation */}
        <div className="rocket-container">
          <FaRocket className="rocket-icon" />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
