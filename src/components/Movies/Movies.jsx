import { useState, useEffect, useRef } from "react";
import { MoviesSearchForm } from "components/MoviesSearchForm/MoviesSearchForm";
import axios from "axios";

export const Movies = () => {

    const [request, setRequest] = useState("");
    const [movies, setMovies] = useState([]);

    const isFirstRender = useRef(false);
    
    const onSearchSubmit = query => {
        
        if (query.trim() === "") {
        alert('Write something!')
        return;
    }
      setRequest(query);
    }
    
    // const loadingHandler = (loadingState) => {
    // setIsLoading(loadingState);
    // }

    const fetchOnSubmit = async (movies) => {
    setMovies(movies)
    }

    //===========================

    const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
    const TRENDING_URL ='https://api.themoviedb.org/3/trending/movie/day'
    const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
    const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]


    async function fetchMovies(request) {
        if (request !== "") {
            const response = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY,
                    query: request,
                    // query: 'Alice',
                    page: 1,
                }
            }
            )
            const data = response.data;
    
            setMovies(data.results)
    
            return data;
        }
    }

    //==============================
    
    useEffect(() => {
        if (isFirstRender.current) {
            console.log(request)
        }
        fetchMovies(request)
              isFirstRender.current = true;
    },[request])




  return (
      <>
          <MoviesSearchForm onSubmit={onSearchSubmit}/>
          <ul>
              {movies.map((movie) => <li key={movie.id}>{movie.title}</li>) }
            </ul>
    </>
    );
}

