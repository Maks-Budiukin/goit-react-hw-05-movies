import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "components/services/tmdbAPI";

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
    <ul>
    {trending.map((movie) =>  <Link to={`movies/${movie.id}`} key={movie.id} state={{ from: locationHome }}><li>{movie.title}</li></Link>) }
    </ul></>)
}

export default Home;