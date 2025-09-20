import React from 'react';
import './Experience.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const sectionRef = useScrollAnimation({ animationClass: 'fade-in' });

  // Removed marker click functionality

  const experienceData = [
    {
      id: 1,
      title: 'Junior LiDAR Engineer & QGIS Data Analyst',
      company: 'Occult Engineering Technologies',
      location: 'Udupi, Karnataka, India',
      duration: 'January 2024 - Present',
      type: 'Full-time',
      description: 'Specialized in advanced LiDAR data processing and geospatial analysis for international infrastructure projects, with expertise in feature classification, terrain modeling, and custom GIS solution development.',
      keyResponsibilities: [
        'Lead technical workflows for European LiDAR data classification projects',
        'Develop and maintain custom QGIS plugins and automation scripts',
        'Process and analyze large-scale geospatial datasets (5,000+ sq km)',
        'Ensure quality assurance and deliverable standards for international clients',
        'Mentor junior team members and establish best practices'
      ],
      projects: [
        {
          name: 'European LiDAR Infrastructure Classification Project',
          duration: 'March 2024 - Present',
          role: 'Technical Lead & Senior LiDAR Engineer',
          scope: '5,000+ square kilometers of LiDAR data processing',
          technologies: ['TerraSolid Suite', 'TerraScan', 'TerraModel', 'MicroStation', 'Global Mapper', 'LASTools'],
          keyDeliverables: [
            'Advanced point cloud classification for 10+ feature categories',
            'High-resolution Digital Terrain Models (DTMs)',
            'Infrastructure mapping for powerlines, buildings, and vegetation',
            'Quality-controlled deliverables meeting European standards'
          ],
          impact: 'Successfully delivered critical infrastructure data for European planning authorities'
        },
        {
          name: 'Automated POI Mapping & Data Collection System',
          duration: 'January 2024 - June 2024',
          role: 'Project Lead & GIS Developer',
          scope: '10,000+ Points of Interest across multiple regions',
          technologies: ['QGIS', 'Python', 'JavaScript', 'PostgreSQL'],
          keyDeliverables: [
            'Custom QGIS plugin for enhanced image interpretation',
            'Automated data validation and quality control workflows',
            'Standardized POI collection procedures and documentation',
            'Team-wide adoption of developed tools and processes'
          ],
          impact: 'Increased team productivity by 50% and maintained 98%+ data accuracy'
        }
      ],
      technicalSkills: {
        'LiDAR Processing': ['TerraSolid Suite', 'TerraScan', 'TerraModel', 'LASTools', 'Point Cloud Classification'],
        'GIS Development': ['QGIS', 'Python Scripting', 'Plugin Development', 'Spatial Analysis', 'PostgreSQL/PostGIS'],
        'CAD & Mapping': ['MicroStation', 'Global Mapper', 'AutoCAD', 'DTM Generation', 'Hillshade Creation'],
        'Data Management': ['SQL', 'Excel Advanced', 'Quality Control', 'Project Documentation', 'Team Coordination']
      },
      achievements: [
        'Led technical delivery of 5,000+ sq km European LiDAR project',
        'Developed QGIS plugin adopted company-wide, improving efficiency by 50%',
        'Exceeded project targets by 50% while maintaining 98%+ data accuracy',
        'Successfully managed high-intensity project phases with 14+ hour workdays',
        'Established quality control procedures adopted across multiple projects'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-timeline-container">
        <div className="experience-section-header fade-in">
          <h2 className="experience-section-title gradient-text">Work Experience</h2>
          <p className="experience-section-subtitle">My professional journey in GIS and LiDAR technology</p>
        </div>
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="experience-timeline-item fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="experience-timeline-content">
                <div className="experience-work-card glow-on-scroll">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">{exp.title}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                      <p className="experience-location">{exp.location}</p>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-duration">{exp.duration}</span>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="key-responsibilities">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.keyResponsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.projects && exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="project-section">
                      <div className="project-header">
                        <h5 className="project-title">{project.name}</h5>
                        <div className="project-meta">
                          <span className="project-duration">{project.duration}</span>
                          <span className="project-role">{project.role}</span>
                        </div>
                      </div>
                      
                      <div className="project-scope">
                        <strong>Project Scope:</strong> {project.scope}
                      </div>
                      
                      <div className="project-technologies">
                        <h6>Technologies & Tools:</h6>
                        <div className="tech-tags">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="project-deliverables">
                        <h6>Key Deliverables:</h6>
                        <ul>
                          {project.keyDeliverables.map((deliverable, delIndex) => (
                            <li key={delIndex}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="project-impact">
                        <h6>Project Impact:</h6>
                        <p>{project.impact}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="technical-skills-section">
                    <h5>Technical Expertise:</h5>
                    {Object.entries(exp.technicalSkills).map(([category, skills], catIndex) => (
                      <div key={catIndex} className="skill-category">
                        <h6>{category}:</h6>
                        <div className="tech-tags">
                          {skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="tech-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="experience-achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Experience;
