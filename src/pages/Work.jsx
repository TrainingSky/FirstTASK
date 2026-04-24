import React, { useEffect, useState } from "react";
import "./Style/Work.css";
import ImageSlider from "../components/ImageSlider";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setProjects([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="portfolio-section">
        <p style={{ textAlign: "center", color: "#fff" }}>
          Loading projects...
        </p>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="portfolio-section">
        <p style={{ textAlign: "center", color: "#fff" }}>
          No projects found
        </p>
      </section>
    );
  }

  return (
    <section className="portfolio-section">
      <div className="portfolio-hero">
        <h1 className="portfolio-hero-title">Our Work</h1>
        <p className="portfolio-hero-subtitle">
          A collection of projects we’ve designed and built with passion.
        </p>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">At Skyfall</h2>
          <p className="section-description">
            We have had the privilege of working with a diverse range of clients
            and delivering exceptional digital products that drive success.
          </p>
          <p className="section-subtext">
            Here are examples of our notable works:
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <div className="project-image-container">
                <div
                  className={`project-mockup ${
                    project.theme || "dark"
                  }`}
                >
                  {/* ✅ حماية images */}
                  <ImageSlider images={project.images || []} />
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-meta">
                  <h4 className="project-subtitle">
                    {project.subtitle}
                  </h4>

                  {project.url && (
                    <a
                      href={project.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.url}
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;