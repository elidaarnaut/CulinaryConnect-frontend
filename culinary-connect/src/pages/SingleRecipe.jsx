import React, { useEffect, useState } from 'react';
import TopMenu from "../components/TopMenu";
import SideMenu from "../components/SideMenu";
import { useParams } from 'react-router-dom';
import { getRecipe, likeRecipe, unlikeRecipe } from '../services/ApiServices';
import './SingleRecipe.css';
import { ReactComponent as HeartOutline } from "../assets/heart.svg";
import { ReactComponent as HeartFilled } from '../assets/heart-full.svg';

const SingleRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const recipeData = await getRecipe(id);
                setRecipe(recipeData.data);
                setIsLiked(recipeData.data.isLiked);
            } catch (err) {
                console.error("Error fetching recipe:", err);
                setError("Failed to fetch recipe.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    const handleLikeToggle = async () => {
        try {
            if (isLiked) {
                await unlikeRecipe(id);
                setIsLiked(false);
            } else {
                await likeRecipe(id);
                setIsLiked(true);
            }
        } catch (err) {
            console.error("Error toggling like:", err);
        }
    };

    if (isLoading) {
        return <p>Loading recipe...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!recipe) {
        return <p>No recipe found</p>;
    }

    return (
        <div className="appBodyHP2"> 
            <TopMenu />
            <SideMenu />
            <div className='next2SM singleRecipe'>
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                <p>Cooking Time: {recipe.time}</p>
                <p>Servings: {recipe.servings}</p>
                <p>Instructions: {recipe.instructions}</p>
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                {recipe.user ? (
                    <p className="recipeBy">Recipe by: {recipe.user.name}</p>
                ) : (
                    <p className="recipeBy">Recipe by: Unknown</p>
                )}
                <button onClick={handleLikeToggle} style={{ border: 'none', background: 'none' }}>
                    {isLiked ? <HeartFilled className="heartPic" /> : <HeartOutline className="heartPic" />}
                </button>
            </div>
        </div>
    );
};

export default SingleRecipe;
