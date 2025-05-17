import React, { useState } from 'react';
import '../style/Login.css';
import { Link, useNavigate } from 'react-router-dom';

let Login = () => {
    let [formData, setFormData] = useState({ email: '', password: '' });
    let navigate = useNavigate()

    let handleChange = (e)=>{
        let {name, value} = e.target;
        setFormData({...formData,[name]:value})
    }

    let handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(formData)
        setFormData({email: '', password: '' })

    }


    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={formData.email}
                    name='email'
                    required
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={formData.password}
                    name='password'
                    required
                    onChange={handleChange}
                />
                <div className="forgot">Forgot?</div>

                <button className="login-btn" >Login</button>
                </form>

                <p className="signup-text">No account? <Link to={'/registration'} className="signup-link">Signup</Link></p>
            </div>
        </div>
    );
};

export default Login;
