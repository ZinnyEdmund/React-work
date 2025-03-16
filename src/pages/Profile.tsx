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
        return <Navigate to="/login" />;
    }

    return (
        <div className="profile-container">
            <h1 className="profile-title">Profile</h1>
            <h2 className="profile-name"><strong>Username:</strong> {user.username}</h2>
            <p className="profile-email"><strong>Email:</strong> {user.email}</p>
            <p className="profile-role"><strong>Role:</strong> {user.role}</p>

            <div className="profile-actions">
                <button className="profile-button">Change Password</button>
                <button className="profile-button">Edit</button>
            </div>
        </div>
    );
};

export default Profile;