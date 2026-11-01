import { useState } from "react";

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAddMovie(trimmedTitle);
    setTitle("");
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a movie title..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-label="Movie title"
      />

      <button type="submit" className="add-button">
        + Add Movie
      </button>
    </form>
  );
}

export default MovieForm;