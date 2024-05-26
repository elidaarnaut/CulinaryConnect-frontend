import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function SettingsMenu(){
    return(
        <div className="settingsMenu">
            <div className="sMenuContent">
                <Link to="/settings" className="link sMenuItem"><p>Account</p></Link>
                <hr />
                <Link to="/settings2" className="link sMenuItem"><p>Profile</p></Link>
                <hr />
                <Link to="/settings3" className="link sMenuItem"><p>Support and Help</p></Link>
            </div>
        </div>
    );
}

export default SettingsMenu;