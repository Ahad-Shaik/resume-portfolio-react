import React, { useState } from 'react'
import { 
  FaCode, 
  FaMobileAlt, 
  FaTools, 
  FaHtml5, 
  FaJs, 
  FaCss3Alt, 
  FaAngular, 
  FaGitAlt, 
  FaLaptopCode,
  FaChevronRight,
  FaChevronDown,
  FaServer
} from 'react-icons/fa'
import { SiIonic, SiSass, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Skills.scss'

const Skills = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })
  const [expandedCategories, setExpandedCategories] = useState({})
  const [learningProgress] = useState({
    mongodb: 65,
    nodejs: 52,
    express: 45
  })

  const toggleCategory = (categoryIndex) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }))
  }

  const skillTree = {
    children: [
      {
        category: 'Web Technologies',
        icon: FaCode,
        skills: [
          { name: 'HTML', icon: FaHtml5 },
          { name: 'JavaScript', icon: FaJs },
          { name: 'CSS', icon: FaCss3Alt },
          { name: 'SCSS', icon: SiSass },
        ],
      },
      {
        category: 'Frameworks & Mobile',
        icon: FaMobileAlt,
        skills: [
          { name: 'Angular', icon: FaAngular },
          { name: 'Ionic', icon: SiIonic },
          { name: 'Capacitor', icon: FaMobileAlt },
          { name: 'Cordova', icon: FaMobileAlt },
        ],
      },
      {
        category: 'Tools & Technologies',
        icon: FaTools,
        skills: [
          { name: 'Git', icon: FaGitAlt },
          { name: 'RESTful APIs', icon: FaCode },
          { name: 'SQLite', icon: FaLaptopCode },
          { name: 'Agile Methodologies', icon: FaTools },
        ],
      },
    ],
  }

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`skills-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="skills-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="section-label">Technical Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid-container mb-16">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {skillTree.children.map((category, categoryIndex) => {
                  const CategoryIcon = category.icon
                  const isExpanded = expandedCategories[categoryIndex] !== false
                  const categoryDelay = categoryIndex * 0.1

                  return (
                    <div 
                      key={categoryIndex}
                      className={`skill-category-card ${isVisible ? 'animate-slide-up' : ''} ${isExpanded ? 'expanded' : ''}`}
                      style={{ animationDelay: `${categoryDelay}s` }}
                    >
                      {/* Category Header */}
                      <button
                        onClick={() => toggleCategory(categoryIndex)}
                        className={`category-header bg-gradient-to-br from-primary to-secondary p-5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full ${isExpanded ? 'category-expanded' : ''}`}
                      >
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3">
                            <CategoryIcon className={`text-2xl md:text-3xl transition-transform duration-300 ${isExpanded ? 'rotate-12' : ''}`} />
                            <span className="font-semibold text-lg md:text-xl">{category.category}</span>
                          </div>
                          <div className={`chevron-container transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            {isExpanded ? (
                              <FaChevronDown className="text-lg" />
                            ) : (
                              <FaChevronRight className="text-lg" />
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Skills List - Animated Container */}
                      <div className={`skills-list-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
                        <div className="skills-list space-y-2 mt-4">
                          {category.skills.map((skill, skillIndex) => {
                            const SkillIcon = skill.icon
                            return (
                              <div
                                key={skillIndex}
                                className={`skill-item bg-bg-color dark:bg-bg-light p-3 rounded-lg border border-border-color shadow-sm hover:shadow-md transition-all transform hover:scale-105 ${isExpanded ? 'skill-visible' : 'skill-hidden'}`}
                                style={{ 
                                  transitionDelay: isExpanded ? `${skillIndex * 0.06}s` : '0s'
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-lg skill-icon-wrapper">
                                    <SkillIcon className="text-lg text-primary skill-icon" />
                                  </div>
                                  <span className="font-semibold text-text-color text-sm md:text-base">{skill.name}</span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Learning Backend Section */}
            <div className={`learning-backend-section ${isVisible ? 'animate-slide-up' : ''}`}>
              <div className="learning-card bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/20 border-2 border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="learning-icon-wrapper bg-gradient-to-br from-primary to-secondary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <FaServer className="text-white text-xl md:text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-color mb-1">
                        Learning Backend Technologies
                      </h3>
                      <p className="text-sm text-text-light">Currently expanding my skill set</p>
                    </div>
                  </div>

                  <div className="learning-skills-list space-y-4">
                    {/* MongoDB */}
                    <div className="learning-skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <SiMongodb className="text-2xl text-[#47a248]" />
                          <span className="font-semibold text-text-color">MongoDB</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">{learningProgress.mongodb}%</span>
                      </div>
                      <div className="skill-progress-wrapper">
                        <div className="skill-progress-bar" style={{ width: `${learningProgress.mongodb}%` }}>
                          <div className="skill-progress-shine"></div>
                        </div>
                      </div>
                    </div>

                    {/* Node.js */}
                    <div className="learning-skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <SiNodedotjs className="text-2xl text-[#339933]" />
                          <span className="font-semibold text-text-color">Node.js</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">{learningProgress.nodejs}%</span>
                      </div>
                      <div className="skill-progress-wrapper">
                        <div className="skill-progress-bar" style={{ width: `${learningProgress.nodejs}%` }}>
                          <div className="skill-progress-shine"></div>
                        </div>
                      </div>
                    </div>

                    {/* Express.js */}
                    <div className="learning-skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <SiExpress className="text-2xl text-white" />
                          <span className="font-semibold text-text-color">Express.js</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">{learningProgress.express}%</span>
                      </div>
                      <div className="skill-progress-wrapper">
                        <div className="skill-progress-bar" style={{ width: `${learningProgress.express}%` }}>
                          <div className="skill-progress-shine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
