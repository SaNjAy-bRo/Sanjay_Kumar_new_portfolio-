import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_gbx88l7', 'template_rku1tl8', form.current, 'QVzPR0iCeQFD4Sh2N')
      .then(
        (response) => {
          setIsModalOpen(true);
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          alert('Failed to send email. Please try again later.');
          setIsSubmitting(false);
        },
      );
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'sanjayconnecting007@gmail.com',
      link: 'mailto:sanjayconnecting007@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 7338514739',
      link: 'tel:+917338514739',
      description: 'Call or WhatsApp me'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'HBR Layout, Bangalore, Karnataka',
      link: '#',
      description: 'Based in Bangalore, India'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'sanjay-kumar-9639a6257',
      link: 'https://www.linkedin.com/in/sanjay-kumar-9639a6257',
      description: 'Connect with me professionally'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-intro">
              <h3>Let's Work Together</h3>
              <p>
                I'm a LiDAR Engineer and Full Stack Web Developer with expertise in advanced data processing, 
                geospatial analysis, and modern web application development. Whether you need geospatial 
                solutions, web development services, or have an exciting project that combines both, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="contact-method"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">
                    {info.icon}
                  </div>
                  <div className="method-content">
                    <h4>{info.title}</h4>
                    <p className="method-value">{info.value}</p>
                    <p className="method-description">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="https://github.com/SaNjAy-bRo" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📚</span>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/sanjay-kumar-9639a6257" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:sanjayconnecting007@gmail.com" className="social-link">
                  <span className="social-icon">📧</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>
                Have a project in mind? Need geospatial analysis, web development services, or a 
                solution that combines both? Let's discuss how I can help bring your ideas to life 
                with my expertise in both LiDAR/GIS technologies and modern web development.
              </p>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Enter your full name"
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or question..."
                  rows="6"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`form-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </span>
                <span className="btn-icon">
                  {isSubmitting ? '⏳' : '📤'}
                </span>
              </button>
              
              {isModalOpen && (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <div className="success-text">
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
