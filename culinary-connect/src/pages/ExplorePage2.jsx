import React from "react";
// import Search from "../components/Search";
import Menu from "../components/Menu";
import SortBy from "../components/SortBy";
import RecipeItem from "../components/RecipeItem";

function ExplorePage2() {
    return(
        <div className="appBody">
            <Menu></Menu>
            <h1 className="HP2Title" id='exploreTitle'>Explore</h1>
            <hr className="hrExplore"/>
            <SortBy></SortBy>
            <div className='exploreItemLayout1'>
                <RecipeItem></RecipeItem>
                <RecipeItem></RecipeItem>
                <RecipeItem></RecipeItem>
                <RecipeItem></RecipeItem>
                <RecipeItem></RecipeItem>
                <RecipeItem></RecipeItem>
                <RecipeItem></RecipeItem>
            </div>
        </div>
    );
}

export default ExplorePage2;