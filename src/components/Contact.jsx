import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitSuccess(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`contact-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="contact-wrapper">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="section-label">Let's Connect</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
              <p className="text-text-light text-lg max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className={`contact-info ${isVisible ? 'animate-slide-in-left' : ''}`}>
                <div className="info-card bg-bg-color dark:bg-bg-light p-6 rounded-2xl border border-border-color shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group">
                  <div className="flex items-start gap-4">
                    <div className="info-icon-wrapper bg-gradient-to-br from-primary to-secondary p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-color mb-2 text-lg">Email</h4>
                      <a 
                        href="mailto:ahadpersonal69@gmail.com" 
                        className="text-primary hover:text-secondary transition-colors text-base block"
                      >
                        ahadpersonal69@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card bg-bg-color dark:bg-bg-light p-6 rounded-2xl border border-border-color shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 group mt-6">
                  <div className="flex items-start gap-4">
                    <div className="info-icon-wrapper bg-gradient-to-br from-primary to-secondary p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-color mb-2 text-lg">Phone</h4>
                      <a 
                        href="tel:+917893988324" 
                        className="text-primary hover:text-secondary transition-colors text-base block"
                      >
                        +91 7893988324
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/20 shadow-lg mt-6">
                  <h4 className="font-semibold text-text-color mb-3 text-lg">Quick Response</h4>
                  <p className="text-text-light text-base">
                    I typically respond within 24 hours. For urgent matters, please call directly.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`contact-form-wrapper ${isVisible ? 'animate-slide-in-right' : ''}`}>
                <form 
                  className="contact-form bg-bg-color dark:bg-bg-light p-6 md:p-8 rounded-2xl border border-border-color shadow-lg"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group mb-6">
                    <label htmlFor="name" className="block mb-2 font-semibold text-text-color text-base">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 border-2 border-border-color rounded-xl bg-bg-color dark:bg-bg-light text-text-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group mb-6">
                    <label htmlFor="email" className="block mb-2 font-semibold text-text-color text-base">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 border-2 border-border-color rounded-xl bg-bg-color dark:bg-bg-light text-text-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="form-group mb-6">
                    <label htmlFor="message" className="block mb-2 font-semibold text-text-color text-base">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 border-2 border-border-color rounded-xl bg-bg-color dark:bg-bg-light text-text-color focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-base"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`submit-btn w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-base flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    } ${submitSuccess ? 'bg-gradient-to-r from-green-500 to-emerald-500' : ''}`}
                  >
                    {submitSuccess ? (
                      <>
                        <FaCheckCircle />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
