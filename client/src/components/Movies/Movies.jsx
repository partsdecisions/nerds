import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ( {movies, search} ) => {
    return (
        <div className="movie-container">
            {
                movies.filter((movie) => {
                    if (search == "") {
                        return movie;
                    } else if (movie.title.toLowerCase().includes(search.toLowerCase())) {
                        return movie;
                    }
                }).map((movie, index) => (
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
