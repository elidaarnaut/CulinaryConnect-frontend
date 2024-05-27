import React from "react";
import SideMenu from '../components/SideMenu';
import Search from '../components/Search';
import SettingsMenu from '../components/SettingsMenu';
import "../App.css";

function SettingsPage3() {
    return(
        <div className="appBodySettings">
            <SideMenu></SideMenu>
            <div className="next2SM">

            </div>
            <div className="next2SideMenuSettings">
                <p>Settings Page</p>
                <hr />

            </div>
        </div>      
    );
}

export default SettingsPage3;