import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ( {movies} ) => {
    return (
        <div className="movie-container">
            {
                movies.map((movie, index) => (
                    <Movie
                        key={index}
                        rating={movie.rating}
                        title={movie.title}
                        year={movie.year}
                        poster={movie.urlPoster}
                    />
                ))
            }
        </div>
    )
}

export default Movies;
