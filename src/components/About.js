import React from 'react';
import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = React.memo(() => {
  const sectionRef = useScrollAnimation({ animationClass: 'fade-in' });

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card fade-in">
              <h3>Who I Am</h3>
              <p>
                I'm a dedicated Computer Applications graduate with dual expertise in 
                LiDAR data processing, geospatial analysis, and full-stack web development. 
                Currently serving as a Junior LiDAR Engineer and QGIS Data Analyst at Occult 
                Engineering Technologies, I lead critical European infrastructure projects 
                while also creating modern web applications using React, JavaScript, and Python.
              </p>
            </div>
            
            <div className="about-card fade-in">
              <h3>My Journey</h3>
              <p>
                My professional journey began with a Bachelor's degree in Computer Applications 
                from Mangalore University, which provided a strong foundation in programming 
                and web development. This academic background, combined with hands-on experience 
                in both LiDAR processing, GIS development, and modern web technologies, has enabled 
                me to excel in leading complex European infrastructure projects while creating 
                innovative web applications and custom automation solutions.
              </p>
            </div>
            
            <div className="about-card fade-in">
              <h3>What I Do</h3>
              <p>
                I specialize in two key areas: advanced LiDAR data processing using TerraSolid Suite, 
                MicroStation, and Global Mapper for large-scale European infrastructure projects, 
                and full-stack web development using React, JavaScript, Python, and Django. I develop 
                custom QGIS plugins, create responsive web applications, and build solutions that 
                integrate geospatial data with modern user interfaces. My focus is on delivering 
                high-quality solutions that exceed client expectations and improve operational efficiency.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card scale-in">
              <div className="stat-number">2024</div>
              <div className="stat-label">Current Position</div>
            </div>
            <div className="stat-card scale-in">
              <div className="stat-number">5K+</div>
              <div className="stat-label">Sq Km Processed</div>
            </div>
            <div className="stat-card scale-in">
              <div className="stat-number">98%</div>
              <div className="stat-label">Quality Accuracy</div>
            </div>
            <div className="stat-card scale-in">
              <div className="stat-number">50%</div>
              <div className="stat-label">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
