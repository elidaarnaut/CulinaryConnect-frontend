import "../App.css";

function SortBy() {
    return(
        <div className="sortByDiv">
           <label>
                <span className="sortByLabel">Sort by</span>  
                <select name="sortBy">
                    <option value="mostRelevant">Most Relevant</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    
                </select>
           </label>
        </div>
    );
}

export default SortBy;