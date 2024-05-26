import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Search from '../components/Search';
import SettingsMenu from '../components/SettingsMenu';
import profilePic from '../assets/ProfilePhoto.svg';
import "../App.css";


function SettingsPage2() {
    const [nickname, setNickname] = useState('');  // Initialize nickname state

    // Function to clear the input field
    const clearInput = () => {
        setNickname('');  // Clear the nickname state
    };

    return(
        <div className="appBodySettingsS">
            <SideMenu></SideMenu>
            <div className="next2SideMenuSettings">
                {/* <Search></Search> */}
                <div className="settingsContents">
                    <div className="accSettings">
                        <p className='functionHeading'>Change Profile Picture</p>
                        <div className="ProfilePicSettings">
                            <img src={profilePic} alt="Profile Photo" className="settingsProfilePic" />
                            <div className="ProfilePicText">
                                <p className='settingsText'>Update your profile photo to personalize your account. Choose a photo that represents you best!</p>
                                <button className="settingsButton">Upload Photo</button>
                            </div>
                        </div>
                        <hr />

                        <p className="functionHeading">Change Nickname</p>
                        <br />
                        <p className="settingsText">Your nickname is how you appear on StudyHub to other learners and instructors.</p>
                        <br />
                        <form className='nicknameSettings'>
                            <label htmlFor="nickname" className='functionHeading nicknameLabel'>Nickname:</label>
                            <br />
                            <div className="input-container">
                                <input 
                                    type="text" 
                                    id="nickname" 
                                    name="nickname" 
                                    placeholder="Jane.doe" 
                                    value={nickname} 
                                    onChange={e => setNickname(e.target.value)} 
                                />
                                <button type="button" className="clear-button" onClick={clearInput}>X</button>
                            </div>
                        </form>
                        <br />
                        <hr />
                        <div className='saveChangesDiv'>
                            <button className="settingsButton">Save Changes</button>
  
                        </div>
                    </div>
                </div>
                <hr className="hrSetting"/>
                <SettingsMenu></SettingsMenu>
            </div>
            
        </div>
    );
}

export default SettingsPage2;