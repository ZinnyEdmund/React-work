import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// Define the Dashboard component
const Dashboard: React.FC = () => {
    const auth = useAuth();

    // Handle case where AuthContext is not available
    if (!auth) {
        console.error("Dashboard must be used within an AuthProvider.");
        return <Navigate to="/login" />;
    }

    const { user } = auth;

    // If user is not authenticated, redirect to login
    if (!user) return <Navigate to="/login" />;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user.username}!</p>
            {user.role === "Admin" && <p>Here are your admin controls.</p>}
            {user.role === "Editor" && <p>Here is your content panel.</p>}
            {user.role === "Viewer" && <p>Here are your reports.</p>}
        </div>
    );
};

export default Dashboard;