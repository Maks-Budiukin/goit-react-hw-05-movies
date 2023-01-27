import { useState, useEffect, useRef } from "react";
import axios from "axios";


export const Home = () => {
const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL ='https://api.themoviedb.org/3/trending/movie/day'
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]


async function fetchMovies() {
    setLoading(true)
    const response = await axios.get(TRENDING_URL, {
        params: {
            api_key: API_KEY,
            // query: "tom",
            // query: 'Alice',
            // page: 1,
        }
    }
    )
    const data = response.data;
  
  setTrending(data.results)
  setLoading(false)
    return data;
  }
  
  useEffect(() => {
    if (isFirstRender.current) {
      fetchMovies()
      isFirstRender.current = false;
     }
  }, [])



    return(<><h1>Trending today</h1>
    <ul>
    {loading && <p>Loading...</p>}
    {trending.map((movie) => <li key={movie.id}>{movie.title}</li>) }
    </ul></>)
}


