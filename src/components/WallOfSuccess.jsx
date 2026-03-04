import { useState, useEffect, useRef, useCallback } from "react";
import './compoStyle/WallOfSuccess.css';

const testimonials = [
  { id: 1, heading: "SquareUp has been Instrumental in Transforming our Online Presence.", body: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.", name: "John Smith", role: "CEO of Chic Boutique", initials: "JS", url: "#" },
  { id: 2, heading: "Working with SquareUp was a breeze.", body: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.", name: "Sarah Johnson", role: "Founder of HungryBites.", initials: "SJ", url: "#" },
  { id: 3, heading: "SquareUp developed a comprehensive booking and reservation system for our event management company", body: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.", name: "Mark Thompson", role: "CEO of EventMasters", initials: "MT", url: "#" },
  { id: 4, heading: "ProTech Solutions turned to SquareUp to automate our workflow", body: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.", name: "Laura Adams", role: "COO of ProTech Solutions.", initials: "LA", url: "#" },
  { id: 5, heading: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.", body: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.", name: "Michael Anderson", role: "Founder of Dream Homes Realty.", initials: "MA", url: "#" },
  { id: 6, heading: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.", body: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.", name: "Emily Turner", role: "CEO of FitLife Tracker", initials: "ET", url: "#" },
];

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6.5H11M11 6.5L7 2.5M11 6.5L7 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TestimonialCard = ({ heading, body, name, role, initials, url }) => (
  <div className="wos-card">
    <div className="wos-card-glow" />
    <span className="wos-card-quote-mark">"</span>
    <h3 className="wos-card-heading">{heading}</h3>
    <p className="wos-card-body">{body}</p>
    <div className="wos-card-footer">
      <div className="wos-author">
        <div className="wos-avatar">{initials}</div>
        <div>
          <div className="wos-author-name">{name}</div>
          <div className="wos-author-role">{role}</div>
        </div>
      </div>
      <a href={url} className="wos-btn">Open Website <ArrowIcon /></a>
    </div>
  </div>
);


const getSlideConfigs = (isMobile) => {
  if (isMobile) {
  
    return {
      "-2": { x: "calc(-85vw)",        z: -200, rotY: 20,  scale: 0.75, opacity: 0,    zIndex: 0 },
      "-1": { x: "calc(-55vw)",         z: -100, rotY: 15,  scale: 0.82, opacity: 0.55, zIndex: 2 },
       "0": { x: "calc(50vw - 45vw)", z: 0,    rotY: 0,   scale: 1,    opacity: 1,    zIndex: 5 },
       "1": { x: "calc(87vw)",          z: -100, rotY: -15, scale: 0.82, opacity: 0.55, zIndex: 2 },
       "2": { x: "calc(130vw)",         z: -200, rotY: -20, scale: 0.75, opacity: 0,    zIndex: 0 },
    };
  }

  
  return {
    "-2": { x: -200, z: -300, rotY: 30,  scale: 0.2,  opacity: 0,    zIndex: 0 },
    "-1": { x: 119,  z: -140, rotY: 22,  scale: 0.8,  opacity: 0.65, zIndex: 2 },
     "0": { x: 500,  z: 0,    rotY: 0,   scale: 1,    opacity: 1,    zIndex: 5 },
     "1": { x: 880,  z: -140, rotY: -22, scale: 0.8,  opacity: 0.65, zIndex: 2 },
     "2": { x: 900,  z: -300, rotY: -30, scale: 0.92, opacity: 0,    zIndex: 0 },
  };
};

const buildTransform = (cfg, isMobile) => {
  const tx = isMobile ? cfg.x : `${cfg.x}px`;
  return `translateX(${tx}) translateZ(${cfg.z}px) rotateY(${cfg.rotY}deg) scale(${cfg.scale})`;
};

export default function WallOfSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const total = testimonials.length;
  const autoplayRef = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mod = (n, m) => ((n % m) + m) % m;

  const go = useCallback((dir) => {
    setActiveIndex(prev => mod(prev + dir, total));
  }, [total]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => go(1), 3500);
    return () => clearInterval(autoplayRef.current);
  }, [go]);

  const resetAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => go(1), 3500);
  }, [go]);

  const handlePrev = () => { go(-1); resetAutoplay(); };
  const handleNext = () => { go(1); resetAutoplay(); };
  const handleDot  = (i) => { setActiveIndex(i); resetAutoplay(); };

  const onPointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX;
    isDragging.current = true;
  };
  const onPointerUp = (e) => {
    if (!isDragging.current) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev(); }
    isDragging.current = false;
  };

  const slideConfigs = getSlideConfigs(isMobile);

  const slides = testimonials.map((t, i) => {
    const raw = mod(i - activeIndex + 2, total) - 2;
    const clamped = Math.max(-2, Math.min(2, raw));
    const isFar = Math.abs(mod(i - activeIndex, total)) > 2 &&
                  Math.abs(mod(i - activeIndex, total)) < total - 2;
    return { ...t, pos: raw, clamped, visible: !isFar };
  });

  return (
    <section className="wos-wrapper">
      <header className="wos-header">
        <div className="wos-header-bg" />
        <div className="wos-eyebrow">Client Stories</div>
        <h1 className="wos-title">Wall of <span>Success</span></h1>
        <p className="wos-subtitle">What our Clients say About us</p>
      </header>

      <div className="wos-divider" />

      <div className="wos-carousel-section">
        <div
          className="wos-carousel-track-wrapper"
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
        >
          {slides.map(({ id, pos, clamped, visible, ...rest }) => {
            const cfg = slideConfigs[String(clamped)] ?? slideConfigs["-2"];
            const style = {
              transform: buildTransform(cfg, isMobile),
              opacity: visible ? cfg.opacity : 0,
              zIndex: cfg.zIndex,
              pointerEvents: 'auto',
            };
            return (
              <div
                key={id}
                className="wos-slide"
                style={style}
                data-pos={clamped}
                onClick={() => {
                  if (clamped !== 0) {
                    go(clamped);
                    resetAutoplay();
                  }
                }}
              >
                <TestimonialCard {...rest} />
              </div>
            );
          })}
        </div>

        <div className="wos-arrows">
          <button className="wos-arrow" onClick={handlePrev} aria-label="Previous"><ChevronLeft /></button>
          <button className="wos-arrow" onClick={handleNext} aria-label="Next"><ChevronRight /></button>
        </div>

        <div className="wos-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`wos-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => handleDot(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}