import { useState, useRef, useEffect, Suspense } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";

import { fetchDetails, IMG_URL } from "components/services/tmdbAPI";

const Movie = () => {

    const [movie, setMovie] = useState({})
    const { id } = useParams();
    const location = useLocation();
    
    const isFirstRender = useRef(true);
    
  useEffect(() => {
    if (isFirstRender.current) {
        fetchDetails(id)
        .then(data => setMovie(data))
      isFirstRender.current = false;
     }
  }, [id])
    
    return(<>
        
        <div>
            <Link to={location.state?.from ?? '/'}>Go Back</Link>
        <div className="poster">
            <img src={IMG_URL + movie.poster_path} alt="" width="200" />
        </div>
        <h2>{movie.title} ({movie.release_date})</h2>
        <p>{movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genre_ids}</p>
        </div>
        <ul><li><Link to="cast" state={{from: location.state?.from}}>Cast</Link></li>
            <li><Link to="reviews" state={{from: location.state?.from}}>Reviews</Link></li></ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
    </>)
}

export default Movie;