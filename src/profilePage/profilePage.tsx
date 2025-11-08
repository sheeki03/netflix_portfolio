import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'recruiter' | 'researcher' | 'stalker' | 'explorer';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "/assets/backgrounds/background_5.gif"; // Default GIF
  const { profileName } = useParams<{ profileName: string }>();

  // Map old route names to new ones for backward compatibility
  const profileMap: Record<string, ProfileType> = {
    'recruiter': 'recruiter',
    'developer': 'researcher',
    'researcher': 'researcher',
    'stalker': 'stalker',
    'adventure': 'explorer',
    'explorer': 'explorer'
  };

  const profile = profileMap[profileName!] || 'recruiter';
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
