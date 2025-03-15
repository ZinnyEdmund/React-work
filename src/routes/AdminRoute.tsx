import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface AdminRouteProps {
    children?: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const auth = useAuth();

    // If auth context is not available, redirect to login
    if (!auth) {
        console.error("AdminRoute must be used within an AuthProvider.");
        return <Navigate to="/login" />;
    }

    // If the user is not an admin, redirect to the dashboard page
    if (!auth.user || auth.user.role !== "Admin") {
        return <Navigate to="/dashboard" />;
    }

    // Render children if provided, otherwise use <Outlet />
    return children ? children : <Outlet />;
};

export default AdminRoute;