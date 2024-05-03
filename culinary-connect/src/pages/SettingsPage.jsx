import React from 'react';
import SideMenu from '../components/SideMenu';
import Search from '../components/Search';
import "../App.css";

function SettingsPage() {
    return(
        <div className="appBodyHP2">
            <SideMenu></SideMenu>
            <div className="next2SideMenu">
                {/* <Search></Search> */}
                <h1 className="HP2Title" id='exploreTitle'>Settings</h1>
                <hr />
                <div className='settingsLayout'>
                    
                </div>
            </div>
            
        </div>
    );
}
export default SettingsPage;