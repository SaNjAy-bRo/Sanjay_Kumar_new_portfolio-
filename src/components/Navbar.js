import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="gradient-text">Portfolio</span>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-link">
            Home
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
            About
          </a>
          <a href="#experience" onClick={() => scrollToSection('experience')} className="nav-link">
            Experience
          </a>
          <a href="#education" onClick={() => scrollToSection('education')} className="nav-link">
            Education
          </a>
          <a href="#certificates" onClick={() => scrollToSection('certificates')} className="nav-link">
            Certificates
          </a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">
            Skills
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
            Projects
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </a>
        </div>

        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
