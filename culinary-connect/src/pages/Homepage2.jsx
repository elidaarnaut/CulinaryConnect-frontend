import React, { useEffect, useState } from "react";
import { getNewRecipes, getTopLikedRecipes } from '../services/ApiServices';
import "../App.css";
import SideMenu from "../components/SideMenu";
import Search from "../components/Search";
import RecipeItems from "../components/RecipeItem";
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu";

function Homepage2() {
  const [newRecipes, setNewRecipes] = useState([]);
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const fetchNewRecipes = async () => {
      setSearchActive(false);
      setLoading(true);
      setError(null);
      try {
        const newrecipes = await getNewRecipes();
        const toplikedrecipes = await getTopLikedRecipes();
        setTrendingRecipes(toplikedrecipes.data);
        setNewRecipes(newrecipes.data);
      } catch (err) {
        setError("Failed to fetch new recipes.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewRecipes();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setSearchActive(false); // Activate search mode
  };

  return (
    <div className="appBodyHP2">
      <TopMenu />
      <SideMenu />
      <div className="next2SM">
        <div className="next2SideMenu">
          <Search onSearchResults={handleSearchResults} />
          {searchActive ? (
            <>
              <div className="searchResults searchResultsActive">
                <h1 className="HP2Title">Search Results</h1>
                {/* {searchResults.length === 0 && (
                  <p>No results found for your search query.</p>
                )}
                {searchResults.map((recipe) => (
                  <RecipeItems key={recipe._id} recipe={recipe} className="recipeItem" />
                ))} */}
              </div>
            </>
          ) : (
            <>
              <h1 className="HP2Title">Trending Recipes</h1>
              <div className="trendingRecipes">
                {loading && <p>Loading recipes...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {!loading && !error && trendingRecipes.length === 0 && (
                  <p>No trending recipes available.</p>
                )}
                {!loading && !error && trendingRecipes.length > 0 && (
                  trendingRecipes.map(recipe => (
                    <RecipeItems key={recipe._id} recipe={recipe} className="recipeItem" />
                  ))
                )}
              </div>
              <h1 className="HP2Title">New Recipes</h1>
              <div className="trendingRecipes">
                {loading && <p>Loading recipes...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {!loading && !error && newRecipes.length === 0 && (
                  <p>No new recipes available.</p>
                )}
                {!loading && !error && newRecipes.length > 0 && (
                  newRecipes.map(recipe => (
                    <RecipeItems key={recipe._id} recipe={recipe} className="recipeItem" />
                  ))
                )}
              </div>
            </>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage2;
