import React, { useEffect, useRef, useMemo } from 'react';
import './Education.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
  const sectionRef = useScrollAnimation({ animationClass: 'fade-in' });
  // Using event listener directly for smooth parallax without re-renders
  
  // Create refs for each marker dot
  const markerRef1 = useRef(null);
  const markerRef2 = useRef(null);
  const markerRef3 = useRef(null);
  const markerRefs = useMemo(() => [markerRef1, markerRef2, markerRef3], []);

  // Enhanced parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      markerRefs.forEach((ref, index) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        // Apply only when visible
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Distance of marker's center from viewport center
          const markerCenter = rect.top + rect.height / 2;
          const distanceFromCenter = markerCenter - windowHeight / 2;

          // Subtle speeds per marker
          const speed = 0.15 + index * 0.08;
          const yPos = -distanceFromCenter * speed; // move opposite to scroll
          const rotation = -distanceFromCenter * 0.3; // slight rotate

          element.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
          element.style.opacity = '1';
          element.style.visibility = 'visible';
        } else {
          element.style.opacity = '0.85';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call to set positions

    return () => window.removeEventListener('scroll', handleScroll);
  }, [markerRefs]);

  const educationData = [
    {
      year: '2020 - 2023',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Milagres College Kallianpur',
      location: 'Udupi, Karnataka, India',
      description: 'Specialized in computer applications, programming, database management, and software development. Gained comprehensive knowledge in modern web technologies, programming languages, and software engineering principles.',
      gpa: 'CGPA: 6.0',
      achievements: [
        'Completed comprehensive computer applications program',
        'Gained expertise in programming and software development',
        'Developed strong foundation in computer science concepts',
        'Acquired practical skills in web development and database management'
      ]
    },
    {
      year: '2018 - 2020',
      degree: 'Pre-University College (PUC)',
      institution: 'Govt PU College Udupi',
      location: 'Udupi, Karnataka, India',
      description: 'Completed Pre-University College with focus on Mathematics, Physics, Chemistry, and Computer Science. Developed analytical thinking and problem-solving skills essential for technical education.',
      gpa: '58%',
      achievements: [
        'Strong foundation in science and mathematics',
        'Developed analytical and problem-solving skills',
        'Active participation in academic activities',
        'Prepared for higher technical education'
      ]
    },
    {
      year: '2016 - 2018',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Anantheshwara English Medium School',
      location: 'Udupi, Karnataka, India',
      description: 'Completed Secondary School Leaving Certificate with strong academic performance. Established foundation in core subjects and developed essential learning skills for higher education.',
      gpa: '80%',
      achievements: [
        'Strong academic foundation with 80% marks',
        'Active participation in school activities',
        'Developed communication and leadership skills',
        'Established base for technical education pathway'
      ]
    }
  ];

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="education-container">
        <div className="education-section-header fade-in">
          <h2 className="education-section-title gradient-text">Education</h2>
          <p className="education-section-subtitle">My academic journey</p>
        </div>
        
        <div className="education-timeline-wrapper">
          {educationData.map((edu, index) => (
            <div key={index} className="education-timeline-item fade-in">
                  <div className="education-timeline-marker">
                    <div 
                      ref={markerRefs[index] || markerRefs[0]}
                      className="education-marker-dot education-scale-in education-parallax-marker" 
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="education-marker-inner"></div>
                    </div>
                    <div className="education-marker-line"></div>
                  </div>
              <div className="education-timeline-content">
                <div className="education-timeline-card">
                  <div className="education-timeline-year">{edu.year}</div>
                  <h3 className="education-timeline-degree">{edu.degree}</h3>
                  <h4 className="education-timeline-institution">{edu.institution}</h4>
                  <p className="education-timeline-location">{edu.location}</p>
                  <p className="education-timeline-description">{edu.description}</p>
                  <div className="education-timeline-gpa">
                    <span className="education-gpa-label">GPA/Score:</span>
                    <span className="education-gpa-value">{edu.gpa}</span>
                  </div>
                  <div className="education-timeline-achievements">
                    <h5>Achievements:</h5>
                    <ul>
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
