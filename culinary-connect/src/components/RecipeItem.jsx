import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import time from "../assets/clock.svg";
import servings from "../assets/restaurant.svg";

const RecipeItem = ({ recipe }) => {
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await fetch(`/api/v1/recipes/${recipe._id}/photo`);
                if (!response.ok) {
                    throw new Error('Failed to fetch photo');
                }
                const photoData = await response.blob();
                const url = URL.createObjectURL(photoData);
                setPhotoUrl(url);
            } catch (error) {
                console.error('Error fetching photo:', error);
            }
        };

        fetchPhoto();
    }, [recipe._id]);

    return (
        <div className='recipeItem'>
            {/* {photoUrl && <img src={photoUrl} alt={recipe.name} />} */}
            <Link className = 'noLink alignment'  to={`/recipe/${recipe._id}`}>
                <h2 className='recipeTitle'>{recipe.name}</h2>
                <hr className='recipeHR'></hr>
                <h3 className='recipeCategory'>{recipe.category}</h3>
                <div className='recipeSideBySide'>
                    <img src={time} alt="" />
                    <h3 className='recipeTime'> {recipe.time} minutes</h3>
                </div>
                <div className='recipeSideBySide'>
                    <img src={servings} alt="" />
                    <h3 className='recipeTime'> {recipe.servings} servings</h3>
                </div>
                
                
            </Link>
        </div>
    );
};

export default RecipeItem;
