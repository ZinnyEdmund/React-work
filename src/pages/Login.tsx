import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState<"Admin" | "Editor" | "Viewer">("Viewer");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!username || !email) {
            alert("Please enter your username and email.");
            return;
        }
        login({ username, email, role, isAuthenticated: true });
        navigate("/dashboard");
    };

    return (
        <div className='login-container'>
            <h1 className='login-title'>Login</h1>
            <p className='Dep'>Enter your login details</p>
            <div className='login-form'>
                <label className='label'>Username:</label><br />
                <input 
                    type="text" 
                    placeholder="Username" 
                    className='input-field' 
                    required
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <br />

                <label className='label'>Email:</label><br />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className='input-field' 
                    required
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />

                <label className='label'>Role:</label>
                <select 
                    className='input-field'
                    value={role} 
                    onChange={(e) => {
                        const selectedRole = e.target.value as "Admin" | "Editor" | "Viewer";
                        if (["Admin", "Editor", "Viewer"].includes(selectedRole)) {
                            setRole(selectedRole);
                        }
                    }}
                >
                    <option value="" disabled>Select a role</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                </select>
                <br /><br />

                <button onClick={handleLogin} className='button-login'>Login</button>
            </div>
        </div>
    );
};

export default Login;