import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { MoviesSearchForm } from "components/MoviesSearchForm/MoviesSearchForm";
import { fetchMovies } from "services/tmdbAPI";

import css from "Pages/Movies/Movies.module.css"

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const location = useLocation();
    const searchQuery = searchParams.get('query')

    const isFirstRender = useRef(false);
    
    const onSearchSubmit = query => {
        
        if (query.trim() === "") {
        alert('Write something!')
        return;
    }
      setSearchParams({query});
    }
    
    useEffect(() => {
        if (searchQuery) {
            fetchMovies(searchQuery)
            .then(data => setMovies(data));
        }
        isFirstRender.current = true;
    }, [searchQuery])
    
  return (
      <>
          <MoviesSearchForm onSubmit={onSearchSubmit} />
          
          <ul className={css.searchlist}>
              {movies.map((movie) =>
                <Link to={`${movie.id}`} key={movie.id} state={{ from: location }} className={css.searchlink}>
                    <li >{movie.title}</li>
                </Link>
              )}
            </ul>
    </>
    );
}

export default Movies;