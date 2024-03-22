import { React, useState } from 'react';
import "./LoginForm.css";
import { FaUser, FaLock, FaLockOpen  } from "react-icons/fa";

const LoginFrom = () => {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    return (
        <div><div className='wrapper'>
        <form>
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
                <p>Don't have an account? <a herf='#'>Join Us</a></p>
            </div>
        </form>
    </div></div>
        
    );
};

export default LoginFrom;