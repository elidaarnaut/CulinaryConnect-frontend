import React, { useState, useRef } from 'react';
import { searchRecipe } from "../services/ApiServices";
import "../App.css";
import searchIcon from "../assets/search.png";
import RecipeItems from "../components/RecipeItem";

function Search({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchQuery) return; // Prevent search with empty query
    try {
      setLoading(true);
      setError(null);
      const results = await searchRecipe(searchQuery);
      setSearchResults(results.data);
      // onSearchResults(results.data);
      setShowResults(true); // Show results when search is performed
    } catch (error) {
      setError("Failed to search recipes.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    setShowResults(true);
  };

  const handleBlur = () => {
    // Delay hiding results to allow interaction with them
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <div className="searchContainer" ref={searchContainerRef}>
      <div className="searchBar">
        <form className="searchBarForm" onSubmit={handleSearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search..."
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button type="submit" className="searchButton">
            <img src={searchIcon} alt="Search button icon" />
          </button>
        </form>
      </div>
      {showResults && (loading || searchResults.length > 0 || error) && (
        <div className="searchResults">
          {loading && <p>Loading recipes...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!loading && !error && searchResults.map((recipe) => (
            <RecipeItems key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
