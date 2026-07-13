import './compoStyle/WhyChoose.css';


const ExpertiseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ResultsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PartnerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10"/>
    <path d="M12 20V4"/>
    <path d="M6 20v-6"/>
  </svg>
);

const features = [
  {
    id: 1,
    Icon: ExpertiseIcon,
    title: 'Data-Driven by Design',
    body: 'Unlike traditional software companies, every solution we build is backed by analytics and measurable business outcomes.',
  },
  {
    id: 2,
    Icon: ClientIcon,
    title: 'End-to-End Expertise',
    body: 'From strategy and design to development, AI, analytics, cloud, and long-term support—we handle the complete journey.',
  },
  {
    id: 3,
    Icon: ResultsIcon,
    title: 'Tailored Solutions',
    body: 'We don\'t sell templates. Every project is designed specifically around your business goals and workflows.',
  },
  {
    id: 4,
    Icon: PartnerIcon,
    title: 'Scalable Architecture',
    body: 'Our software is built to grow with your company, ensuring performance today and flexibility for tomorrow.',
  },
  {
    id: 5,
    Icon: PartnerIcon,
    title: 'Transparent Communication',
    body: 'Regular updates, clear timelines, and collaborative project management keep you informed every step of the way.',
  },
  {
    id: 6,
    Icon: PartnerIcon,
    title: 'Long-Term Partnership',
    body: 'We measure our success by your continued growth, offering ongoing optimization, support, and innovation beyond launch.',
  },
];

const FeatureCard = ({ Icon, title, body }) => (
  <div className="wc-card">
    <div className="wc-card-glow" />
    <div className="wc-icon-row">
      <div className="wc-icon-box">
        <Icon />
      </div>
      <h3 className="wc-card-title">{title}</h3>
    </div>
    <p className="wc-card-body">{body}</p>
  </div>
);

export default function WhyChoose() {
  return (
    <section className="wc-wrapper">
      
      <div className="wc-bg">
        <div className="wc-bg-gradient" />
        <div className="wc-bg-lines" />
      </div>

  
      <header className="wc-header">
        <h2 className="wc-title">Why Choose Skyfall?</h2>
        <p className="wc-subtitle">
          Experience excellence in digital craftsmanship with our team of skilled
          professionals dedicated to delivering exceptional results.
        </p>
      </header>

      
      <div className="wc-grid">
        {features.map((f) => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </div>
    </section>
  );
}