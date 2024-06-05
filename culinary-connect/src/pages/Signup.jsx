import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginForm.css";
import { registerUser } from '../services/ApiServices';
import { useUserContext } from '../context/UserContext'; // Ensure correct import path
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useUserContext(); // Use the login function from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await registerUser(formData);
      login(response); // Use the login function from context
      navigate('/homepage2');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Invalid registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bodyDiv'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className='input-box'>
            <input
              name="name"
              type='text'
              value={formData.name}
              onChange={handleChange}
              placeholder='Username'
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              name="email"
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='User Email'
              required
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              name="password"
              type={visible ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              required
            />
            <div className='p-2' onClick={() => setVisible(!visible)}>
              {visible ? <FaLockOpen className='icon' /> : <FaLock className='icon' />}
            </div>
          </div>
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {error && <p className='error'>{error}</p>}
          <div className='register-link'>
            <p>
              Already Have an Account?{' '}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
