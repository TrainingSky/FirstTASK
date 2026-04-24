
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./compoStyle/ImageSlider.css";

const ImageSlider = ({ images = [] }) => {
  const safeImages = Array.isArray(images) ? images : [];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const next = () => goTo((current + 1) % safeImages.length);
  const prev = () => goTo(current === 0 ? safeImages.length - 1 : current - 1);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    timerRef.current = setInterval(next, 4000);

    return () => clearInterval(timerRef.current);
  }, [current, safeImages.length]);

  if (safeImages.length === 0) return null;

  return (
    <div className="slider">
      {safeImages.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`slider-image ${i === current ? "active" : ""}`}
        />
      ))}

      <div className="slider-overlay" />

      {safeImages.length > 1 && (
        <>
          <button className="slider-btn prev" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="slider-btn next" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {safeImages.length > 1 && (
        <div className="slider-dots">
          {safeImages.map((img, i) => (
            <button
              key={`dot-${img}`}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;