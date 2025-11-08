import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'researcher' | 'stalker' | 'explorer';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Reading", imgSrc: "/assets/images/picsum_id_1026.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/assets/images/picsum_id_1027.jpg", link: "/blogs" },
    { title: "Projects", imgSrc: "/assets/images/picsum_id_1028.jpg", link: "/projects" },
    { title: "Resume", imgSrc: "/assets/images/picsum_id_1029.jpg", link: "/resume" }
  ],
  researcher: [
    { title: "Reading", imgSrc: "/assets/images/picsum_id_1026.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/assets/images/picsum_id_1027.jpg", link: "/blogs" },
    { title: "Certifications", imgSrc: "/assets/images/picsum_id_1028.jpg", link: "/certifications" },
    { title: "Projects", imgSrc: "/assets/images/picsum_id_1030.jpg", link: "/projects" },
    { title: "Resume", imgSrc: "/assets/images/picsum_id_1029.jpg", link: "/resume" }
  ],
  stalker: [
    { title: "Contact", imgSrc: "/assets/images/picsum_id_1031.jpg", link: "/contact" },
    { title: "Reading", imgSrc: "/assets/images/picsum_id_1026.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/assets/images/picsum_id_1027.jpg", link: "/blogs" },
    { title: "Resume", imgSrc: "/assets/images/picsum_id_1029.jpg", link: "/resume" }
  ],
  explorer: [
    { title: "Reading", imgSrc: "/assets/images/picsum_id_1026.jpg", link: "/reading" },
    { title: "Blogs", imgSrc: "/assets/images/picsum_id_1027.jpg", link: "/blogs" },
    { title: "Certifications", imgSrc: "/assets/images/picsum_id_1028.jpg", link: "/certifications" },
    { title: "Resume", imgSrc: "/assets/images/picsum_id_1029.jpg", link: "/resume" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  const profileDisplayNames: Record<ProfileType, string> = {
    recruiter: 'Recruiter',
    researcher: 'Researcher',
    stalker: 'Stalker',
    explorer: 'Explorer'
  };

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profileDisplayNames[profile]}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
