function Movie({title, year, plot, posterUrl, director, onMovieDelete, id}){

    
    return(
        <article>
            <h3>{title}, {year}</h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>{plot}</p>
            </main>
            <footer>Director: {director}</footer>
            <button onClick={() => onMovieDelete(id)}>X</button>
        </article>
    )
}

export default Movie;