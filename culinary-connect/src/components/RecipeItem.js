import '../App.css'
import pancakePlaceholder from "../assets/pancakePlaceholder.jpg";

function RecipeItem() {
    return (
        <div className='recipeItem'>
            <div className='cardImgContainer'>
                <img src={pancakePlaceholder} alt='Pancakes'></img>
                <div className='cookingTime'>
                    <p>20 min</p>
                </div>
            </div>
            <h2 className='recipeTitle'>Title</h2>
            <div className='tagSlider'>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
                <span className='tagItem'>Item</span>
            </div>
        </div>
    );
}

export default RecipeItem;