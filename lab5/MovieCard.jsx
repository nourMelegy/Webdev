 function MovieCard({ movie, onRemoveMovie, onUpdateMovie }) {
  const stars =
    movie.rating > 0
      ? "⭐".repeat(movie.rating)
      : "Not rated yet";

  return (
    <article className="movie-card">
      <div className="movie-card-header">
        <div>
          <h3>{movie.title}</h3>
          <p className="movie-rating">{stars}</p>
        </div>

        <button
          type="button"
          className="remove-button"
          onClick={() => onRemoveMovie(movie.id)}
        >
          Remove
        </button>
      </div>

      <div className="movie-details">
        <label htmlFor={`rating-${movie.id}`}>Your rating</label>

        <select
          id={`rating-${movie.id}`}
          value={movie.rating}
          onChange={(event) =>
            onUpdateMovie(movie.id, {
              rating: Number(event.target.value),
            })
          }
        >
          <option value={0}>Choose a rating</option>
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </select>

        <label htmlFor={`review-${movie.id}`}>Your review</label>

        <textarea
          id={`review-${movie.id}`}
          placeholder="Write your thoughts about this movie..."
          value={movie.review}
          onChange={(event) =>
            onUpdateMovie(movie.id, {
              review: event.target.value,
            })
          }
          rows={3}
        />
      </div>
    </article>
  );
}

export default MovieCard;