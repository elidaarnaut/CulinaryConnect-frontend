import '../App.css';

function Search() {
    return (
        <div className='searchBar'>
            <form className='searchBarForm'>
                <input className='searchInput' type="text" placeholder="Search..." name="search"></input>
                <button type='submit'><img src='../assets/search.png' alt='Search button icon'></img></button>
            </form>
        </div>
    );
}

export default Search;