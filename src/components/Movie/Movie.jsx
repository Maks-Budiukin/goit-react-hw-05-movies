import {useState, useRef} from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { Reviews } from "components/Reviews/Reviews";
import { Cast } from "components/Cast/Cast";

export const Movie = () => {

    const [movie, setMovie] = useState({})
    const {id } = useParams();
    

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]

    const isFirstRender = useRef(true);

 


async function fetchDetails(id) {
    if (id) {
    const response = await axios.get(`${DETAILS_URL}${id}`, {
        params: {
            api_key: API_KEY,
        }
    }
    )
    const details = response.data;
    console.log(response.data);
    setMovie(response.data);
    return details;
}
}

// useEffect(() => {
//     fetchDetails(100)
// },[])

  useEffect(() => {
    if (isFirstRender.current) {
      fetchDetails(id)
      isFirstRender.current = false;
     }
  }, [])


    return(<>
        
    <div>
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
        <ul><li><Link to="cast">Cast</Link></li>
            <li><Link to="reviews">Reviews</Link></li></ul>
        <Outlet/>
    </>)
}

