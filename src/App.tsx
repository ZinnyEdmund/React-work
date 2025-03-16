import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

// Define the App component
const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <>
                            <Navbar user={{ username: "admin", role: "Admin", isAuthenticated: true }} logout={function (): void {
                                    throw new Error("Function not implemented.");
                                } } email={""} />
                                <Dashboard />
                            </>
                        </ProtectedRoute>} 
                    />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <>
                            <Navbar user={{ username: "admin", role: "Admin", isAuthenticated: true }} logout={function (): void {
                                    throw new Error("Function not implemented.");
                                } } email={""} />
                                <Profile />
                            </>
                        </ProtectedRoute>} 
                    />
                    <Route path="/settings" element={
                        <AdminRoute>
                            <>
                                <Navbar user={{ username: "admin", role: "Admin", isAuthenticated: true }} logout={function (): void {
                                    throw new Error("Function not implemented.");
                                } } email={""} />
                                <Settings />
                            </>
                        </AdminRoute>} 
                    />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;