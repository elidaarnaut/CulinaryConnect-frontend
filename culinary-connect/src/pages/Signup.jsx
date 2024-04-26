import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginForm.css";
import { FaUser, FaLock, FaLockOpen  } from "react-icons/fa";


const Signup = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
    return (
        <div className='bodyDiv'><div className='wrapper'>
        <form>
            <h1>Sign Up</h1>
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
            <div className='input-box'>
            <input type={visible ? "text" : "password"} value={password} id="password" placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)} required />
                <div className='p-2' onClick={() => setVisible(!visible)}>
                  {
                    visible ? <FaLockOpen className='icon' /> :  <FaLock className='icon'/> 
                  }
                </div>
            </div>
            <Link to="/login"><button type='submit'>Sign Up</button></Link>
            <div className='register-link'>
                <p>Already Have an a Account? <a herf='#'><Link to="/login">Login</Link></a></p>
            </div>
        </form>
    </div>
  </div>      
    );
};

export default Signup;