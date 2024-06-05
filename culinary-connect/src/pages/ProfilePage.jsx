import React, { useState , useEffect  } from 'react';
import SideMenu from '../components/SideMenu';
import banner from "../assets/banner.jpg";
import profilePhoto from "../assets/ProfilePhoto.svg";
import RecipeItem from '../components/RecipeItem';
import TopMenu from '../components/TopMenu';
import { getUser } from '../services/ApiServices';

import "../App.css";

function ProfilePage() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Fetch user data 
        const fetchUserData = async () => {
            try {
                const response = await getUser();
                setUserName(response.data.name);
            }catch(error){
                console.error('Error fetching user data : ', error);
            }
        };

        fetchUserData();

    }, []);

    return(
        <div className="appBodyHP2">
            <TopMenu></TopMenu>
            <SideMenu></SideMenu>
            
            <div className='next2SM'>
                <div className='banner'>
                    <img src={banner} alt="Banner" />
                </div>
                <div className="next2SideMenu">
                    <img className='profilePhoto' src={profilePhoto} alt="" />
                    <h1 className='profileName'>{userName}</h1>
                    <h2 className='profileRecipeTitle'>{userName} Recipes</h2>
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
            
            
        </div>
    );
}
export default ProfilePage;