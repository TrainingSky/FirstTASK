import React from 'react';
import './Style/Work.css';
import alma1 from "../assets/images/almajali1.png"
import alma2 from "../assets/images/almajali2.png"
import alma4 from "../assets/images/almajali4.png"
import alma3 from "../assets/images/almajali3.png"
import TED1 from "../assets/images/TED1.png"
import TED2 from "../assets/images/TED2.png"
import TED3 from "../assets/images/TED3.png"
import TED4 from "../assets/images/TED4.png"
import ImageSlider from '../components/ImageSlider';


const WorkHero = () => {
  return (
    <section className="work-hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="hero-title">Our Works</h1>
            <p className="hero-subtitle">
              Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  const projects = [
{
  id: 1,
  title: 'Dr Khaled – Expert Dental & Oral Health',
  subtitle: 'Website for the clinic',
  description: 'Dr Khaled’s website is a modern medical platform designed to introduce the clinic, showcase available services, and allow patients to easily explore treatments and book appointments. The website focuses on clarity, trust, and accessibility, reflecting the clinic’s commitment to high-quality patient care.',
  url: 'https://dr-khaled.com/',
  theme: 'dark',
  images: [alma1, alma2, alma3, alma4],
},
  {
  id: 2,
  title: 'TEDxTabarbour – Event Ticketing',
  subtitle: 'Full-Stack Web Solution for Event Booking ',
  description: 'The TEDxTabarbour website is a dynamic, full-stack platform designed to manage TEDx events, allowing users to explore speakers, sponsors, and book tickets seamlessly. The site integrates a modern front-end with a scalable back-end to provide real-time event information and secure ticketing.',
  url: 'https://tedxtabarbour.com/',
  theme: 'dark',
  images: [TED1, TED2, TED3,TED4],
},
  {
  id: 2,
  title: 'TEDxTabarbour – Event Ticketing',
  subtitle: 'Full-Stack Web Solution for Event Booking ',
  description: 'The TEDxTabarbour website is a dynamic, full-stack platform designed to manage TEDx events, allowing users to explore speakers, sponsors, and book tickets seamlessly. The site integrates a modern front-end with a scalable back-end to provide real-time event information and secure ticketing.',
  url: 'https://tedxtabarbour.com/',
  theme: 'dark',
  images: [TED1, TED2, TED3,TED4],
},
  {
  id: 2,
  title: 'TEDxTabarbour – Event Ticketing',
  subtitle: 'Full-Stack Web Solution for Event Booking ',
  description: 'The TEDxTabarbour website is a dynamic, full-stack platform designed to manage TEDx events, allowing users to explore speakers, sponsors, and book tickets seamlessly. The site integrates a modern front-end with a scalable back-end to provide real-time event information and secure ticketing.',
  url: 'https://tedxtabarbour.com/',
  theme: 'dark',
  images: [TED1, TED2, TED3,TED4],
},
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title">At Skyfall</h2>
            <p className="section-description">
              We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
            </p>
            <p className="section-subtext">Here are examples of our notable works:</p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-12" key={project.id}>
              <div className={`project-card ${index % 2 === 0 ? 'project-left' : 'project-right'}`}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="project-image-container">
                      <div className={`project-mockup ${project.theme}`}>
                    <div className="project-image-container">
  <ImageSlider images={project.images} />
</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta">
                        <h4 className="project-subtitle">{project.subtitle}</h4>
                        <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                          {project.url}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                      <p className="project-description">{project.description}</p>
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

// Main Work Component
const Work = () => {
  return (
    <div className="work-page">
      <WorkHero />
      <Portfolio />
    </div>
  );
};

export default Work;