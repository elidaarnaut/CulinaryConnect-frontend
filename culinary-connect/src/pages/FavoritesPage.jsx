// FavoritesPage.js
import React, { useState, useEffect } from 'react';
import SideMenu from '../components/SideMenu';
import RecipeItem from '../components/RecipeItem';
import Search from '../components/Search';
import TopMenu from '../components/TopMenu';
import { getLikedRecipes } from '../services/ApiServices';

import '../App.css';

function FavoritesPage() {
    const [likedRecipes, setLikedRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLikedRecipes = async () => {
            try {
                const data = await getLikedRecipes();
                setLikedRecipes(data.data); // Assuming the response data has a 'data' property containing the liked recipes
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch liked recipes.");
                setLoading(false);
                console.error(error);
            }
        };

        fetchLikedRecipes();
    }, []);

    return (
        <div className="appBodyHP2">
            <TopMenu />
            <SideMenu />
            <div className="next2SM">
                <div className="next2SideMenu">
                    <Search />
                    <h1 className="HP2Title" id='exploreTitle'>Favorites</h1>
                    <hr />
                    <div className='exploreItemLayout'>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        {!loading && !error && (
                            likedRecipes.map(recipe => (
                                <RecipeItem key={recipe._id} recipe={recipe} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoritesPage;
