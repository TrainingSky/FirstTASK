import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import "./compoStyle/WallOfSuccess.css";

const TestimonialCard = ({
  heading,
  body,
  name,
  role,
  initials,
  avatar,
  url,
  isActive,
}) => (
  <div className={`wos-card ${isActive ? "wos-card--active" : ""}`}>
    <div className="wos-quote">"</div>

    <div className="wos-card-body-wrap">
      <h3 className="wos-card-heading">{heading}</h3>
      <p className="wos-card-body">{body}</p>
    </div>

    <div className="wos-divider" />

    <div className="wos-footer">
      <div className="wos-author">
        {avatar?.url ? (
          <img className="wos-avatar-img" src={avatar.url} alt={name} />
        ) : (
          <div className="wos-avatar">{initials || name?.[0] || "?"}</div>
        )}

        <div className="wos-author-info">
          <div className="wos-author-name">{name}</div>
          <div className="wos-author-role">{role}</div>
        </div>
      </div>

      {url && (
        <a className="wos-btn" href={url} target="_blank" rel="noopener noreferrer">
          OPEN WEBSITE <span className="wos-arrow">→</span>
        </a>
      )}
    </div>
  </div>
);

TestimonialCard.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  initials: PropTypes.string,
  avatar: PropTypes.shape({
    url: PropTypes.string,
  }),
  url: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
};

export default function WallOfSuccess() {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/testimonials`)
      .then((r) => r.json())
      .then((d) =>
        setTestimonials(
          Array.isArray(d) ? d : Array.isArray(d.testimonials) ? d.testimonials : []
        )
      )
      .catch(() => {});
  }, []);

  const mod = (n, m) => ((n % m) + m) % m;

  const go = useCallback(
    (dir) => {
      if (testimonials.length === 0) return;
      setActiveIndex((prev) => mod(prev + dir, testimonials.length));
    },
    [testimonials.length]
  );

  useEffect(() => {
    clearInterval(autoplayRef.current);

    if (testimonials.length > 1) {
      autoplayRef.current = setInterval(() => go(1), 4000);
    }

    return () => clearInterval(autoplayRef.current);
  }, [go, testimonials.length]);

  const getSlides = () => {
    if (testimonials.length === 0) return [];

    return testimonials.map((t, i) => {
      const raw = mod(i - activeIndex, testimonials.length);
      let pos = null;

      if (raw === 0) pos = 0;
      else if (raw === 1) pos = 1;
      else if (raw === testimonials.length - 1) pos = -1;

      return { ...t, pos, originalIndex: i };
    });
  };

  const slides = getSlides();

  return (
    <section className="wos-wrapper">
      <h2 className="wos-title">Wall of Success</h2>

      <div className="wos-track">
        {slides.map((t) => {
          if (t.pos === null) return null;

          return (
            <div
              key={t._id}
              className="wos-slide"
              data-pos={t.pos}
              onClick={() => t.pos !== 0 && setActiveIndex(t.originalIndex)}
            >
              <TestimonialCard {...t} isActive={t.pos === 0} />
            </div>
          );
        })}
      </div>

      <div className="wos-controls">
        <button className="wos-ctrl-btn" onClick={() => go(-1)}>
          ‹
        </button>
        <button className="wos-ctrl-btn" onClick={() => go(1)}>
          ›
        </button>
      </div>
    </section>
  );
}