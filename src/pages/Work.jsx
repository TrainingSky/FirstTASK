import React, { useEffect, useState } from 'react';
import './Style/Work.css';
import ImageSlider from '../components/ImageSlider';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    fetch("https://skyfall-backend-1.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  // ✅ LOADING STATE
  if (loading) {
    return (
      <section className="portfolio-section">
        <p style={{ textAlign: "center" }}>Loading projects...</p>
      </section>
    );
  }

  // ✅ EMPTY STATE
  if (projects.length === 0) {
    return (
      <section className="portfolio-section">
        <p style={{ textAlign: "center" }}>No projects found</p>
      </section>
    );
  }

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title">At Skyfall</h2>
            <p className="section-description">
              We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
            </p>
            <p className="section-subtext">
              Here are examples of our notable works:
            </p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12" key={project._id}> {/* ✅ FIXED */}
              
              <div className={`project-card ${index % 2 === 0 ? 'project-left' : 'project-right'}`}>
                <div className="row align-items-center">

                  {/* ✅ IMAGE SLIDER */}
                  <div className="col-lg-6">
                    <div className="project-image-container">
                      <div className={`project-mockup ${project.theme || 'dark'}`}>
                        <ImageSlider images={project.images} />
                      </div>
                    </div>
                  </div>

                  {/* ✅ CONTENT */}
                  <div className="col-lg-6">
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>

                      <div className="project-meta">
                        <h4 className="project-subtitle">{project.subtitle}</h4>

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
                      </div>

                      <p className="project-description">
                        {project.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
