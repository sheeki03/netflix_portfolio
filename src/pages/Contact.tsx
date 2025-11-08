import React from 'react';
import './Contact.css';
import { 
  FaEnvelope, 
  FaTelegram, 
  FaTwitter, 
  FaGithub, 
  FaLink,
  FaLinkedin,
  FaFileAlt,
  FaBook
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      username: "shivomsharma@protonmail.com",
      link: "mailto:shivomsharma@protonmail.com",
      color: "#EA4335",
      description: "For professional inquiries"
    },
    {
      icon: <FaTelegram />,
      title: "Telegram",
      username: "@sheeki03",
      link: "https://t.me/sheeki03",
      color: "#0088cc",
      description: "Quick conversations"
    },
    {
      icon: <FaTwitter />,
      title: "Twitter / X",
      username: "@sheeki03",
      link: "https://twitter.com/sheeki03",
      color: "#1DA1F2",
      description: "Blockchain insights & thoughts"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      username: "sheeki03",
      link: "https://github.com/sheeki03",
      color: "#333",
      description: "Open source contributions"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      username: "Shivom Sharma",
      link: "https://linkedin.com/in/shivom-sharma-465906112",
      color: "#0077B5",
      description: "Professional network"
    },
    {
      icon: <FaFileAlt />,
      title: "Research Writeups",
      username: "bit.ly/shivom-writeups",
      link: "https://bit.ly/shivom-writeups",
      color: "#764ba2",
      description: "DeFi research & analysis"
    },
    {
      icon: <FaBook />,
      title: "Crypto Resources",
      username: "bit.ly/sheeki-notion",
      link: "https://bit.ly/sheeki-notion",
      color: "#FF5722",
      description: "Curated collection of crypto resources & tools"
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          Reach out for blockchain research collaborations, DeFi discussions, or just to say hello!
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            style={{ 
              '--card-color': contact.color,
              '--animation-delay': `${index * 0.1}s`
            } as React.CSSProperties}
          >
            <div className="contact-icon-wrapper">
              <span className="contact-icon">{contact.icon}</span>
            </div>
            <div className="contact-info">
              <h3 className="contact-platform">{contact.title}</h3>
              <p className="contact-username">{contact.username}</p>
              <p className="contact-description">{contact.description}</p>
            </div>
            <div className="contact-arrow">→</div>
          </a>
        ))}
      </div>

      <div className="contact-cta">
        <div className="cta-content">
          <h2>Open to Opportunities</h2>
          <p>
            Currently exploring senior research roles in DeFi protocols, investment funds, and Web3 infrastructure projects.
            With 9+ years in blockchain and a proven track record in tokenomics design and protocol research,
            I bring deep expertise to help projects succeed.
          </p>
          <div className="cta-badges">
            <span className="badge">🏆 DegenScore #4</span>
            <span className="badge">📊 20+ Projects Advised</span>
            <span className="badge">🔬 DeFi Researcher</span>
            <span className="badge">💎 Early Crypto Adopter</span>
          </div>
        </div>
      </div>

      <div className="contact-footer">
      </div>
    </div>
  );
};

export default Contact;