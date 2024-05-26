import React from "react";
import SideMenu from '../components/SideMenu';
import Search from '../components/Search';
import SettingsMenu from '../components/SettingsMenu';
import "../App.css";

function SettingsPage3() {
    return(
        <div className="appBodySettingsS">
            <SideMenu></SideMenu>
            <div className="next2SideMenuSettings">
                {/* <Search></Search> */}
                <div className="settingsContents">
                    <div className="accSettings">
                        <p className="functionHeading">Password Change</p>
                        <br />
                        <p className="settingsText">Change your password to keep your account secure. You’ll need to enter your old password, then create a new one.</p>
                        {/* TO DO: This button adds padding bottom from somewhere, need to fix it. */}
                        <button className="button settingsButton">Change Password</button>
                        <br />
                        <hr />
                        <p className="majorHeading">DANGER ZONE</p>
                        <p className="settingsText">The Danger Zone contains important actions that can significantly affect your account, like deleting it. Proceed with caution.</p>
                    
                        <p className="functionHeading">Delete Account</p>
                        <p className="settingsText">Permanently delete your account to remove all your data from Study Hub. This action cannot be undone, so please confirm your decision carefully.</p>
                        <button className="button settingsButton">Delete Account</button>
                    </div>
                </div>
                <hr className="hrSetting"/>
                <SettingsMenu></SettingsMenu>
            </div>
            
        </div>
    );
}

export default SettingsPage3;