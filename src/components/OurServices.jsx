import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaPaintBrush, FaPuzzlePiece, FaTasks } from "react-icons/fa";
import "./compoStyle/OurServices.css";

const iconMap = {
  FaPaintBrush: <FaPaintBrush />,
  FaPuzzlePiece: <FaPuzzlePiece />,
  FaTasks: <FaTasks />,
};

const limitWords = (text = "", limit = 120) => {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

// const ServiceCard = ({ service }) => (
//   <div className="service-card">
//     {/* <div className="service-icon">{iconMap[service.icon]}</div> */}
//     <h3 className="service-title">{service.title}</h3>
//     <p className="service-desc">{limitWords(service.description, 20)}</p>
//     <button className="learn-more">Learn More</button>
//   </div>
// );

const ServiceCard = ({ service, detailed = false }) => (
  <div className={`service-card ${detailed ? "detailed" : ""}`}>
    <h3 className="service-title">{service.title}</h3>

  <p className="service-desc service-long-description">
  {(detailed
    ? service.longDescription || service.description
    : limitWords(service.description, 120)
  )}
</p>

    {detailed && service.points?.length > 0 && (
      <ul className="service-list">
        {service.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}

    {!detailed && (
      <button className="learn-more">Learn More</button>
    )}
  </div>
);


// ServiceCard.propTypes = {
//   service: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

ServiceCard.propTypes = {
  service: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  detailed: PropTypes.bool,
};


// const OurServices = () => {
  const OurServices = ({ detailed = false }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/services`)
      .then((res) => res.json())
      .then((data) => setServices(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>

      {/* <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div> */}

      <div className="services-grid">
  {services.map((service) => (
    <ServiceCard
      key={service._id}
      service={service}
      detailed={detailed}
    />
  ))}
</div>

      
    </section>
  );
};

export default OurServices;