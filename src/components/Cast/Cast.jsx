import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { fetchCast, IMG_URL } from "components/services/tmdbAPI";

const Cast = () => {
    const [cast, setCast] = useState([])
    const {id } = useParams();

    const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      fetchCast(id).then(data => setCast(data))
      isFirstRender.current = false;
     }
  }, [id])

    return(<>{cast.map((c) => <div key={c.name}>
            <img src={IMG_URL+c.profile_path} alt={c.name + "'s photo"} width="100"></img>
            <p>{c.name}</p></div>
        )}
    </>)
}

export default Cast;