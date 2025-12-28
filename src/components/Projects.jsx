import React, { useState } from 'react'
import { 
  FaCode, 
  FaMobileAlt, 
  FaCalendarAlt, 
  FaDatabase, 
  FaShoppingCart, 
  FaTruck, 
  FaPlane,
  FaAngular,
  FaServer,
  FaBuilding,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaGlobe
} from 'react-icons/fa'
import { SiIonic, SiMysql, SiSpring } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.scss'

const Projects = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [expandedProjects, setExpandedProjects] = useState({})

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const projects = [
    {
      title: 'Telecom BSS Platform',
      description:
        'Full-stack Business Support System for telecom client covering account creation to device allocation. Enhanced OMS and CMS modules with Angular Material.',
      technologies: ['Angular 12', 'Angular Material', 'REST APIs'],
      duration: 'Oct 2025 - Present',
      client: 'Telecom Client',
      company: 'Knot Solutions Pvt Ltd',
      icon: FaServer,
      accentColor: 'blue',
    },
    {
      title: '9-Mobiles – Ionic Mobile App',
      description:
        'Refactored entire codebase with modern standards. Redesigned critical pages including Login, Dashboard, Ticket Creation, and Billing Information.',
      technologies: ['Ionic Framework', 'Angular', 'Mobile UI/UX'],
      duration: 'Initial Phase',
      company: 'Knot Solutions Pvt Ltd',
      icon: FaMobileAlt,
      accentColor: 'purple',
    },
    {
      title: 'Smart Scheduler',
      description:
        'Web-based scheduling application with planning and appointment scheduling functionality. Created responsive and interactive calendar views.',
      technologies: ['Angular', 'SAP UI5 Components'],
      duration: 'Feb 2025 - May 2025',
      company: 'Propel Apps Pvt Ltd',
      icon: FaCalendarAlt,
      accentColor: 'green',
    },
    {
      title: 'Mobile Asset Manager',
      description:
        'Mobile/tablet-first asset management system with offline capabilities. Integrated with Oracle Fusion Cloud for real-time data sync.',
      technologies: ['Angular', 'Ionic', 'Capacitor', 'Jeep SQLite', 'Oracle Fusion'],
      duration: 'Sep 2024 - Feb 2025',
      company: 'Propel Apps Pvt Ltd',
      icon: FaDatabase,
      accentColor: 'orange',
    },
    {
      title: 'Mobile Inventory SCM',
      description:
        'Responsive mobile Android applications for inventory management. Implemented offline functionality using SQLite for seamless performance.',
      technologies: ['Angular', 'Ionic', 'SQLite', 'Cordova'],
      duration: 'Jan 2024 - Sep 2024',
      clients: ['Herber', 'Emicool', 'Tappoo', 'Ram Clinics'],
      company: 'Propel Apps Pvt Ltd',
      icon: FaShoppingCart,
      accentColor: 'indigo',
    },
    {
      title: 'AV-TRIP Modernization',
      description:
        'Transformed legacy Java Applet system into modernized responsive application. Real-time trip and truck tracking with REST API integration.',
      technologies: ['Angular', 'Angular Material', 'REST APIs'],
      duration: 'Apr 2021 - Nov 2022',
      client: 'FedEx',
      company: 'Wipro Pvt Ltd',
      icon: FaTruck,
      accentColor: 'yellow',
    },
    {
      title: 'AIROPS-PRD',
      description:
        'Dynamic web application with seamless backend integration. Achieved consistent UI/UX across the platform with cross-browser compatibility.',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      duration: 'Nov 2022 - May 2023',
      client: 'FedEx',
      company: 'Wipro Pvt Ltd',
      icon: FaPlane,
      accentColor: 'teal',
    },
  ]

  const getTechIcon = (tech) => {
    if (tech.includes('Angular')) return <FaAngular className="text-sm" />
    if (tech.includes('Ionic')) return <SiIonic className="text-sm" />
    if (tech.includes('Material')) return <FaAngular className="text-sm" />
    if (tech.includes('MySQL')) return <SiMysql className="text-sm" />
    if (tech.includes('Spring')) return <SiSpring className="text-sm" />
    if (tech.includes('Mobile')) return <FaMobileAlt className="text-sm" />
    return <FaCode className="text-sm" />
  }

  const getAccentColorClass = (color) => {
    const colors = {
      blue: 'accent-blue',
      purple: 'accent-purple',
      green: 'accent-green',
      orange: 'accent-orange',
      indigo: 'accent-indigo',
      yellow: 'accent-yellow',
      teal: 'accent-teal',
    }
    return colors[color] || 'accent-blue'
  }

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`projects-section ${isSectionVisible ? 'visible' : ''}`}
    >
      <div className="projects-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className={`text-center mb-16 ${isSectionVisible ? 'animate-slide-up' : ''}`}>
              <div className="inline-block mb-4">
                <span className="section-label">Portfolio Showcase</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Click on any project to explore details and technologies used
              </p>
            </div>

            {/* Projects Timeline */}
            <div className="projects-list-container">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                const isExpanded = expandedProjects[index]
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    className={`project-item ${getAccentColorClass(project.accentColor)} ${isSectionVisible ? 'animate-slide-up' : ''} ${isExpanded ? 'expanded' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Line */}
                    {index < projects.length - 1 && (
                      <div className="project-timeline-line"></div>
                    )}

                    {/* Project Content */}
                    <div className={`project-content-wrapper ${isEven ? 'project-left' : 'project-right'}`}>
                      {/* Icon Circle */}
                      <div className="project-icon-wrapper">
                        <div className={`project-icon-circle ${getAccentColorClass(project.accentColor)}`}>
                          <IconComponent className="text-xl md:text-2xl" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="project-details">
                        <button
                          onClick={() => toggleProject(index)}
                          className="project-header-btn w-full text-left group"
                        >
                          <div className="project-header">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-color">
                                {project.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                {isExpanded ? (
                                  <FaChevronUp className="text-primary transition-transform" />
                                ) : (
                                  <FaChevronDown className="text-primary transition-transform" />
                                )}
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs md:text-sm">
                              {project.company && (
                                <div className="flex items-center gap-1.5 text-text-light">
                                  <FaBuilding className="text-primary" />
                                  <span>{project.company}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1.5 text-text-light">
                                <FaClock className="text-primary" />
                                <span>{project.duration}</span>
                              </div>
                              {project.client && (
                                <div className="text-text-light">
                                  <span className="font-semibold text-text-color">Client:</span> {project.client}
                                </div>
                              )}
                              {project.clients && (
                                <div className="text-text-light">
                                  <span className="font-semibold text-text-color">Clients:</span> {project.clients.join(', ')}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Collapsible Content */}
                        {isExpanded && (
                          <div className="project-expanded-content">
                            <p className="text-text-light mb-6 leading-relaxed text-sm md:text-base">
                              {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="project-technologies">
                              <div className="flex items-center gap-2 mb-3">
                                <FaCode className="text-primary text-sm" />
                                <span className="text-xs md:text-sm font-semibold text-text-color">Technologies</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="tech-tag px-3 py-1.5 rounded-lg text-xs font-medium bg-bg-light dark:bg-bg-color border border-border-color text-text-color flex items-center gap-1.5 hover:border-primary hover:bg-primary/5 transition-all"
                                  >
                                    {getTechIcon(tech)}
                                    <span>{tech}</span>
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mt-6">
                              <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105 text-sm flex items-center gap-2">
                                <FaGlobe className="text-xs" />
                                Live Demo
                              </button>
                              <button className="px-5 py-2.5 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all text-sm flex items-center gap-2">
                                <FaGithub className="text-xs" />
                                View Code
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
