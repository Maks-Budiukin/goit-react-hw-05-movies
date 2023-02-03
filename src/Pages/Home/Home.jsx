import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "services/tmdbAPI";
import css from "Pages/Movies/Movies.module.css"

const Home = () => {

    const [trending, setTrending] = useState([]);
    const isFirstRender = useRef(true);
    const locationHome = useLocation();

useEffect(() => {
    if (isFirstRender.current) {
      fetchTrendingMovies()
      .then(data => setTrending(data))
      isFirstRender.current = false;
     }
  }, [])

    return(<><h1>Trending today</h1>
    <ul className={css.searchlist}>
    {trending.map((movie) =>  <Link to={`movies/${movie.id}`} key={movie.id} state={{ from: locationHome }} className={css.searchlink}><li>{movie.title}</li></Link>) }
    </ul></>)
}

export default Home;