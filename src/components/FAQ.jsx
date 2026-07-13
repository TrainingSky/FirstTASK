import React, { useState } from "react";
import PropTypes from "prop-types";

const faqs = [
  { id: 1, question: "What industries do you work with?", answer: "We work with startups, SMEs, enterprises, healthcare providers, education, retail, finance, logistics, and many other industries." },
  { id: 2, question: "Do you build custom software?", answer: "Yes. Every solution is designed around your unique business requirements instead of using generic templates." },
  { id: 3, question: "Can you improve our existing system?", answer: "Absolutely. We frequently modernize legacy systems, optimize performance, add new features, and integrate third-party services." },
  { id: 4, question: "Do you provide ongoing support?", answer: "Yes. We offer maintenance, monitoring, updates, and long-term technical support after deployment." },
  { id: 5, question: "Can you integrate AI into our current business?", answer: "Yes. We can integrate AI assistants, predictive analytics, workflow automation, intelligent reporting, and other AI capabilities into your existing systems."},
  { id: 6, question: "Do you build mobile applications?", answer: "Yes. We develop native and cross-platform mobile applications for both Android and iOS." },
  { id: 7, question: "How long does a project take?", answer: "Timelines depend on project complexity. Small websites may take a few weeks, while enterprise software can require several months. We provide a clear timeline before development begins." },
  { id: 8, question: "Do you sign NDAs?", answer: "Yes. We are happy to sign Non-Disclosure Agreements and treat all client information with strict confidentiality." },
  { id: 9, question: "What technologies do you use?", answer: "Our team works with modern technologies including React, Next.js, Angular, .NET, Node.js, Python, Java, Flutter, BigQuery, Power BI, Docker, Kubernetes, Google Cloud Platform, and other enterprise-grade tools." },
  { id: 10, question: "Do you offer dedicated teams?", answer: "Yes. You can hire dedicated developers, QA engineers, data engineers, AI specialists, designers, and project managers who integrate seamlessly with your existing team." },
];

const FAQ = ({ faqsData = faqs }) => {
  const [openItem, setOpenItem] = useState(null); 

  const toggleFAQ = (id) => {
    setOpenItem(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqsData.map(faq => (
          <div key={faq.id} className={`faq-item ${openItem === faq.id ? "active" : ""}`}>
            <div className="faq-header" onClick={() => toggleFAQ(faq.id)}>
              <span className="faq-number">{faq.id.toString().padStart(2, "0")}</span>
              <h3>{faq.question}</h3>
              <span className="faq-icon">{openItem === faq.id ? "✕" : "+"}</span>
            </div>
            {openItem === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ PropTypes (هذا المطلوب من التقرير)
FAQ.propTypes = {
  faqsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};

export default FAQ;