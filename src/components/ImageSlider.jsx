import { useState } from 'react';
import './compoStyle/ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider">
      <img
        src={images[current]}
        alt="Project Preview"
        className="slider-image"
      />

      <button className="slider-btn prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
