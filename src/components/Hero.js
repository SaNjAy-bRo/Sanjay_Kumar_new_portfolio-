import React, { useCallback } from 'react';
import './Hero.css';

const Hero = React.memo(() => {
  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Sanjay Kumar</span>
            </h1>
            <h2 className="hero-subtitle">
              LiDAR Engineer & Full Stack Web Developer
            </h2>
            <p className="hero-description">
              Specialized in advanced LiDAR data processing and geospatial analysis, while also creating 
              modern web applications with React, JavaScript, and Python. Leading European infrastructure 
              projects and developing custom solutions that bridge geospatial technology with cutting-edge web interfaces.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={scrollToContact} className="btn btn-secondary">
                Get In Touch
              </button>
            <a
              href="/Sanjay_Kumar-Resume.pdf"
              download="Sanjay_Kumar-Resume.pdf"
              className="btn btn-resume"
              aria-label="Download Résumé (PDF)"
            >
              <span className="btn-resume__glow" aria-hidden="true"></span>
              <span className="btn-resume__label">Download Résumé</span>
              <span className="btn-resume__icon" aria-hidden="true">↧</span>
            </a>
            </div>
            
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-item">JavaScript</span>
              <span className="tech-item">Python</span>
              <span className="tech-item">QGIS</span>
              <span className="tech-item">LiDAR</span>
              <span className="tech-item">Django</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                <div className="profile-image">
                  <img 
                    src="/Sanjoker.jpeg" 
                    alt="Portrait of Sanjay Kumar" 
                    className="hero-profile-photo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1"></div>
                  <div className="floating-element element-2"></div>
                  <div className="floating-element element-3"></div>
                  <div className="floating-element element-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
