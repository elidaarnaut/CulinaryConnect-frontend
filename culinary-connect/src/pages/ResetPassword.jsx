// src/components/ResetPassword.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/ApiServices';

const ResetPassword = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await resetPassword(token, formData.password);
      setSuccess('Password reset successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
        <input 
          name="password" 
          type="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <label>Confirm New Password</label>
        <input 
          name="confirmPassword" 
          type="password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Resetting...' : 'Reset Password'}
        </button>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
