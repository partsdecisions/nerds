import './Sidebar.css';
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = ({ setSearch }) => {

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div className="sidebar-main">
            <div className="sidebar-header">
                <div>
                    <h1> Movies </h1>
                </div>
                <div>
                    <h2> Sort by: </h2>
                </div>
            </div>
            <div className="sidebar-activities">
                <div className="sidebar-search">
                    <form className="search-form" action="">
                        <div>
                            <input className="search-bar" type="text" placeholder="Search for a title"  onChange={updateSearch} required/>
                        </div>
                        {/* <div className="icon">
                            <AiOutlineSearch id="search-icon"/>
                        </div>   */}
                    </form>
                </div>
                <div className="sidebar-sort">
                    <div className="sidebar-sort-alphabet">

                    </div>
                    <div className="sidebar-sort-rating">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
