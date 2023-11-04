import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <div>
      <button onClick={openProfile}>Open Profile</button>

      {isProfileOpen && (
        <div className="user-profile">
          <div className="profile-content">
            <span className="close-button" onClick={closeProfile}>&times;</span>
            <img src="profile.jpg" alt="Profile Picture" className="profile-picture" />
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-status">Online</p>
            {/* Add more user information here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
