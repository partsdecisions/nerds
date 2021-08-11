import './Movie.css';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";

const Movie = ({ key, rating, title, year, poster, setLikes, likes }) => {

    const [activeStar, setActiveStar] = useState(false);

    const changeStar = () => {
        setActiveStar(!activeStar);
        if (activeStar == true) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
    }

    return (
        <div className="movie-main">
            <div className="movie-poster"> 
                <div className="image-div">
                    <img src={poster} alt="" className="image"/>
                </div>
                <section className="overlay">
                    <div className="movie-star">
                        <AiFillStar id="star" onClick={changeStar} style={activeStar ? {color: '#F8E71C'} : {color: 'grey'}}/>
                    </div> 
                    <div className="rating-text">
                        <span> <h3>{rating}</h3> </span>
                    </div>
                </section>
            </div>
            <div className="movie-details">
                <h4>{title}</h4>
                <p style={{marginTop: -12}}>{year}</p>
            </div>
        </div>
    )
}

export default Movie
