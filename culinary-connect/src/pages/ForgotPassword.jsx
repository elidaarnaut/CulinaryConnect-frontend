// src/components/ForgotPassword.jsx
import React, { useState } from 'react';
import { forgotPassword } from '../services/ApiServices'; // Import your API service
import './forgotpassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage('');

    try {
      await forgotPassword({ email });
      setMessage('If an account with that email exists, you will receive an email with instructions.');
    } catch (error) {
      console.error('Error sending forgot password email:', error);
      setError('Failed to send forgot password email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Reset Instructions'}
        </button>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
