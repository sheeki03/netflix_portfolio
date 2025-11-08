import React from 'react';
import './Resume.css';
import { FaDownload, FaEye, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-title">📄 Resume</h1>
        <p className="resume-subtitle">Senior Blockchain Researcher | DeFi Expert | Web3 Analyst</p>
      </div>

      <div className="resume-actions">
        <a 
          href="/Resume_Shivom.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button view-button"
        >
          <FaEye /> View Resume
        </a>
        <a 
          href="/Resume_Shivom.pdf" 
          download="Shivom_Sharma_Resume.pdf"
          className="resume-button download-button"
        >
          <FaDownload /> Download PDF
        </a>
      </div>

      <div className="resume-preview">
        <iframe
          src="/Resume_Shivom.pdf"
          title="Shivom Sharma Resume"
          className="pdf-viewer"
          frameBorder="0"
        />
      </div>

      <div className="resume-highlights">
        <h2>Quick Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h3>🎓 Experience</h3>
            <p>9+ years in blockchain & cryptocurrency</p>
            <p>Senior roles at Impossible Finance, Lemniscap, Nethermind</p>
          </div>
          <div className="highlight-card">
            <h3>🔧 Expertise</h3>
            <p>DeFi Protocol Research</p>
            <p>Tokenomics Design</p>
            <p>Smart Contract Analysis</p>
          </div>
          <div className="highlight-card">
            <h3>🏆 Achievements</h3>
            <p>Ranked #4 on DegenScore v1</p>
            <p>Advised 20+ blockchain projects</p>
            <p>Published research on major protocols</p>
          </div>
          <div className="highlight-card">
            <h3>📚 Skills</h3>
            <p>Solidity, Python, SQL</p>
            <p>On-chain Analytics</p>
            <p>MEV Research</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Get in Touch</h2>
        <div className="social-links">
          <a href="https://linkedin.com/in/shivom-sharma-465906112" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/sheeki03" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub /> GitHub
          </a>
          <a href="https://twitter.com/sheeki03" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter /> Twitter
          </a>
        </div>
        <p className="email-contact">
          📧 shivomsharma@protonmail.com
        </p>
      </div>
    </div>
  );
};

export default Resume;