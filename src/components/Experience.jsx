import React, { useState } from 'react'
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.scss'

const Experience = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const experiences = [
    {
      title: 'Associate Consultant',
      company: 'Knot Solutions Pvt Ltd',
      period: 'Sept 2025 – Present',
      icon: FaBriefcase,
      location: 'Hyderabad, India',
      description: 'Leading development of enterprise-level applications and managing client relationships.',
    },
    {
      title: 'Software Engineer',
      company: 'Propel Apps Pvt Ltd',
      period: 'Dec 2023 – Sept 2025',
      icon: FaBriefcase,
      location: 'Hyderabad, India',
      description: 'Developed mobile and web applications using Angular and Ionic frameworks.',
    },
    {
      title: 'Project Engineer',
      company: 'Wipro Pvt Ltd',
      period: 'March 2021 to May 2023',
      icon: FaBuilding,
      location: 'Hyderabad, India',
      description: 'Worked on modernization projects and front-end development for enterprise clients.',
    },
  ]

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`experience-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="experience-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="section-label">Professional Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Work Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            {/* Timeline */}
            <div className="timeline">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon
                const isExpanded = expandedItems[index]
                
                return (
                  <div 
                    key={index} 
                    className={`timeline-item ${isVisible ? 'animate-slide-up' : ''} ${isExpanded ? 'expanded' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="timeline-marker">
                      <IconComponent />
                    </div>
                    <div className="timeline-content">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="experience-header-btn w-full text-left group"
                      >
                        <div className="experience-header">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-2xl md:text-3xl font-bold text-text-color">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              {isExpanded ? (
                                <FaChevronUp className="text-primary transition-transform" />
                              ) : (
                                <FaChevronDown className="text-primary transition-transform" />
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            <div className="flex items-center gap-2 text-primary font-semibold text-base md:text-lg">
                              <FaBuilding className="text-base" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-light text-sm md:text-base">
                              <FaCalendarAlt className="text-base" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          {exp.location && (
                            <div className="flex items-center gap-2 text-text-light text-sm md:text-base">
                              <FaMapMarkerAlt className="text-primary" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                        </div>
                      </button>
                      
                      {/* Collapsible Content */}
                      {isExpanded && (
                        <div className="experience-details">
                          <p className="text-text-light leading-relaxed mb-6 text-base">
                            {exp.description}
                          </p>
                          <div className="flex gap-3">
                            <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105 text-sm">
                              View Projects
                            </button>
                            <button className="px-5 py-2.5 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all text-sm">
                              Learn More
                            </button>
                          </div>
                        </div>
                      )}
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

export default Experience
