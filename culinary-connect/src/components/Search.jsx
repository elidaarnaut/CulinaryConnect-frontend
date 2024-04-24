import '../App.css';
import search from "../assets/search.png";

function Search() {
    return (
        <div className='searchBar'>
            <form className='searchBarForm'>
                <input className='searchInput' type="text" placeholder="Search..." name="search"></input>
                <button type='submit'><img src={search} alt='Search button icon'></img></button>
            </form>
        </div>
    );
}

export default Search;