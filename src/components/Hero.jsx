import React from 'react'
import { FaDownload, FaArrowDown, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaBriefcase } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import resumePdf from '../assets/Shaik-Ahad-Angular-Developer.pdf'
import './Hero.scss'

const Hero = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  // TODO: Enable download resume functionality later
  // const handleDownloadResume = () => {
  //   const link = document.createElement('a')
  //   link.href = resumePdf
  //   link.download = 'Shaik-Ahad-Angular-Developer.pdf'
  //   document.body.appendChild(link)
  //   link.click()
  //   document.body.removeChild(link)
  // }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className={`hero-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="hero-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Profile Avatar */}
            <div className={`hero-avatar mb-8 ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-2xl relative overflow-hidden mx-auto">
                <span>SA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className={`hero-content ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-color mb-4 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Shaik Ahad</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-2">
                Associate Consultant
              </p>
              <p className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto">
                Frontend Developer specializing in Angular, Ionic, and modern web technologies. 
                Building scalable applications and mobile solutions with 4.2+ years of experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`hero-cta flex flex-wrap items-center justify-center gap-4 mb-12 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
              {/* TODO: Enable download resume button later */}
              {/* <button
                onClick={handleDownloadResume}
                className="cta-primary px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FaDownload />
                Download Resume
              </button> */}
              <a
                href="#projects"
                className="cta-secondary px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all flex items-center gap-2"
              >
                <FaCode />
                View Projects
              </a>
              <a
                href="#contact"
                className="cta-outline px-6 py-3 border-2 border-border-color text-text-color rounded-lg font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2"
              >
                <FaBriefcase />
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className={`hero-social flex items-center justify-center gap-4 mb-8 ${isVisible ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
              <a
                href="https://linkedin.com/in/shaik-ahad"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-12 h-12 bg-bg-light dark:bg-bg-color border border-border-color rounded-full flex items-center justify-center text-text-color hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-12 h-12 bg-bg-light dark:bg-bg-color border border-border-color rounded-full flex items-center justify-center text-text-color hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:ahadpersonal69@gmail.com"
                className="social-link w-12 h-12 bg-bg-light dark:bg-bg-color border border-border-color rounded-full flex items-center justify-center text-text-color hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className={`scroll-indicator ${isVisible ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.4s' }}>
              <button
                onClick={scrollToAbout}
                className="flex flex-col items-center gap-2 text-text-light hover:text-primary transition-colors"
                aria-label="Scroll to about"
              >
                <span className="text-sm font-medium">Scroll Down</span>
                <FaArrowDown className="text-xl animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

