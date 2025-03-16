import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface User{
    username: string;
    role: string;
    isAuthenticated: boolean;
}
interface NavbarProps{
    user: User  | null;
    email: string;
    logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [dropdown, setDropdown] = useState(false);
    const { logout: authLogout } = useAuth();
    console.log("Rendering Navbar component");
    console.log("User Data:", user)

   console.log(useAuth());
    if (!user) return null;// Ensure user is not null before rendering

    return (
        <nav className="navbar">
            <div className="navbar-left">
              
            <span>
                <p className="tags">Welcome back</p>
            </span>
            </div>
            <div className="navbar-right">
                <button className="dropdown-btn" onClick={() => setDropdown(!dropdown)}>Menu</button>
                {dropdown && (
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <button onClick={authLogout}>Logout</button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;  