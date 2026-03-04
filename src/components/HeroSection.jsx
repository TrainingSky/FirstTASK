import './compoStyle/HeroSection.css';
import { Link } from "react-router-dom";

const ZapierIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-.012 3.6a1.2 1.2 0 0 0-1.188 1.2v3.6H7.2a1.2 1.2 0 1 0 0 2.4h3.6v3.6a1.2 1.2 0 1 0 2.4 0v-3.6h3.6a1.2 1.2 0 1 0 0-2.4h-3.6V7.2a1.2 1.2 0 0 0-1.212-1.2z"/>
  </svg>
);

const SpotifyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const ZoomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.5 4A4.5 4.5 0 0 0 0 8.5v7A4.5 4.5 0 0 0 4.5 20h10A4.5 4.5 0 0 0 19 15.5v-1.75l3.5 2.5A.75.75 0 0 0 24 15.6V8.4a.75.75 0 0 0-1.5-.65L19 10.25V8.5A4.5 4.5 0 0 0 14.5 4h-10z"/>
  </svg>
);

const SlackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
);

const AmazonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.09.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 0 1-10.11-.248C4.185 21.6 2.097 20.3.595 18.68c-.174-.18-.176-.334-.55-.66zm13.076-7.126c0-1.217.324-2.127.97-2.735.646-.608 1.518-.912 2.617-.912.72 0 1.34.142 1.862.426.52.285.952.7 1.29 1.246.338.548.59 1.21.752 1.98.16.77.24 1.648.24 2.633 0 1.22-.33 2.132-.994 2.74-.662.61-1.54.913-2.635.913-.71 0-1.327-.143-1.852-.428-.524-.286-.96-.702-1.308-1.25-.347-.547-.603-1.21-.77-1.985-.165-.77-.248-1.648-.248-2.628h.076zm3.586 5.135c.354 0 .66-.083.915-.25.254-.166.45-.44.59-.82.14-.38.224-.85.254-1.415.03-.563.046-1.24.046-2.022 0-.84-.013-1.553-.04-2.14-.027-.585-.1-1.062-.217-1.43-.116-.367-.293-.633-.527-.8-.235-.168-.536-.252-.905-.252-.368 0-.68.1-.942.295-.26.195-.457.502-.59.92-.134.417-.215.943-.247 1.58-.03.635-.046 1.37-.046 2.207 0 .845.015 1.565.046 2.16.03.593.1 1.082.205 1.47.104.387.27.668.497.843.228.174.514.262.855.262l.106-.008z"/>
  </svg>
);

const AdobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm6.26 0H24v21.248z"/>
  </svg>
);


const MountainBg = () => (
  <svg
    className="hero-mountain"
    viewBox="0 0 900 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <radialGradient id="mglow" cx="50%" cy="100%" r="60%">
        <stop offset="0%" stopColor="#5b2eff" stopOpacity="0.18"/>
        <stop offset="100%" stopColor="#5b2eff" stopOpacity="0"/>
      </radialGradient>
    </defs>
 
    <ellipse cx="450" cy="300" rx="420" ry="140" fill="url(#mglow)" />

   
    {[...Array(14)].map((_, i) => {
      const y = 260 - i * 14;
      const spread = 80 + i * 22;
      const opacity = 0.04 + i * 0.012;
      return (
        <path
          key={i}
          d={`M${450 - spread} ${y + 40} Q450 ${y} ${450 + spread} ${y + 40} L${450 + spread + 100} 300 L${450 - spread - 100} 300 Z`}
          fill="none"
          stroke="rgba(91,46,255,0.55)"
          strokeWidth="0.8"
          opacity={opacity}
        />
      );
    })}
  </svg>
);


const logos = [
  { id: 1, name: 'zapier',  Icon: ZapierIcon  },
  { id: 2, name: 'Spotify', Icon: SpotifyIcon },
  { id: 3, name: 'zoom',    Icon: ZoomIcon    },
  { id: 4, name: 'slack',   Icon: SlackIcon   },
  { id: 5, name: 'amazon',  Icon: AmazonIcon  },
  { id: 6, name: 'Adobe',   Icon: AdobeIcon   },
];

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
   
      <div className="hero-bg">
        <div className="hero-bg-radial" />
        <MountainBg />
      </div>


      <div className="hero-content">
        <h1 className="hero-title">
          A Data-Driven Software<br />& Business Company
        </h1>

     
        <div className="hero-tags">
          <span className="hero-tag">Ed-Tech</span>
          <span className="hero-tag-dot">·</span>
          <span className="hero-tag">Fin-Tech</span>
          <span className="hero-tag-dot">·</span>
          <span className="hero-tag">Med-Tech</span>
          <span className="hero-tag-and">and</span>
          <span className="hero-tag-accent">Startups</span>
        </div>

      <div className="hero-cta">
  <Link to="/Work">
    <button className="hero-btn hero-btn-outline">Our Works</button>
  </Link>
  <Link to="/contactPage">
    <button className="hero-btn hero-btn-solid">Contact Us</button>
  </Link>
</div>
      </div>

      <div className="hero-trust-wrapper">
        <p className="hero-trust-label">Trusted By 250+ Companies</p>
      </div>

     
      <div className="hero-logos">
        {logos.map(({ id, name, Icon }) => (
          <div key={id} className="hero-logo-item">
            <span className="hero-logo-icon"><Icon /></span>
            <span className="hero-logo-name">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}