import Movie from "./Movie";

function MovieList({ movies, onMovieDelete }) {
    {/* Взимаме movies от props */ }

    //
    //for (const movie of movies) {
    //    movieElements.push(<li><Movie {...movie} /></li>); {/* Минаваме през movies и всеки филм го бутаме в масива movieElements */ }
    //}



    let movieElements = movies.map(movie => <li key={movie.id}><Movie {...movie} onMovieDelete={onMovieDelete} /></li>)
    {/* Метода с map е същия като горния */ }



    return (
        <ul>{movieElements}</ul>
    );
}

export default MovieList;
