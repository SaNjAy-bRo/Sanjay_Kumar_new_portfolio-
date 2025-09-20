import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import './styles/animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ScrollShowcase from './components/ScrollShowcase';

// Lazy load non-critical components
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Certificates = lazy(() => import('./components/Certificates'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <Navbar />
      <Hero />
      {/* Showcase appears as you reach About section and runs until near footer */}
      <ScrollShowcase />
      <About />
      
      <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
        <Experience />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
