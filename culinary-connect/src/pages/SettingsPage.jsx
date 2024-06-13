import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Search from '../components/Search';
import profilePic from '../assets/ProfilePhoto.svg';
import Footer from '../components/Footer';
import TopMenu from '../components/TopMenu';
import { updateUser, updateUserPassword } from '../services/ApiServices'; 
import { saveToken } from '../services/tokenService';

import "../App.css";

function SettingsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await updateUserPassword({ currentPassword: formData.currentPassword, newPassword: formData.newPassword });
            const newtoken = response.token;
            // Save token securely
            saveToken(newtoken);
            setSuccess("Password updated successfully!");
        } catch (error) {
            console.error('Error updating password:', error);
            setError("Failed to update password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateDetails = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await updateUser({ name: formData.name, email: formData.email });
            const newtoken = response.token;
            // Save token securely
            saveToken(newtoken);
            setSuccess("Details updated successfully!");
        } catch (error) {
            console.error('Error updating details:', error);
            setError("Failed to update details. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div className="appBodyHP2">
            <TopMenu></TopMenu>
            <SideMenu></SideMenu>
            <div className='next2SM'>
                <div className="next2SideMenu">
                    {/* <Search></Search>  */}
                    <h1 className="HP2Title">Settings</h1>
                    <hr />
                    <div className="settingsContents">
                        <div className="accSettings">
                            <br />
                            {/* <p className='functionHeading'>Change Profile Picture</p>
                            <br />
                            <div className="ProfilePicSettings">
                                <img src={profilePic} alt="Profile Photo" className="settingsProfilePic" />
                                <div className="ProfilePicText">
                                    <p className='settingsText'>Update your profile photo to personalize your account. Choose a photo that represents you best!</p>
                                    <button className="settingsButton">Upload Photo</button>
                                </div>
                            </div>
                            <hr /> */}
                            <div className="settingsForm">
                                <p className="functionHeading">Change Your Password</p>
                                <p className="settingsText">Change your password to keep your account secure. You’ll need to enter your old password, then create a new one.</p>
                                <form onSubmit={handleUpdatePassword}>
                                    <label htmlFor="currentPassword">Current Password</label>
                                    <input id="currentPassword" name="currentPassword" type="password" value={formData.currentPassword} onChange={handleChange} required />

                                    <label htmlFor="newPassword">New Password</label>
                                    <input id="newPassword" name="newPassword" type="password" value={formData.newPassword} onChange={handleChange} required />

                                    <button className='settingsButton' type="submit" disabled={isLoading}>Change Password</button>
                                </form>
                                {isLoading && <p>Loading...</p>}
                                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                                {success && <p>{success}</p>}
                            </div>
                            <hr/>
                            <div className="settingsForm">
                                <h2 className="majorHeading">Update User Details</h2>
                                <p className="settingsText">Change your username and email address.</p>
                                <h3 className="functionHeading">Update Account</h3>
                                <form onSubmit={handleUpdateDetails}>
                                    <div className="formGroup">
                                        <label htmlFor="name">Name:</label>
                                        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="email">Email:</label>
                                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <button className="settingsButton" type="submit" disabled={isLoading}>Change Details</button>
                                </form>
                                {isLoading && <p className="loadingMessage">Loading...</p>}
                                {error && <p className="errorMessage">Error: {error}</p>}
                                {success && <p className="successMessage">{success}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;
