import React, { useState } from "react";
import { searchRecipe } from "../services/ApiServices";
import "../App.css";
import searchIcon from "../assets/search.png";
import RecipeItems from "../components/RecipeItem";
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const results = await searchRecipe(searchQuery);
      setSearchResults(results.data);
    } catch (error) {
      setError("Failed to search recipes.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderSearchResults = () => {
    if (loading) {
      return <p>Loading recipes...</p>;
    }

    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }

    if (searchResults.length === 0) {
      return <p>No recipes found.</p>;
    }

    return searchResults.map((recipe) => (
      <RecipeItems key={recipe._id} recipe={recipe} />
    ));
  };

  return (
    <div className="appBodyHP2"> 
    <TopMenu />
    <SideMenu />
    <div className="next2SM searchContainer">
      <div className="searchBar">
        <form className="searchBarForm" onSubmit={handleSearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search..."
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" className="searchButton">
            <img src={searchIcon} alt="Search button icon" />
          </button>
        </form>
      </div>
      <div className="searchResults">{renderSearchResults()}</div>
    </div>
    </div>
  );
}

export default Search;
