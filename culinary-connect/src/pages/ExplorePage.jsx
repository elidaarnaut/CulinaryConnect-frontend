import React, { useEffect, useState } from 'react';
import SideMenu from '../components/SideMenu';
import RecipeItem from '../components/RecipeItem';
import SortBy from '../components/SortBy';
import Search from '../components/Search';
import TopMenu from '../components/TopMenu';
import { getRecipes } from "../services/ApiServices";
import "../App.css";

const ExplorePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const fetchedRecipes = await getRecipes();
                console.log(fetchedRecipes); // Log the fetched recipes
                setRecipes(fetchedRecipes.data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setError("Failed to fetch recipes.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchRecipes();
    }, []);
    

    return (
        <div className="appBodyHP2">
            <TopMenu />
            <SideMenu />
            <div className='next2SM'>
                <div className="next2SideMenu">
                    <Search />
                    <h1 className="HP2Title" id='exploreTitle'>Explore</h1>
                    <hr />
                    {/* <SortBy /> */}
                    {isLoading && <p>Loading recipes...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {isLoading ? (
                            <p>Loading recipes...</p>
                        ) : (
                            <div className='exploreItemLayout'>
                                {recipes.length > 0 && recipes.map(recipe => (
                                     <RecipeItem key={recipe._id} recipe={recipe} />
                                ))}

                            </div>
                    )}       
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
