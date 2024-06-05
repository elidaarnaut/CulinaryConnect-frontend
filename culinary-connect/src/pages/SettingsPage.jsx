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
                    <Search></Search> 
                    <h1 className="HP2Title">Settings</h1>
                    <hr />
                    <div className="settingsContents">
                        <div className="accSettings">
                            <br />
                            <p className='functionHeading'>Change Profile Picture</p>
                            <br />
                            <div className="ProfilePicSettings">
                                <img src={profilePic} alt="Profile Photo" className="settingsProfilePic" />
                                <div className="ProfilePicText">
                                    <p className='settingsText'>Update your profile photo to personalize your account. Choose a photo that represents you best!</p>
                                    <button className="settingsButton">Upload Photo</button>
                                </div>
                            </div>
                            <hr />
                            <p className="functionHeading">Password Change</p>
                            <br />
                            <p className="settingsText">Change your password to keep your account secure. You’ll need to enter your old password, then create a new one.</p>
                            <form onSubmit={handleUpdatePassword}>
                                <label>Current Password</label>
                                <input name="currentPassword" type="password" value={formData.currentPassword} onChange={handleChange} required />
                                <label>New Password</label>
                                <input name="newPassword" type="password" value={formData.newPassword} onChange={handleChange} required />
                                <button className="button settingsButton" type="submit" disabled={isLoading}>Change Password</button>
                            </form>
                            {isLoading && <p>Loading...</p>}
                            {error && <p>Error: {error}</p>}
                            {success && <p>{success}</p>}
                            <hr/>
                            <p className="majorHeading">UPDATE USER DETAILS</p>
                            <br />
                            <p className="settingsText">To change the user name and the email </p>
                            <br />
                            <p className="functionHeading">Update Account</p>
                            <br />
                            <form onSubmit={handleUpdateDetails}>
                                <label>Name</label>
                                <input name="name" type="text" value={formData.name} onChange={handleChange} />
                                <label>Email</label>
                                <input name="email" type="email" value={formData.email} onChange={handleChange} />
                                <button className="button settingsButton" type="submit" disabled={isLoading}>Change Details</button>
                            </form>
                                {isLoading && <p>Loading...</p>}
                                {error && <p>Error: {error}</p>}
                                {success && <p>{success}</p>}
                                <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;
