import MovieList from "./components/MovieList";
import { movies as movieData } from "./movies";
import { useState } from "react";

function App() {
    const [movies, setMovies] = useState(movieData);


    function onMovieDelete(id) {
        setMovies(oldMovie => oldMovie.filter(x => x.id !== id))
    }

    return (
        <div>
            <h1>Collection of movies</h1>
            <MovieList movies={movies.slice(0, 20)} onMovieDelete={onMovieDelete} />
        </div>
    );
}

export default App;
