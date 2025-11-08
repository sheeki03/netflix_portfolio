import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaFileAlt, FaBook, FaPenNib, FaAddressBook } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'researcher' | 'stalker' | 'explorer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: "/assets/images/picsum_seed_skills.jpg", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "/assets/images/picsum_seed_workexperience.jpg", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "/assets/images/picsum_seed_certifications.jpg", icon: <FaCertificate />, route: "/certifications" },
    { title: "Projects", imgSrc: "/assets/images/picsum_seed_projects.jpg", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Resume", imgSrc: "/assets/images/picsum_seed_contact.jpg", icon: <FaFileAlt />, route: "/resume" },
    { title: "Contact", imgSrc: "/assets/images/picsum_seed_networking.jpg", icon: <FaAddressBook />, route: "/contact" }
  ],
  researcher: [
    { title: "Skills", imgSrc: "/assets/images/picsum_seed_coding.jpg", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "/assets/images/picsum_seed_development.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "/assets/images/picsum_seed_badge.jpg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "/assets/images/picsum_seed_work.jpg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Resume", imgSrc: "/assets/images/picsum_seed_connect.jpg", route: "/resume", icon: <FaFileAlt /> },
    { title: "Reading", imgSrc: "/assets/images/picsum_seed_books.jpg", route: "/reading", icon: <FaBook /> }
  ],
  stalker: [
    { title: "Contact", imgSrc: "/assets/images/picsum_seed_call.jpg", route: "/contact", icon: <FaAddressBook /> },
    { title: "Resume", imgSrc: "/assets/images/picsum_seed_resume.jpg", route: "/resume", icon: <FaFileAlt /> },
    { title: "Projects", imgSrc: "/assets/images/picsum_seed_planning.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "/assets/images/picsum_seed_work.jpg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Skills", imgSrc: "/assets/images/picsum_seed_coding.jpg", route: "/skills", icon: <FaCode /> }
  ],
  explorer: [
    { title: "Reading", imgSrc: "/assets/images/picsum_seed_books.jpg", route: "/reading", icon: <FaBook /> },
    { title: "Blogs", imgSrc: "/assets/images/picsum_seed_writing.jpg", route: "/blogs", icon: <FaPenNib /> },
    { title: "Projects", imgSrc: "/assets/images/picsum_seed_innovation.jpg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Resume", imgSrc: "/assets/images/picsum_seed_connect.jpg", route: "/resume", icon: <FaFileAlt /> },
    { title: "Certifications", imgSrc: "/assets/images/picsum_seed_medal.jpg", route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];
  
  const profileDisplayNames: Record<ProfileType, string> = {
    recruiter: 'Recruiter',
    researcher: 'Researcher',
    stalker: 'Stalker',
    explorer: 'Explorer'
  };

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profileDisplayNames[profile]}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
