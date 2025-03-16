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
        <div className="dashboard-container">
            <h1 className="Dash-title">Dashboard</h1>
            <p className="dash-welcome">Welcome back, <span className="username">{user.username}!</span></p>

            <div className="dashboard-content">
                {user.role === "Admin" && <p className="dash-role">🔧 Here are your admin controls.</p>}
                {user.role === "Editor" && <p className="dash-role">📝 Here is your content panel.</p>}
                {user.role === "Viewer" && <p className="dash-role">📊 Here are your reports.</p>}
            </div>
            </div>
    );
};

export default Dashboard;