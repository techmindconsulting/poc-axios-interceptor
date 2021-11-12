import React from 'react';
import MovieService from './../services/MovieService';

const MovieList = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    MovieService.getAll()
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div clasName="App">Loading...</div>;
  }

  return (
    <div clasName="App">
      <h2>Liste des films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
