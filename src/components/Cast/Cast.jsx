import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { fetchCast, IMG_URL } from "services/tmdbAPI";
import css from "components/Cast/Cast.module.css"
import dummy from "../../../src/dummy.jpeg"

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

  return (<><div className={css.castContainer}>
      {cast.map((c) => <div key={c.name} className={css.castItem}>
            <img src={c.profile_path ? IMG_URL+c.profile_path : dummy} alt={c.name + "'s photo"} width="128"></img>
            <p>{c.name}</p></div>
        )}
    </div>
    </>)
}

export default Cast;