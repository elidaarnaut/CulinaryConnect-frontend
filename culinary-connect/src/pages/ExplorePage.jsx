import React from 'react';
import SideMenu from '../components/SideMenu';
import RecipeItem from '../components/RecipeItem';
import SortBy from '../components/SortBy';
import Search from '../components/Search';
import "../App.css";

function ExplorePage() {
    return(
        <div className="appBodyHP2">
            <SideMenu></SideMenu>
             {/* the div below is to center the next2sideMenu content  */}
            <div className='next2SM'>
                <div className="next2SideMenu">
                    <Search></Search>
                    <h1 className="HP2Title" id='exploreTitle'>Explore</h1>
                    <hr />
                    <SortBy></SortBy>
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
export default ExplorePage;