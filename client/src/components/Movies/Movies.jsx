import Movie from '../Movie/Movie';
import './Movies.css';

const Movies = ({ movies, search, alphabetSort, ratingSort, setLikes, likes }) => {

    console.log(movies);

    const sortMovies = () => {
        if (alphabetSort === "a-z") {
            movies.sort(compareTitle);
        } else if (alphabetSort === "z-a") {
            movies.sort(compareTitle).reverse();
        } else {
            return movies;
        }
    }

    const sortMoviesRating = () => {
        if (ratingSort === "10-1") {
            movies.sort(compareRating);
        } else if (ratingSort === "1-10") {
            movies.sort(compareRating).reverse();
        } else {
            return movies;
        }
    }

    function compareTitle(a, b) {
        if (a.title < b.title){
          return -1;
        }
        if (a.title> b.title){
          return 1;
        }
        return 0;
    }

    function compareRating(a, b) {
        if (a.rating < b.rating){
          return -1;
        }
        if (a.rating> b.rating){
          return 1;
        }
        return 0;
    }

    sortMovies();
    sortMoviesRating();

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
                        setLikes={setLikes}
                        likes={likes}
                    />
                ))
            }
        </div>
    )
}

export default Movies;
