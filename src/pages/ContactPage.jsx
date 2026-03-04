import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FAQ from "../components/FAQ"; 
import "./Style/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
   
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let’s innovate with you today and turn your vision into reality.</p>
      </section>

      
      <section className="contact-section">
        <div className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="form-checkbox">
            <p>Why are you contacting us?</p>
            <div className="checkbox-grid">
              <label><input type="checkbox" /> Web Design</label>
              <label><input type="checkbox" /> Mobile App Design</label>
              <label><input type="checkbox" /> Collaboration</label>
              <label><input type="checkbox" /> Others</label>
            </div>
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button className="submit-btn">Submit</button>
        </div>

        {/* CONTACT INFO + SOCIAL */}
        <div className="contact-info">
          <div className="info-box">Operating Days: Monday to Friday</div>
          <div className="info-box social-box">
            <span>Stay Connected:</span>
            <div className="social-icons">
              <a href="https://web.facebook.com/profile.php?id=100084458424509" target="_blank" rel="noreferrer"><FaFacebookF /></a>
      
              <a href="https://www.linkedin.com/company/skyfall-enterprisesa/posts/?feedView=all" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/skyfallenterprises/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </section>

     
      <FAQ />
    </div>
  );
};

export default ContactPage;
