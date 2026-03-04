import React from "react";
import "./Style/AboutUs.css";
import img from "../assets/images/image-removebg-preview.png"

const AboutUs = () => {
  const aboutParagraphs = [
    "Skyfall Enterprises is the premier data-driven software development company. We go beyond traditional software solutions by integrating cutting-edge data tracking and analytics, transforming raw information into powerful, actionable insights. Unlike one-size-fits-all software providers, we empower businesses with tailored, in-depth reporting that drives smarter decisions, maximizes performance, and unlocks new opportunities for success. With Skyfall Enterprises, data isn’t just numbers—it’s the key to your competitive advantage."
  ];

  const storyParagraphs = [
    "Skyfall Enterprises is a data-driven software development company dedicated to empowering businesses with intelligent solutions. By seamlessly integrating software services with advanced data tracking, we provide in-depth, data-driven reporting that enables businesses to make informed and strategic decisions. Our expertise lies in transforming raw data into actionable insights, helping companies optimize their operations, enhance performance, and drive sustainable growth. At Skyfall Enterprises, we bridge the gap between technology and business intelligence, ensuring that every decision is backed by accurate and meaningful d"
  ];

  const founderData = {
    name: "Ahmad Al Njada",
    bio: [
      "With a bachelors’ in Computer Science, and experience in Business Intelligence. Ahmad Founded Skyfall Enterprises to empower businesses and implement software needs through data-driven approach. And a part of being a tech - founder he also Co - Founded Weqayah(a product under the umbrella of Skyfall). Also, training people and companies is a big part of Ahmad’s journey to ensure that people has the knowledge needed."
    ],
    image: "/founder.jpg"
  };

  return (
    <div className="about-container">
   
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Welcome to Skyfall, where data is the driver of your success.</p>
      </section>

    
      <section className="about-content">
 
  <div className="about-background-text">Skyfall Enterprises</div>

  <div className="about-text">
    {aboutParagraphs.map((para, index) => (
      <p key={index}>{para}</p>
    ))}
  </div>
</section>



      {/* STORY SECTION */}
      <section className="story-section">
        <h2 className="section-title">Our Story</h2>

        {storyParagraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </section>

      {/* FOUNDER SECTION */}
      <section className="founder-section">
        <h2 className="section-title">Founder & CEO</h2>

        <div className="founder-content">
          <div className="founder-text">
            <h3>{founderData.name}</h3>

            {founderData.bio.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="founder-image">
            <img src={img} alt="Founder" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
