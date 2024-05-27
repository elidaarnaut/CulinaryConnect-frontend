import React from 'react';
import SideMenu from '../components/SideMenu';
import Search from '../components/Search';
import SettingsMenu from '../components/SettingsMenu';
import profilePic from '../assets/ProfilePhoto.svg';
import Footer from '../components/Footer';

import "../App.css";

function SettingsPage() {
    return(
        <div className="appBodySettings">
            <SideMenu></SideMenu>
            <div className='next2SM'>
                <div className="next2SideMenuSettings">
                    {/* <Search></Search> */}
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
                            <button className="button settingsButton">Change Password</button>
                            <hr/>
                            <p className="majorHeading">DANGER ZONE</p>
                            <br />
                            <p className="settingsText">The Danger Zone contains important actions that can significantly affect your account, like deleting it. Proceed with caution.</p>
                            <br />
                            <p className="functionHeading">Delete Account</p>
                            <br />
                            <p className="settingsText">Permanently delete your account to remove all your data from Study Hub. This action cannot be undone, so please confirm your decision carefully.</p>
                            <button className="button settingsButton">Delete Account</button>
                            <br />
                        </div>
                    </div>
                    {/* <hr className="hrSetting"/> */}
                    {/* <SettingsMenu></SettingsMenu> */}
                </div>
            </div>
            
        </div>
    );
}
export default SettingsPage;