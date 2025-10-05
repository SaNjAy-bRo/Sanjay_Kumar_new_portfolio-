import React, { useEffect, useState } from 'react';
import './ScrollShowcase.css';

const ScrollShowcase = React.memo(() => {
  const [progress, setProgress] = useState(0); // 0..100
  const [visible, setVisible] = useState(false);

  // Compute start/end between About and very late in document (almost at footer)
  useEffect(() => {
    const getBounds = () => {
      const about = document.getElementById('about');
      const contact = document.getElementById('contact');
      const start = about ? about.offsetTop : 0;
      const end = contact
        ? contact.offsetTop
        : Math.max(1, document.documentElement.scrollHeight - (window.innerHeight || 1));
      return { start, end };
    };

    let bounds = getBounds();
    let lastDocHeight = document.documentElement.scrollHeight;

    const onScroll = () => {
      const y = window.scrollY;
      const currentHeight = document.documentElement.scrollHeight;
      if (currentHeight !== lastDocHeight) {
        lastDocHeight = currentHeight;
        bounds = getBounds();
      }
      const { start, end } = bounds;
      const clamped = Math.min(1, Math.max(0, (y - start) / Math.max(1, end - start)));
      const pct = Math.round(clamped * 100);
      setProgress(pct);
      setVisible(y >= start && y <= end);
    };

    const onResize = () => { bounds = getBounds(); lastDocHeight = document.documentElement.scrollHeight; onScroll(); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);

    // Observe DOM mutations that can affect layout (e.g., images loading)
    const observer = new MutationObserver(() => {
      // Debounced via requestAnimationFrame to avoid thrash
      window.requestAnimationFrame(onResize);
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
    onResize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fx-wrapper" aria-hidden={!visible}>
      <section className={`fx-pinner fx-fluid ${visible ? 'fx-visible' : ''}`} aria-label="Scroll Showcase" style={{ '--fx-progress': progress, '--p': progress }}>
        <div className="fx-heading">
          <div className="fx-progress fx-progress--heading">
            <span className="fx-progress-text">{progress}% complete</span>
          </div>
          <div className="fx-measure"></div>
          <h1 spellCheck="false" style={{ backgroundPositionX: `calc(200% - ${progress}%)` }}>
            Where lasers sketch the terrain, I craft the roads you travel in code.
          </h1>
        </div>
      </section>
    </div>
  );
});

export default ScrollShowcase;


