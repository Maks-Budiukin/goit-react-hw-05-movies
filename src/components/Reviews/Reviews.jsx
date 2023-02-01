import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";


export const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const {id } = useParams();
    console.log(id)

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]

    const isFirstRender = useRef(true);

    
async function fetchReviews(id) {
    if (id) {
    const response = await axios.get(`${DETAILS_URL}${id}/reviews`, {
        params: {
            api_key: API_KEY,
            page: 1,
        }
    }
    )
    const details = response.data;
    console.log(response.data);
    setReviews(response.data.results);
    return details;
}
}



  useEffect(() => {
    if (isFirstRender.current) {
        fetchReviews(id)
        console.log("121")
      isFirstRender.current = false;
     }
  }, [])


    return (<>{reviews.length > 0 ? 
    reviews.map((r) => <div key={r.id}>
            
        <h3>Author: {r.author}</h3>
        <p>{r.content}</p></div>
        )
        : <p>We don't have reviews for this movie</p>
    }
    </>)
}

