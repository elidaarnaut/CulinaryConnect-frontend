import React from "react";

import "../App.css";
import SideMenu from "../components/SideMenu";
import Search from "../components/Search";
import RecipeItems from "../components/RecipeItem";
import Footer from "../components/Footer";

function Homepage2() {
  return (
    <div className="appBodyHP2">
      <SideMenu></SideMenu>
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
        <h1 className="HP2Title">Trending Recipes</h1>
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
  );
}
export default Homepage2;