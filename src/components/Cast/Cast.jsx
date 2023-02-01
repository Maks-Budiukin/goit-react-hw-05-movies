import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";


export const Cast = () => {
    const [cast, setCast] = useState([])
    const {id } = useParams();
    console.log(id)

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]

    const isFirstRender = useRef(true);


async function fetchCast(id) {
    if (id) {
    const response = await axios.get(`${DETAILS_URL}${id}/credits`, {
        params: {
            api_key: API_KEY,
        }
    }
    )
    const details = response.data;
    console.log(response.data);
    setCast(response.data.cast);
    return details;
}
}

// useEffect(() => {
//     fetchDetails(100)
// },[])

  useEffect(() => {
    if (isFirstRender.current) {
        fetchCast(id)
        console.log("121")
      isFirstRender.current = false;
     }
  }, [])


    return(<>{cast.map((c) => <div key={c.name}>
            <img src={IMG_URL+c.profile_path} alt={c.name + "'s photo"} width="100"></img>
            <p>{c.name}</p></div>
        )}
    </>)
}

