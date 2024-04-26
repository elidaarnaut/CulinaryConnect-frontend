import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//  TO DO: replace link feature from login button with the navigate feature upon successful login

import "./LoginForm.css";
import { FaUser, FaLock, FaLockOpen  } from "react-icons/fa";

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // TO DO:
        // Add your logic for user authentication here
        // If the login is successful
        navigate('/homepage2'); // Use navigate to redirect to Homepage2
    };
    return (
        <div className='bodyDiv'><div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='email' placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type={visible ? "text" : "password"} value={password} id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                <div className='p-2' onClick={() => setVisible(!visible)}>
                  {
                    visible ? <FaLockOpen className='icon' /> :  <FaLock className='icon'/> 
                  }
                </div>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox"/>Remeber me</label>
                <a herf="#">Forgot Password</a>
            </div>
            <button type='submit'>Login</button>

            <div className='register-link'>
                <p>Don't have an account? <a herf='#'><Link to="/signup">Join Us</Link></a></p>
            </div>
        </form>
    </div></div>
        
    );
};

export default LoginForm;