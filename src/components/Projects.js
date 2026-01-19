import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'My Portfolio',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React and featuring smooth animations, interactive elements, and a professional design.',
      image: '/PortFolio.png',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'web',
      liveUrl: 'https://sanjay-port-folio.vercel.app/',
      githubUrl: 'https://github.com/SaNjAy-bRo/Sanjay-PortFolio',
      featured: true
    },
    {
      id: 2,
      title: 'Gemini AI Clone',
      description: 'Explore the capabilities of our Gemini AI clone website, where you can enjoy the same features as the real one. Merge images, craft captivating compositions, and unleash your creativity effortlessly.',
      image: '/gemini ai clone.png',
      technologies: ['React', 'AI Integration', 'Image Processing', 'Web APIs'],
      category: 'ai',
      liveUrl: 'https://gemini-ai-chi.vercel.app/',
      githubUrl: 'https://github.com/SaNjAy-bRo',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Forecast Website',
      description: 'A comprehensive weather forecasting application that provides real-time weather data, forecasts, and interactive weather maps. Built with modern web technologies and weather APIs.',
      image: '/weather.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      category: 'web',
      liveUrl: 'https://sanjay-bro.github.io/Weather-Forecast/',
      githubUrl: 'https://github.com/SaNjAy-bRo/Weather-Forecast',
      featured: true
    },
    {
      id: 4,
      title: 'Knite Bite',
      description: 'A web application built using modern web technologies. Features include responsive design, interactive user interface, and seamless user experience.',
      image: '/knitebite.png',
      technologies: ['Web Technology', 'HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      liveUrl: 'https://reedbarger.com',
      githubUrl: 'https://github.com/SaNjAy-bRo',
      featured: false
    },
    {
      id: 5,
      title: 'Anything Site',
      description: 'A versatile web application showcasing various web development techniques and modern design patterns. Built with focus on user experience and performance.',
      image: '/anything.png',
      technologies: ['Web Technology', 'Responsive Design', 'Modern UI/UX'],
      category: 'web',
      liveUrl: 'https://jsbootcamp.com',
      githubUrl: 'https://github.com/SaNjAy-bRo',
      featured: false
    },
    {
      id: 6,
      title: 'Snake Game',
      description: 'A classic Snake Game reimagined with modern aesthetics. Features smooth controls, high score tracking, and a responsive layout that works perfectly on both desktop and mobile devices.',
      image: '/snake.png',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'game',
      liveUrl: 'https://snake-game-sage-two.vercel.app/',
      githubUrl: 'https://github.com/SaNjAy-bRo/Snake-Game',
      featured: false
    },
    {
      id: 7,
      title: 'TaskFlow Dashboard',
      description: 'An internal Task Management System built with NestJS, Prisma, and Next.js. Designed to demonstrate scalable architecture, modular backend design, and modern frontend patterns.',
      image: '/taskflow.png',
      technologies: ['Next.js', 'NestJS', 'Prisma', 'Tailwind CSS', 'TypeScript'],
      category: 'web',
      liveUrl: 'https://task-management-system-delta-lac.vercel.app/',
      githubUrl: 'https://github.com/SaNjAy-bRo',
      featured: true
    },
    {
      id: 8,
      title: 'Gesture Arena',
      description: 'A futuristic, browser-based motion-controlled gaming platform. Transforms your webcam into a game controller using advanced MediaPipe computer vision.',
      image: '/gesture_arena.png',
      technologies: ['React', 'MediaPipe', 'Vite', 'Tailwind CSS'],
      category: 'game',
      liveUrl: 'https://gesturearena.vercel.app/',
      githubUrl: 'https://github.com/SaNjAy-bRo',
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'game', label: 'Games' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-card">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
