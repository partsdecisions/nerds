import './Movie.css';

const Movie = (  {key, rating, title, year, poster} ) => {
    return (
        <div className="movie-main">
            <div className="movie-poster">
                <img src={poster} alt="" />
            </div>
            <div className="movie-details">
                <h4>{title}</h4>
                <p style={{marginTop: -12}}>{year}</p>
            </div>
        </div>
    )
}

export default Movie
