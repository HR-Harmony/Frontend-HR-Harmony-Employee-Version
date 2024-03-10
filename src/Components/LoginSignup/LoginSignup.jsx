import React, { useState } from "react";
import './LoginSignup.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

import user_profile from '../Assets/user_profile.png';
import lock_column from '../Assets/lock_column.png';
import login_ilus from '../Assets/Computerlogin-amico.png';

const LoginSignup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Fungsi untuk menyimpan token autentikasi
    // const setAuthToken = (token) => {
    //   localStorage.setItem('authToken', token);
    // }

    const handleLogin = async () => {
        // try {
        //     const response = await axios.post('https://hr-harmony.seculab.space/admin/signin', {
        //         username: username,
        //         password: password
        //     });

        //     const { code, error, id, message, token } = response.data;
        //     if (code === 200 && !error) {
        //         setAuthToken(token);
        //         console.log(`Admin login successful. ID: ${id}, Message: ${message}, Token: ${token}`);
        //         navigate("/dashboard");
        //     } else {
        //         setErrorMessage('message');
        //     }
        // } catch (error) {
        //     console.log('Error during login:', error.message);
        //     setErrorMessage('Wrong username or password');
        // }
        navigate("/dashboard");
    };

    return (
        // <div className='login-page'>
        //     <div className='container'>
        //         <div className="login-signup-header">
        //             <div className="text">Sign In</div>
        //             <div className="underline"></div>
        //         </div>
        //         <div className="inputs">
        //             <div className="input">
        //                 <img src={user_profile} alt=""/>
        //                 <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        //             </div>

        //             <div className="input">
        //                 <img src={lock_column} alt=""/>
        //                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        //             </div>
        //         </div>
        //         <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
        //         <div className="error-container">
        //             {errorMessage && <div className="error-message">{errorMessage}</div>}
        //         </div>
        //         <div className="submit-container">
        //             <button onClick={handleLogin} className="submit">Login</button>
        //         </div>
        //     </div>
        //     <section className='ilustration'>
        //     <img src={login_ilus} alt="ilustration" className='img-float-right'/>
        //     </section>
        // </div>

        <div className='login-page'>
            <div className='container'>
                <div className="login-signup-header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_profile} alt=""/>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div className="input">
                        <img src={lock_column} alt=""/>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
                <div className="submit-container">
                    <button onClick={handleLogin} className="submit">Login</button>
                </div>
            </div>
            <section className='ilustration'>
                <img src={login_ilus} alt="ilustration" className='img-float-right'/>
            </section>
        </div>
    );
};

export default LoginSignup;