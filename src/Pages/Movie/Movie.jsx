import { useState, useRef, useEffect, Suspense } from "react";
import { Link, NavLink, useParams, Outlet, useLocation } from "react-router-dom";

import { fetchDetails, IMG_URL } from "services/tmdbAPI";

import css from "Pages/Movie/Movie.module.css"

const Movie = () => {

    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState('')
    const { id } = useParams();
    const location = useLocation();
    
    const isFirstRender = useRef(true);
    
  useEffect(() => {
    if (isFirstRender.current) {
        fetchDetails(id)
            .then(data => {
                setMovie(data);
                setGenres(data.genres.map(genre => genre.name + " "))
            })
        
      isFirstRender.current = false;
     }
  }, [id])
    
    return(<>
        
        
            <Link to={location.state?.from ?? '/'} className={css.sublink}>Go Back</Link>
        <div className={css.movieContainer}>
        <div className={css.poster}>
            <img src={IMG_URL + movie.poster_path} alt="" width="200" />
        </div>
            <div className={css.info}>
                <h2>{movie.title} ({movie.release_date})</h2>
                <p>{`${Math.round(movie.vote_average*10)}%`}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
            </div>
        </div>
        <ul className={css.sublist}><li><NavLink to="cast" state={{from: location.state?.from}} className={({ isActive }) => (isActive ? css.activeSublink : css.sublink)}>Cast</NavLink></li>
            <li><NavLink to="reviews" state={{from: location.state?.from}} className={({ isActive }) => (isActive ? css.activeSublink : css.sublink)}>Reviews</NavLink></li></ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
    </>)
}

export default Movie;