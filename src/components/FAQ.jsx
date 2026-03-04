import React, { useState } from "react";

const faqs = [
  { id: 1, question: "What services does SquareUp provide?", answer: "SquareUp offers design, engineering, and product strategy services tailored for scalable businesses." },
  { id: 2, question: "How can SquareUp help my business?", answer: "We help companies scale with innovative digital solutions and strategic planning." },
  { id: 3, question: "What industries does SquareUp work with?", answer: "We work with fintech, healthcare, SaaS, startups, and enterprise organizations." },
  { id: 4, question: "How long does a project take?", answer: "Project timelines depend on scope, typically between 4 to 16 weeks." },
  { id: 5, question: "Do you offer maintenance after delivery?", answer: "Yes, we provide ongoing support and maintenance services." },
  { id: 6, question: "Can you work with existing frameworks?", answer: "Absolutely. We adapt to your existing tech stack when possible." }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null); 

  const toggleFAQ = (id) => {
    setOpenItem(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqs.map(faq => (
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

export default FAQ;
