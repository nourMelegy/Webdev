import { useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(title) {
    const newMovie = {
      id: Date.now(),
      title: title,
      review: "",
      rating: 0,
    };

    setMovies((currentMovies) => [...currentMovies, newMovie]);
  }

  function removeMovie(id) {
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id !== id)
    );
  }

  function updateMovie(id, updates) {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id ? { ...movie, ...updates } : movie
      )
    );
  }

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1>🎬 Movies Watch List</h1>
        <p>Keep track of the movies you've watched and what you thought.</p>
      </header>

      <section className="watch-list">
        <h2>Add a movie</h2>
        <MovieForm onAddMovie={addMovie} />

        <div className="list-heading">
          <h2>Your movies</h2>
          <span className="movie-count">
            {movies.length} {movies.length === 1 ? "movie" : "movies"}
          </span>
        </div>

        <MovieList
          movies={movies}
          onRemoveMovie={removeMovie}
          onUpdateMovie={updateMovie}
        />
      </section>
    </main>
  );
}

export default App;