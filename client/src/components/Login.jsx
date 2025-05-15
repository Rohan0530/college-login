import React, { useState } from 'react';
import '../style/Login.css';
import Teacher from './Teacher.png';
import student from './Student.jpg';
import { Link } from 'react-router-dom';

let Login = () => {
    let [accountType, setAccountType] = useState('staff');
    let [formData, setFormData] = useState({ email: '', password: '' });

    let handleLogin = () => {
        console.log({ accountType, ...formData });
        setFormData({email:'',password:''})
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Choose Account Type</h2>
                <div className="account-types">
                    {['staff', 'student'].map((type) => {
                        let imageSrc = type === 'staff' ? Teacher : student;
                        return (
                            <div
                                key={type}
                                onClick={() => setAccountType(type)}
                                className={`account-option ${accountType === type ? 'selected' : ''}`}
                            >
                                <div className="avatar">
                                    <img src={imageSrc} alt={type} />
                                </div>
                                <span>{type}</span>
                            </div>
                        );
                    })}
                </div>

                <p className="welcome-text">
                    Hello {accountType.toLowerCase()}!<br />
                    Please fill out the form below to get login.
                </p>

                <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="forgot">Forgot?</div>

                <button className="login-btn" onClick={handleLogin}>Login</button>

                <p className="signup-text">
                    No account? <Link to={'/registration'} className="signup-link">Signup</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
