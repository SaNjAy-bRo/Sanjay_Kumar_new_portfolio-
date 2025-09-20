import React, { useEffect, useState } from 'react';
import './ScrollShowcase.css';

const ScrollShowcase = React.memo(() => {
  const [progress, setProgress] = useState(0); // 0..100
  const [visible, setVisible] = useState(false);

  // Compute start/end between About and 80% of document height (well before footer)
  useEffect(() => {
    const getBounds = () => {
      const about = document.getElementById('about');
      const h = window.innerHeight || 1;
      const docHeight = document.documentElement.scrollHeight;
      // Start a bit after About begins; finish at 80% of document height
      const START_OFFSET_VH = 0.15; // 15% viewport above About
      const DOCUMENT_PERCENTAGE = 0.92; // Complete at 80% of document height
      const start = about ? about.getBoundingClientRect().top + window.scrollY - h * START_OFFSET_VH : 0;
      const end = docHeight * DOCUMENT_PERCENTAGE; // Complete at 80% of total document height
      return { start, end };
    };

    let bounds = getBounds();

    const onScroll = () => {
      const y = window.scrollY;
      const { start, end } = bounds;
      const clamped = Math.min(1, Math.max(0, (y - start) / Math.max(1, end - start)));
      const pct = Math.round(clamped * 100);
      setProgress(pct);
      setVisible(y >= start && y <= end);
    };

    const onResize = () => { bounds = getBounds(); onScroll(); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fx-wrapper" aria-hidden={!visible}>
      <section className={`fx-pinner fx-fluid ${visible ? 'fx-visible' : ''}`} aria-label="Scroll Showcase" style={{ '--fx-progress': progress, '--p': progress }}>
        <div className="fx-progress">
          <span className="sr-only">{progress}% complete</span>
          <span className="fx-sync">
          </span>
        </div>
        <div className="fx-heading">
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


