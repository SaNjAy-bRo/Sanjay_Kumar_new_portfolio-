import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: 'Python Full Stack Developer',
      issuer: 'Professional Certification',
      date: '2024',
      description: 'Comprehensive full-stack development certification covering Python backend development, database management, and modern web technologies.',
      skills: ['Python', 'Django', 'SQL', 'Database Design', 'API Development', 'Backend Architecture'],
      status: 'Completed',
      icon: '🐍'
    },
    {
      id: 2,
      title: 'ReactJS Development',
      issuer: 'Professional Certification',
      date: '2024',
      description: 'Advanced ReactJS certification focusing on modern frontend development, component architecture, and state management.',
      skills: ['ReactJS', 'JavaScript ES6+', 'JSX', 'Component Lifecycle', 'State Management', 'Hooks'],
      status: 'Completed',
      icon: '⚛️'
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Professional Certifications</h2>
          <p className="section-subtitle">Continuous learning and skill development</p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-header">
                <div className="certificate-icon">
                  {cert.icon}
                </div>
                <div className="certificate-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <div className="certificate-meta">
                    <span className="certificate-date">{cert.date}</span>
                    <span className={`certificate-status ${cert.status.toLowerCase()}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="certificate-description">{cert.description}</p>
              
              <div className="certificate-skills">
                <h4>Skills Covered:</h4>
                <div className="skills-tags">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
