import { moviesList } from "./data/Movie.js";
import MovieListing from "./MovieListing";
import "./movies.css";

const fetchMovieData = () => {
  {
    /* This is a dummy function for Fetch the data from API in future */
  }
  return moviesList;
};

const MovieComponent = () => {
  const movieData = fetchMovieData();

  return (
    <div className="movie-container">
      <h1>
        Movies <span>2022</span>
      </h1>
      <hr />
      <ul className="movie-list">
        {movieData.map((movie) => {
          return <MovieListing key={movie.id} movie={movie} />;
          {
            /* movie={movie} is a defined prop here and contains movie data. And we are passing this movie as attribute in child component. */
          }
        })}
      </ul>
    </div>
  );
};

export default MovieComponent;
