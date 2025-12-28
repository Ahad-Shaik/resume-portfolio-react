import React from 'react'
import { FaUser, FaRocket, FaCode, FaBriefcase, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.scss'

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`about-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="about-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="section-label">Get to Know Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            {/* Career Objective - Prominent at Top */}
            <div className={`career-objective-hero mb-16 ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className="career-objective-card bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 border-2 border-primary/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="career-icon-wrapper bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform">
                      <FaRocket className="text-white text-2xl md:text-3xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-color mb-2">
                        Career Objective
                      </h3>
                      <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-text-color leading-relaxed font-medium max-w-4xl">
                    To pursue a challenging career and be a part of a progressive organization 
                    that gives me scope to enhance my knowledge and skills to cope with the latest 
                    technological changes. I am willing to work as a key player in a challenging 
                    & creative environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className={`stats-grid grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16 ${isVisible ? 'animate-slide-up' : ''}`}>
              {[
                { value: '4.2+', label: 'Years Experience', icon: FaBriefcase, color: 'from-blue-500 to-cyan-500' },
                { value: '8+', label: 'Projects', icon: FaProjectDiagram, color: 'from-purple-500 to-pink-500' },
                { value: '15+', label: 'Technologies', icon: FaCode, color: 'from-green-500 to-emerald-500' },
              ].map((stat, idx) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={idx}
                    className={`stat-card bg-bg-color dark:bg-bg-light p-6 md:p-8 rounded-2xl border border-border-color shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 text-center group ${isVisible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className={`stat-icon-wrapper bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="text-2xl md:text-3xl text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm md:text-base text-text-light font-medium">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            {/* Profile Summary */}
            <div className={`profile-summary-section ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className="content-card bg-bg-light dark:bg-bg-color p-6 md:p-8 rounded-2xl border border-border-color shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
                <div className="card-header mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="card-icon-wrapper bg-gradient-to-br from-primary to-secondary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <FaCode className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-color">
                      Profile Summary
                    </h3>
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
                <p className="text-text-light leading-relaxed mb-6 text-base md:text-lg">
                  A result-oriented professional with overall <strong className="text-text-color font-semibold">4.2 years</strong> of experience 
                  in application development & Inventory domain service delivery with client relationship 
                  involved in software development life cycle (SDLC), such as Analysis, Designing, 
                  Development using Angular from version 9 to latest.
                </p>
                <ul className="space-y-3">
                  {[
                    'Involved in Enhancing the Quality of code by applying standard coding practices with an Implementation of Re-usable Components.',
                    'Experience in developing User Interface applications with dynamic pages and consistent layout, color, and font.',
                    'Implemented modernized mobile applications in Angular 9 to latest versions.',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-light text-sm md:text-base group/item">
                      <div className="flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-primary text-lg group-hover/item:scale-110 transition-transform" />
                      </div>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
