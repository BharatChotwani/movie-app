{
  /* This component is a child componet and we are passing {movie} as an argument, we need to define/get some data from the parent component and the parent component has movie data thats why we are passing {movie} in MovieListing. assign it to a child component’s “prop” attribute. */
}
const MovieListing = ({ movie }) => {
  return (
    <li className="list-item" key={movie.id}>
      <img src={movie.poster} alt={movie.title} width="400px" height="450px" />
      <p>
        {" "}
        {movie.title} by <span>{movie.director}</span> was released on{" "}
        {movie.year}{" "}
      </p>
      <p className="rating">Rating: {movie.rating}</p>
    </li>
  );
};

export default MovieListing;
