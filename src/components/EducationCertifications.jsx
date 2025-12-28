import React from 'react'
import { FaGraduationCap, FaAward, FaSchool, FaCertificate, FaCalendarAlt, FaTrophy, FaCloud, FaDatabase } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './EducationCertifications.scss'

const EducationCertifications = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  const education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'Rise Krishna Sai Gandhi Group of Institutions',
      year: '2020',
      percentage: '85%',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Intermediate',
      institution: 'Royal Junior College',
      year: '2016',
      percentage: '88%',
      icon: FaSchool,
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'SSC',
      institution: 'Royal High School',
      year: '2014',
      percentage: '95%',
      icon: FaTrophy,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: FaCloud,
      color: 'from-orange-500 to-yellow-500',
      badge: 'AWS',
    },
    {
      title: 'Microsoft Azure DP-900',
      subtitle: 'Data Fundamentals',
      issuer: 'Microsoft',
      icon: FaDatabase,
      color: 'from-blue-500 to-cyan-500',
      badge: 'Azure',
    },
  ]

  return (
    <section 
      id="education-certifications" 
      ref={sectionRef}
      className={`education-certifications-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="education-certifications-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="section-label">Academic & Professional</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Education & Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Education Section */}
              <div className={`education-container ${isVisible ? 'animate-slide-in-left' : ''}`}>
                <div className="section-label-header mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="section-icon-wrapper bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
                      <FaGraduationCap className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-color">Education</h3>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                <div className="education-timeline">
                  {education.map((edu, index) => {
                    const IconComponent = edu.icon
                    return (
                      <div
                        key={index}
                        className={`education-card ${isVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                      >
                        <div className="education-card-content">
                          <div className="education-icon-wrapper">
                            <div className={`education-icon bg-gradient-to-br ${edu.color}`}>
                              <IconComponent className="text-white text-xl md:text-2xl" />
                            </div>
                            {index < education.length - 1 && (
                              <div className="education-connector"></div>
                            )}
                          </div>
                          
                          <div className="education-details">
                            <div className="education-header">
                              <h4 className="text-xl md:text-2xl font-bold text-text-color mb-2">
                                {edu.degree}
                              </h4>
                              <p className="text-text-light text-sm md:text-base mb-3">
                                {edu.institution}
                              </p>
                            </div>
                            
                            <div className="education-meta">
                              <div className="meta-item">
                                <FaCalendarAlt className="text-primary text-sm" />
                                <span className="text-text-light text-sm">{edu.year}</span>
                              </div>
                              <div className="meta-item highlight">
                                <FaTrophy className="text-yellow-500 text-sm" />
                                <span className="text-text-color font-semibold text-sm">{edu.percentage}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Certifications Section */}
              <div className={`certifications-container ${isVisible ? 'animate-slide-in-right' : ''}`}>
                <div className="section-label-header mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="section-icon-wrapper bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
                      <FaCertificate className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-color">Certifications</h3>
                  </div>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                <div className="certifications-grid">
                  {certifications.map((cert, index) => {
                    const IconComponent = cert.icon
                    return (
                      <div
                        key={index}
                        className={`certification-card ${isVisible ? 'animate-slide-up' : ''}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className={`certification-header bg-gradient-to-br ${cert.color}`}>
                          <div className="certification-icon-wrapper">
                            <IconComponent className="text-white text-3xl md:text-4xl" />
                          </div>
                          {cert.badge && (
                            <div className="certification-badge">
                              {cert.badge}
                            </div>
                          )}
                        </div>
                        
                        <div className="certification-content">
                          <h4 className="text-lg md:text-xl font-bold text-text-color mb-1">
                            {cert.title}
                          </h4>
                          {cert.subtitle && (
                            <p className="text-text-light text-sm mb-3">{cert.subtitle}</p>
                          )}
                          <div className="certification-issuer">
                            <FaAward className="text-primary text-sm" />
                            <span className="text-text-light text-sm">{cert.issuer}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationCertifications
