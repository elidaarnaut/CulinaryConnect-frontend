import React from 'react';
import SideMenu from '../components/SideMenu';
import RecipeItem from '../components/RecipeItem';
import "../App.css";

function ExplorePage() {
    return(
        <div className="appBodyHP2">
            <SideMenu></SideMenu>
            <div className="next2SideMenu">
                <h1 className="HP2Title">Explore</h1>
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
export default ExplorePage;