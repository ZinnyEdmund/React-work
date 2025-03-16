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
        <div className="setting-container">
            <h1 className="sctH1">Settings</h1>
            <p>Customize your preferences here.</p>

            <section className="settings-section">
                <h2 className="sctH1">Account settings</h2>
                <ul>
                    <li>Change Email</li>
                    <li>Update Password</li>
                    <li>Two-Factor Authentication</li>
                </ul>
            </section>

            <section className="settings-section">
                <h2 className="sctH1">Preferences</h2>
                <ul>
                    <li>Dark Mode: 
                        <button className="setting-btn">Enable</button></li>
                    <li>Language:  
                        <select  className="Settings-dropdown">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                        </select></li>
                    <li>Notification Settings</li>
                </ul>
            </section>

            <section className="settings-section">
                <h2 className="sctH1">Privacy</h2>
                <ul>
                    <li>Manage Data Sharing</li>
                    <li>Delete Account</li>
                </ul>
            </section>

            <section className="settings-footer">
                <p>If you need help, visit our <a href="#">Support Page</a>.</p>
            </section>
        </div>
    );
};

export default Settings;