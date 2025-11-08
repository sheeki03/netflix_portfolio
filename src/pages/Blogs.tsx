import React from 'react';
import './Blogs.css';
import { FaTwitter, FaGithub, FaFileAlt } from 'react-icons/fa';

const blogs = [
  {
    title: "DeFi Research & Analysis Writeups",
    platform: "Research Archive",
    icon: <FaFileAlt />,
    link: "https://bit.ly/shivom-writeups",
    description: "Comprehensive research papers and analysis on DeFi protocols, tokenomics, and blockchain infrastructure.",
  },
  {
    title: "Twitter / X - Blockchain Insights",
    platform: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/sheeki03",
    description: "Real-time thoughts on crypto markets, DeFi innovations, and blockchain technology trends.",
  },
  {
    title: "GitHub - Open Source Contributions",
    platform: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/sheeki03",
    description: "Smart contract implementations, DeFi research tools, and blockchain development projects.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">📚 Research & Writings</h2>
      <p className="blogs-intro">Deep dives into DeFi protocols, tokenomics, and blockchain research.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
