import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL ='https://api.themoviedb.org/3/trending/movie/day'
// const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';
const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '8fc2203a963c0ec70e341b4ae617a08e';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // ["w300","w780","w1280","original"]

export async function fetchTrendingMovies() {
    
    const {data} = await axios.get(TRENDING_URL, {
        params: {
            api_key: API_KEY,
        }
    }
    )

    return data.results;
}
  
export async function fetchMovies(request) {
        if (request !== "") {
            const {data} = await axios.get(BASE_URL, {
                params: {
                    api_key: API_KEY,
                    query: request,
                    page: 1,
                }
            }
            )

            return data.results;
        }
    }

export const fetchDetails = async (id) => {
    if (id) {
    const {data} = await axios.get(`${DETAILS_URL}${id}`, {
            params: {
                api_key: API_KEY,
            }
        }
    )
    
    return data;
}
}
    
export async function fetchCast(id) {
    if (id) {
    const {data} = await axios.get(`${DETAILS_URL}${id}/credits`, {
        params: {
            api_key: API_KEY,
        }
    }
    )

    return data.cast;
}
}

export async function fetchReviews(id) {
    if (id) {
    const {data} = await axios.get(`${DETAILS_URL}${id}/reviews`, {
        params: {
            api_key: API_KEY,
            page: 1,
        }
    }
    )

    return data.results;
}
}