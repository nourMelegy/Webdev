import MovieCard from "./MovieCard";

function MovieList({ movies, onRemoveMovie, onUpdateMovie }) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🍿</span>
        <h3>Your watch list is empty</h3>
        <p>Add your first movie above to get started.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onRemoveMovie={onRemoveMovie}
          onUpdateMovie={onUpdateMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;