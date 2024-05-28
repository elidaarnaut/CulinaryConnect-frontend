import React from "react";
import SideMenu from '../components/SideMenu';
import RecipeItem from '../components/RecipeItem';
// import SortBy from '../components/SortBy';
import Search from '../components/Search';
import TopMenu from '../components/TopMenu';

import "../App.css";

function FavoritesPage() {
    return(
        <div className="appBodyHP2">
            <TopMenu></TopMenu>
            <SideMenu></SideMenu>
            <div className="next2SM">
                <div className="next2SideMenu">
                    <Search></Search>
                    <h1 className="HP2Title" id='exploreTitle'>Favorites</h1>
                    <hr />
                    {/* <SortBy></SortBy> */}
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
export default FavoritesPage;