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
                <h1 className='profileName'>Jane Doe</h1>
                <h2 className='profileRecipeTitle'>Jane's Recipes</h2>
                <hr />
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