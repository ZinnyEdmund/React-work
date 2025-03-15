import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Settings: React.FC = () => {
    const auth = useAuth();

    // Ensure auth is available
    if (!auth) {
        console.error("Settings must be used within an AuthProvider.");
        return <Navigate to="/login" />;
    }

    const { user } = auth;

    // Redirect non-admin users
    if (!user || user.role !== "Admin") {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div>
            <h1>Settings</h1>
            <p>Manage application settings here.</p>
        </div>
    );
};

export default Settings;