import React from "react";

import "../App.css";
import SideMenu from "../components/SideMenu";
import Search from "../components/Search";
import RecipeItems from "../components/RecipeItem";
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu";

function Homepage2() {
  return (
    <div className="appBodyHP2">
      <TopMenu></TopMenu>
      <SideMenu></SideMenu>
      <div className="next2SM">
        <div className="next2SideMenu">
          <Search></Search>
          <h1 className="HP2Title">Trending Recipes</h1>
          <div className="trendingRecipes">
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>

          </div>
          <h1 className="HP2Title">New Recipes</h1>
          <div className="trendingRecipes">
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>
            <RecipeItems></RecipeItems>

          </div>
          <Footer></Footer>
        </div>
      </div>
      
    </div>
  );
}
export default Homepage2;