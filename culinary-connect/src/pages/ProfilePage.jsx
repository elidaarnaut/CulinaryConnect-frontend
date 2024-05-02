import React from 'react';
import SideMenu from '../components/SideMenu';
import banner from "../assets/banner.jpg";
import profilePhoto from "../assets/ProfilePhoto.svg";
import RecipeItem from '../components/RecipeItem';
import "../App.css";

function ProfilePage() {
    return(
        <div className="appBodyHP2">
            <SideMenu></SideMenu>
            <div className='banner'>
            </div>
            <div className="next2SideMenu">
                <img className='profilePhoto' src={profilePhoto} alt="" />
                <div className='profilePersonalInfo'>
                    <div className='profileName'>
                        <h1 >Jane Doe</h1>
                    </div>
                    {/* <h1 className='profileName'>Jane Doe</h1> */}
                    <div className='profileBio'>
                        <p className='bioTitle'>Bio</p>
                        <br />
                        <p className='bioDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non nisl ut arcu pulvinar hendrerit eu eu lorem. Nullam ultricies lectus magna, a auctor libero dictum ut. Nam imperdiet leo.</p>
                    </div>
                </div>
                <hr />
                <br />
                <div className='exploreItemLayout'>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                    <RecipeItem></RecipeItem>
                </div>
            
            </div>
            
        </div>
    );
}
export default ProfilePage;