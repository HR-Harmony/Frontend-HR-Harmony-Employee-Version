import React from "react";
import './LoginSignup.css';
import { Link } from "react-router-dom";

import user_profile from '../Assets/user_profile.png'
import lock_column from '../Assets/lock_column.png'

const LoginSignup = () => {
    return (
            <div className='container'>
                <div className="login-signup-header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                <div className="input">
                    <img src={user_profile} alt=""/>
                    <input type = "text" placeholder="Username"/>
                </div>

                <div className="input">
                    <img src={lock_column} alt=""/>
                    <input type = "password" placeholder="Password"/>
                </div>

                </div>
                <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
                <div className="submit-container">
                    <Link to="/dashboard" className="submit">Login</Link>
                </div>
            </div>
    );
};

export default LoginSignup