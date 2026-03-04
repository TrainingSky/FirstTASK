import React from "react";
import { FaPaintBrush, FaPuzzlePiece, FaTasks } from "react-icons/fa";
import "./compoStyle/OurServices.css";

const ourServices = [
  {
    id: 1,
    icon: <FaPaintBrush />,
    title: "Design",
    description:
      "At Skyfall, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it’s about creating seamless and intuitive user experiences.",
  },
  {
    id: 2,
    icon: <FaPuzzlePiece />,
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
  },
  {
    id: 3,
    icon: <FaTasks />,
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
  },
];

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>

      <div className="services-grid">
        {ourServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
