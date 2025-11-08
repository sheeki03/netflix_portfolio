import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Recruiter",
      routeName: "recruiter",
      image: blueImage,
      backgroundGif: "/assets/backgrounds/background_2.gif" // Dark storm clouds
    },
    {
      name: "Researcher",
      routeName: "researcher",
      image: greyImage,
      backgroundGif: "/assets/backgrounds/background_1.gif" // Flickering neon lights
    },
    {
      name: "Stalker",
      routeName: "stalker",
      image: redImage,
      backgroundGif: "/assets/backgrounds/background_4.gif" // Dark, abstract digital lights
    },
    {
      name: "Explorer",
      routeName: "explorer",
      image: yellowImage,
      backgroundGif: "/assets/backgrounds/background_3.gif" // Dark ocean waves at night
    },
  ];

  const handleProfileClick = (profile: { name: string; routeName: string; image: string; backgroundGif: string }) => {
    navigate(`/profile/${profile.routeName}`, { state: { profileImage: profile.image, backgroundGif: profile.backgroundGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
