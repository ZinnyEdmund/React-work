import React, { useState } from "react";
import { Link } from "react-router-dom"

interface User{
    username: string;
    role: string;
    isAuthenticated: boolean;
}
interface NavbarProps{
    user: User | null;
    logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, logout }) => {
    const [dropdown, setDropdown] = useState(false);
    if (!user) return null;

    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* Display the user's name and role */}
            <span>
                <strong>Welcome back, {user.username} {user.role}</strong>
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
                            <button onClick={logout}>Logout</button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;  