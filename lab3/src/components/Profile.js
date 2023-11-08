import React from 'react';
import './Profile.css';
import profileImage from './profile-image.jpg'; // make sure to include the image in your src folder

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-title">Profile</div>
        <div className="experiences-title">Experiences</div>
        <div className="abilities-title">Abilities</div>
      </div>
      <div className="profile-body">
        <div className="about-me">
          <h2>About me</h2>
          <p>I love English and IT, and in the future, I want to become a Business Analyst (BA).</p>
        </div>
        <div className="profile-details">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="details-text">
            <h2>Details</h2>
            <p>Name: Pham Thuy Dung</p>
            <p>Age: 21</p>
            <p>Location: UIT, VNU-HCM</p>
          </div>
      </div>
    </div>
  );
}

export default Profile;
