import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaHome, FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaEnvelope, FaGraduationCap } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'
import './Header.scss'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education-certifications', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about', icon: FaUser, id: 'about' },
    { name: 'Education', href: '#education-certifications', icon: FaGraduationCap, id: 'education-certifications' },
    { name: 'Experience', href: '#experience', icon: FaBriefcase, id: 'experience' },
    { name: 'Skills', href: '#skills', icon: FaCode, id: 'skills' },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram, id: 'projects' },
    { name: 'Contact', href: '#contact', icon: FaEnvelope, id: 'contact' },
  ]

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <div className="logo">
            <a href="#hero" className="logo-link" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="logo-icon-wrapper">
                <FaHome className="logo-icon" />
              </div>
              <span className="logo-text">Shaik Ahad</span>
            </a>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => {
              const IconComponent = link.icon
              const isActive = activeSection === link.id
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <IconComponent className="nav-icon" />
                    <span className="nav-text">{link.name}</span>
                    {isActive && <span className="nav-indicator"></span>}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  )
}

export default Header
