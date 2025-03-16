import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// Define the Profile component
const Profile: React.FC = () => {
    const auth = useAuth();

    // If auth context is not available
    if (!auth) {
        console.error("Profile must be used within an AuthProvider.");
        return <Navigate to="/login" />;
    }

    const { user } = auth;

    // Redirect to login if not authenticated
    if (!user) {
        return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-avatar"
        />
        <h2 className="profile-name">{user.username}</h2>
        <p className="profile-email"><strong>Email:</strong> {user.email}</p>
        <p className="profile-role"><strong>Role:</strong> {user.role}</p>
      </div>

      <div className="profile-actions">
        <button className="profile-btn">Edit Profile</button>
        <button className="profile-btn logout">Logout</button>
      </div>
    </div>
  );
};

export default Profile;