import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/ApiServices';
import { useUserContext } from "../context/UserContext";
import "./LoginForm.css";
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      console.log(formData);
      const response = await loginUser(formData);
      login(response);
      navigate('/homepage2');
    } catch (error) {
      console.error('Error logging in user:', error);
      setIsLoading(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='bodyDiv'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={visible ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              required
            />
            <div className='p-2' onClick={() => setVisible(!visible)}>
              {visible ? <FaLockOpen className='icon' /> : <FaLock className='icon' />}
            </div>
          </div>
          <div className='remember-forgot'>
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className='error'>{error}</p>}
          <div className='register-link'>
            <p>Don't have an account? <Link to="/signup">Join Us</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
