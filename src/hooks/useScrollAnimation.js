import { useEffect, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-in',
    delay = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add animation class immediately to ensure visibility
    element.classList.add(animationClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animationClass);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, animationClass, delay]);

  return elementRef;
};

export const useParallaxScroll = (speed = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Only apply subtle parallax when element is in viewport
      if (elementRect.top < windowHeight && elementRect.bottom > 0) {
        const rate = (scrolled - elementTop + windowHeight) * -speed * 0.3; // Reduced intensity
        element.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

export const useStaggerAnimation = (delay = 150) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const children = container.children;
    Array.from(children).forEach((child, index) => {
      child.style.animationDelay = `${index * delay}ms`;
      observer.observe(child);
    });

    return () => {
      Array.from(children).forEach(child => observer.unobserve(child));
    };
  }, [delay]);

  return containerRef;
};
