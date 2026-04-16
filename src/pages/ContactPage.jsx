import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FAQ from "../components/FAQ";
import "./Style/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reasons: [],
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      reasons: checked
        ? [...prev.reasons, value]
        : prev.reasons.filter((r) => r !== value),
    }));
  };

  const handleSubmit = async () => {

const apiUrl = import.meta.env.VITE_API_URL;
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", email: "", reasons: [], message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Server error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Let's innovate with you today and turn your vision into reality.</p>
      </section>

      <section className="contact-section">
        <div className="contact-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-checkbox">
            <p>Why are you contacting us?</p>
            <div className="checkbox-grid">
              {["Web Design", "Mobile App Design", "Collaboration", "Others"].map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={formData.reasons.includes(item)}
                    onChange={handleCheckbox}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          {status && (
            <p style={{ color: status.includes("successfully") ? "green" : "red" }}>
              {status}
            </p>
          )}

          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>

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