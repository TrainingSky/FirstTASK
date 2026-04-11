import React, { useEffect, useState } from "react";
import { FaPaintBrush, FaPuzzlePiece, FaTasks } from "react-icons/fa";
import "./compoStyle/OurServices.css";

// map icon string from DB to actual component
const iconMap = {
  FaPaintBrush: <FaPaintBrush />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  FaTasks: <FaTasks />,
};



const limitWords = (text, limit = 20) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};


const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://skyfall-backend-1.onrender.com/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
  <div key={service._id} className="service-card">
    <div className="service-icon">{iconMap[service.icon]}</div>
    <h3 className="service-title">{service.title}</h3>
    <p className="service-desc">{limitWords(service.description, 20)}</p>
    <button className="learn-more">Learn More</button>
  </div>
))}
      </div>
    </section>
  );
};

export default OurServices;