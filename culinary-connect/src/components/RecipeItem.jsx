import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='cardImgContainer'>
                <Link to={`/recipe/${recipe._id}`}>
                    <h2 className='recipeTitle'>{recipe.name}</h2>
                </Link>
            </div>
        </div>
    );
};

export default RecipeItem;
