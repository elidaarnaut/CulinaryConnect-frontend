import React from 'react';
import SideMenu from '../components/SideMenu';
import banner from "../assets/banner.jpg";
import profilePhoto from "../assets/ProfilePhoto.svg";

function ProfilePage() {
    return(
        <div className="appBodyHP2">
            <SideMenu></SideMenu>
            <div className='banner'>
                    {/* <img src={banner} alt="Banner Cover Photo" /> */}
                </div>
            <div className="next2SideMenu">
                
                <img className='profilePhoto' src={profilePhoto} alt="" />
                <hr />
            
            </div>
            
        </div>
    );
}
export default ProfilePage;