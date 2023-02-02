import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { fetchReviews } from "components/services/tmdbAPI";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { id } = useParams();
    
    const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
        fetchReviews(id)
            .then(data => setReviews(data))
      isFirstRender.current = false;
     }
  }, [id])

    return (<>{reviews.length > 0 ? 
    reviews.map((r) => <div key={r.id}>
            
        <h3>Author: {r.author}</h3>
        <p>{r.content}</p></div>
        )
        : <p>We don't have reviews for this movie</p>
    }
    </>)
}

export default Reviews;