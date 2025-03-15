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
        <div>
            <h1>Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    );
};

export default Profile;