import React, { useState, useEffect, useMemo } from 'react';
import './Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = React.memo(() => {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [progressBars, setProgressBars] = useState({});
  const sectionRef = useScrollAnimation({ animationClass: 'fade-in' });

  const skillCategories = useMemo(() => [
    {
      title: 'LiDAR & Point Cloud Processing',
      skills: [
        { name: 'TerraSolid Suite', level: 95, icon: '📡' },
        { name: 'TerraScan', level: 93, icon: '🔍' },
        { name: 'TerraModel', level: 90, icon: '🏗️' },
        { name: 'LASTools', level: 88, icon: '⚙️' },
        { name: 'Point Cloud Classification', level: 96, icon: '🎯' },
        { name: 'DTM Generation', level: 92, icon: '🗺️' }
      ]
    },
    {
      title: 'GIS Development & Analysis',
      skills: [
        { name: 'QGIS', level: 96, icon: '🗺️' },
        { name: 'Python Scripting', level: 92, icon: '🐍' },
        { name: 'Plugin Development', level: 90, icon: '🔧' },
        { name: 'Spatial Analysis', level: 94, icon: '📊' },
        { name: 'PostgreSQL/PostGIS', level: 85, icon: '🗄️' },
        { name: 'Global Mapper', level: 90, icon: '🌍' }
      ]
    },
    {
      title: 'CAD & Engineering Software',
      skills: [
        { name: 'MicroStation', level: 88, icon: '📐' },
        { name: 'AutoCAD', level: 78, icon: '✏️' },
        { name: 'Hillshade Creation', level: 92, icon: '🏔️' },
        { name: 'Infrastructure Mapping', level: 94, icon: '🏗️' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'ReactJS', level: 85, icon: '⚛️' },
        { name: 'JavaScript', level: 87, icon: '🟨' },
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 88, icon: '🎨' },
        { name: 'TailwindCSS', level: 82, icon: '💨' },
        { name: 'Django', level: 75, icon: '🟢' }
      ]
    },
    {
      title: 'Data Management & Analysis',
      skills: [
        { name: 'SQL', level: 88, icon: '🗄️' },
        { name: 'Excel Advanced', level: 92, icon: '📊' },
        { name: 'Quality Control', level: 95, icon: '✅' },
        { name: 'Project Documentation', level: 90, icon: '📋' },
        { name: 'Team Coordination', level: 88, icon: '👥' }
      ]
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate each skill with a delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              const delay = (categoryIndex * 200) + (skillIndex * 100);
              const skillKey = `${categoryIndex}-${skillIndex}`;
              
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skillKey]: true
                }));
                
                // Also animate progress bar
                setProgressBars(prev => ({
                  ...prev,
                  [skillKey]: skill.level
                }));
              }, delay);
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    // Also add a fallback - animate after 1 second regardless
    const fallbackTimer = setTimeout(() => {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const skillKey = `${categoryIndex}-${skillIndex}`;
          setAnimatedSkills(prev => ({
            ...prev,
            [skillKey]: true
          }));
          setProgressBars(prev => ({
            ...prev,
            [skillKey]: skill.level
          }));
        });
      });
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [skillCategories]);

  // Counter component for animated percentage - memoized for performance
  const Counter = React.memo(({ end, duration = 2000, skillKey }) => {
    const [count, setCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (animatedSkills[skillKey] && !isAnimating) {
        setIsAnimating(true);
        
        let startTime = null;
        const startValue = 0;
        const endValue = end;

        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = startValue + (endValue - startValue) * easeOutQuart;
          
          setCount(Math.floor(currentValue));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      }
    }, [skillKey, end, duration, isAnimating]);

    // Show the final value if animation is complete
    if (isAnimating && count === end) {
      return <span className="skills-percentage-counter">{end}%</span>;
    }

    return <span className="skills-percentage-counter">{count}%</span>;
  });

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <div className="skills-section-header fade-in">
          <h2 className="skills-section-title gradient-text">Skills & Expertise</h2>
          <p className="skills-section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-content-wrapper">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category-card fade-in">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-grid-layout">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const isAnimated = animatedSkills[skillKey];
                  const progressWidth = progressBars[skillKey] || 0;
                  
                  return (
                    <div key={skillIndex} className="skills-item-card">
                      <div className="skills-item-header">
                        <span className="skills-item-icon">{skill.icon}</span>
                        <span className="skills-item-name">{skill.name}</span>
                        <div className="skills-percentage-display">
                          {isAnimated ? (
                            <Counter 
                              end={skill.level} 
                              skillKey={skillKey}
                              duration={1500}
                            />
                          ) : (
                            <span className="skills-percentage-static">
                              {skill.level}%
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="skills-progress-container">
                        <div className="skills-progress-track">
                          <div 
                            className="skills-progress-fill"
                            style={{ 
                              width: `${progressWidth}%`,
                              transition: 'width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            }}
                          >
                            <div className="skills-progress-glow"></div>
                          </div>
                        </div>
                        <div className="skills-progress-labels">
                          <span className="skills-level-beginner">Beginner</span>
                          <span className="skills-level-expert">Expert</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary-section">
          <div className="skills-summary-card">
            <h3>Why Choose Me?</h3>
            <div className="skills-summary-points">
              <div className="skills-summary-point">
                <span className="skills-point-icon">🚀</span>
                <div>
                  <h4>Fast Development</h4>
                  <p>Quick turnaround times without compromising quality</p>
                </div>
              </div>
              <div className="skills-summary-point">
                <span className="skills-point-icon">🎯</span>
                <div>
                  <h4>Problem Solving</h4>
                  <p>Creative solutions to complex technical challenges</p>
                </div>
              </div>
              <div className="skills-summary-point">
                <span className="skills-point-icon">📱</span>
                <div>
                  <h4>Responsive Design</h4>
                  <p>Mobile-first approach for all devices</p>
                </div>
              </div>
              <div className="skills-summary-point">
                <span className="skills-point-icon">🔧</span>
                <div>
                  <h4>Maintainable Code</h4>
                  <p>Clean, documented, and scalable codebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
