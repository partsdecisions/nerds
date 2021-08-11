import './Sidebar.css';
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = ({ setSearch, setAlphabetSort, setRatingSort }) => {

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div className="sidebar-main">
            <div className="sidebar-header">
                <div>
                    <h1> Movies </h1>
                </div>
                <div className="sort-text">
                    <h2> Sort by: </h2>
                </div>
            </div>
            <div className="sidebar-activities">
                <div className="sidebar-search">
                    <form className="search-form" action="">
                        <div>
                            <input className="search-bar" type="text" placeholder="Search for a title"  onChange={updateSearch} required/>
                        </div>
                    </form>
                </div>
                <div className="sidebar-sort">
                    <div className="sidebar-sort-alphabet">
                        <select id="alphabet" name="alphabetValue" onChange={(e) => setAlphabetSort(e.target.value)}>
                            <option value="none">None</option>
                            <option value="a-z">Title (A-Z)</option>
                            <option value="z-a">Title (Z-A)</option>
                        </select>
                    </div>
                    <div className="sidebar-sort-rating">
                        <select id="rating" name="ratingSort" onChange={(e) => setRatingSort(e.target.value)}>
                            <option value="none">None</option>
                            <option value="10-1">Rating (10-1)</option>
                            <option value="1-10">Rating (1-10)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
